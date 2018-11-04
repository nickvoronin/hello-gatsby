import React from 'react';
import { graphql, Link } from 'gatsby';

const Temlate = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { frontmatter: { title }, html } = data.markdownRemark;
  return (
    <>
      <h1>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          fontFamily: 'avenir',
        }}
      />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
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