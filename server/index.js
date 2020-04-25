const express = require('express');
const next = require('next');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const pinoLogger = require('express-pino-logger');
const revProc = (proxy => proxy.createProxyServer())(require('http-proxy'));
const Slack = require('node-slack');

const port = parseInt(process.env.PORT, 10) || 3001;
const nextPort = port + 1;
const apiPort = port + 2;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const slack = new Slack(
      'https://hooks.slack.com/services/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'
);

// add logging
let pino;
// eslint-disable-next-line no-console
let log = console.log.bind(console);
if (!dev) {
  pino = pinoLogger();
  log = pino.logger.info.bind(pino.logger);
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => app.render(req, res, '/home'));

    server.get(`/blog/tag/:tag`, (req, res) =>
      app.render(req, res, '/blog', {
        tag: req.params.tag
      })
    );

    server.get(`/blog/:slug`, (req, res) =>
      app.render(req, res, `/blog`, {
        slug: req.params.slug
      })
    );

    server.get('*', (req, res) => handle(req, res));

    server.listen(nextPort, err => {
      if (err) throw err;
      log(
        `> ${process.env.WWW_DOMAIN} at ${
          process.env.NEXT_DIR
        } Next ready on http://127.0.0.1:${nextPort}`
      );
    });
  })
  .then(() => {
    const api = express();
    api.use(compression({ level: 9 }));
    api.use(helmet());
    api.disable('x-powered-by');
    api.use(bodyParser.urlencoded({ extended: false }));
    api.use(bodyParser.json());
    api.post('/contact', (req, res) => {
      log(req.body);
      if (!req.body) {
        res.sendStatus(400);
      } else {
        slack.send({
          text: `A message came in from cafienne.io;
        ------------------------------
        :bust_in_silhouette: ${req.body.name}
        ------------------------------
        :email: ${req.body.email}
        ------------------------------
        message:  ${req.body.message}
        ------------------------------
        `,
          channel: '#cafienne-public',
          username: 'Cafienne',
          icon_emoji: ':coffee:',
          attachments: [],
          unfurl_links: true,
          link_names: 1
        });
        res.sendStatus(200);
      }
    });
    api.post('/request', (req, res) => {
      log(req.body);
      if (!req.body) {
        res.sendStatus(400);
      } else {
        slack.send({
          text: `A request for github acces came in from cafienne.io;
        ------------------------------
        :bust_in_silhouette: ${req.body.name}
        ------------------------------
        :email: ${req.body.email}
        ------------------------------
        :smile_cat: ${req.body.github}
        ------------------------------
        message:  ${req.body.message}
        ------------------------------
        `,
          channel: '#cafienne-public',
          username: 'Cafienne',
          icon_emoji: ':coffee:',
          attachments: [],
          unfurl_links: true,
          link_names: 1
        });
        res.sendStatus(200);
      }
    });
    if (!dev) {
      api.use(pino);
    }
    api.listen(apiPort, err => {
      if (err) throw err;
      log(`> API ready on http://127.0.0.1:${apiPort}`);
    });
  })
  .then(() => {
    const proxy = express();
    proxy.disable('x-powered-by');

    proxy.all('/contact', (req, res) => {
      revProc.web(req, res, { target: `http://127.0.0.1:${apiPort}` });
    });

    proxy.all('/request', (req, res) => {
      revProc.web(req, res, { target: `http://127.0.0.1:${apiPort}` });
    });

    proxy.all('/*', (req, res) => {
      revProc.web(req, res, { target: `http://127.0.0.1:${nextPort}` });
    });

    proxy.listen(port, err => {
      if (err) throw err;
      log(`PROXY started on localhost:${port}`);
    });
  });
