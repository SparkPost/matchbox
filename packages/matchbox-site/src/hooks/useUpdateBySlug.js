import { useStaticQuery, graphql } from 'gatsby';

function useUpdateBySlug() {
  const data = useStaticQuery(graphql`
    query UpdateBySlug($id: String) {
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

export default useUpdateBySlug;
