import { useStaticQuery, graphql } from 'gatsby';

function usePosts() {
  const data = useStaticQuery(graphql`
    query SitePostsQuery {
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

export default usePosts;
