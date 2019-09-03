import { useStaticQuery, graphql } from 'gatsby';

function useComponentProps(name) {
  const data = useStaticQuery(graphql`
    query PropTableQuery {
      allComponentMetadata {
        nodes {
          displayName
          props {
            defaultValue {
              computed
              value
            }
            description {
              text
            }
            name
            required
            type {
              name
              raw
              value
            }
          }
        }
      }
    }
  `);

  const nodes = data.allComponentMetadata.nodes;

  return nodes.filter(({ displayName, ...rest }) => displayName === name).shift();
}

export default useComponentProps;
