import { useStaticQuery, graphql } from 'gatsby';

function useUpdates() {
  const data = useStaticQuery(graphql`
    query UpdatesQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
}

export default useUpdates;
