export default (url, values) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};
