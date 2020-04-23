import React from 'react';
import { useComponentProps, getPrettyType } from '../../helpers';
import styles from './PropsTable.module.scss';
import _ from 'lodash';

function PropsTable(props) {
  const { component } = props;
  const data = useComponentProps(component);

  if (!component) {
    return 'Provide a component to render a props table';
  }

  if (!data) {
    return `Unable to find props for '${component}'`;
  }

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {data.props.map((propProps, i) => (
          <Prop {...propProps} key={`${propProps.name}${i}`} />
        ))}
      </tbody>
    </table>
  );
}

function Prop(props) {
  const { name, description, required, type, defaultValue } = props;

  return (
    <tr>
      <td>
        <code>{name}</code>
      </td>
      <td>
        <code>{getPrettyType(type)}</code>
      </td>
      <td>{_.get(defaultValue, 'value')}</td>
      <td>{description.text}</td>
      <td>{required ? 'required' : ''}</td>
    </tr>
  );
}

export default PropsTable;
