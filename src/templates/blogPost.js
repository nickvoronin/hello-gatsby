import React from 'react';
import { graphql } from 'gatsby';

const Temlate = ({ data }) => {
  const { frontmatter: { title }, html } = data.markdownRemark;
  return (
    <>
      <h1>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html,
      frontmatter {
        title
        
      }
    }
  }
`;

export default Temlate;