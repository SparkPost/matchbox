function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest
  };
}

const pageQuery = `{
  allMdx {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          category
        }
        excerpt(pruneLength: 200)
      }
    }
  }
}`;

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      return data.allMdx.edges.map(pageToAlgoliaRecord);
    }, // optional
    indexName: 'matchbox', // overrides main index name, optional
    settings: { attributesToSnippet: [`excerpt:20`] }
    // matchFields: ['slug', 'modified'] // Array<String> overrides main match fields, optional
  }
];

module.exports = queries;
