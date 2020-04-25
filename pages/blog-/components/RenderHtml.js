import React from 'react';

export default ({ html, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);
