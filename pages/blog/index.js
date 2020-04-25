import { withRouter } from 'next/router';
import React from 'react';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Layout from '../../shared/components/Layout';

const BlogPage = ({ router }) => {
  let component;

  if (router.query && router.query.slug) {
    const post = require(`../../content/blog/${router.query.slug}`);
    component = <BlogPost post={post} url={router} />;
  } else if (router.query && router.query.tag) {
    component = <Blog tag={router.query.tag} />;
  } else {
    component = <Blog />;
  }

  return <Layout url={router}>{component}</Layout>;
};

export default withRouter(BlogPage);
