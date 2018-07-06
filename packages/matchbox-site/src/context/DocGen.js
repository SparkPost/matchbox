import React, { Component, createContext } from 'react';

const defaultContext = {};

export const DocGenContext = React.createContext(defaultContext);

/**
 * Reshapes react docgen info queried from the index layout
 * Injects info into context accessible through:
 * <DocGenContext.Consumer>
 *   {(allData) => ()}
 * </DocGenContext.Consumer>
 *
 * Provider usage:
 * <DocGenProvider allComponentMetadata={data.allComponentMetadata}>
 *   { children }
 * </DocGenProvider>
 *
 * Query:
 * allComponentMetadata(
 *   filter: { displayName: {regex: "/^[A-Z]/" }} # Only include react components
 * ) {
 *   edges {
 *     node {
 *       displayName
 *       props {
 *         name
 *         type {
 *           value
 *           name
 *         }
 *         description: docblock # Renames dockblock key to description
 *         defaultValue {
 *           value
 *         }
 *         required
 *       }
 *     }
 *   }
 * }
 */
class DocGenProvider extends Component {
  state = defaultContext;

  static getDerivedStateFromProps({ allComponentMetadata }) {
    let data = {};

    _.each(allComponentMetadata.edges, ({ node }) => {
      const { displayName, ...rest } = node;
      data = { ...data, [displayName]: rest };
    });

    return data;
  }

  render() {
    return (
      <DocGenContext.Provider value={this.state}>
        {this.props.children}
      </DocGenContext.Provider>
    );
  }
}

export default DocGenProvider;
