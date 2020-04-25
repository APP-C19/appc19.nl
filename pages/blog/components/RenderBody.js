import React from 'react';

export default ({ content, className }) => (
  <div
    dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
    className={className}
  />
);
