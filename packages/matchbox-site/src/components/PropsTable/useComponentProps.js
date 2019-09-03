import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

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

  const nodes = _.get(data, 'allComponentMetadata.nodes');
  return _.filter(nodes, ({ displayName, ...rest }) => displayName === name).shift();
}

export default useComponentProps;
