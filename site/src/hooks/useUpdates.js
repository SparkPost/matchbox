import { useStaticQuery, graphql } from 'gatsby';

function useUpdates() {
  const data = useStaticQuery(graphql`
    query UpdatesQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
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
