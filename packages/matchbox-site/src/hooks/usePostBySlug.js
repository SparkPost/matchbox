import { useStaticQuery, graphql } from 'gatsby';

function usePostBySlug() {
  const data = useStaticQuery(graphql`
    query PostsBySlug($id: String) {
      mdx(id: { eq: $id }) {
        body
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
      }
    }
  `);

  return data.mdx;
}

export default usePostBySlug;
