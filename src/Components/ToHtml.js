import React from "react";

const ToHtml = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ToHtml;
