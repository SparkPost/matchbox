import * as React from 'react';
import { DocGenContext } from '../context/DocGen';
import _ from 'lodash';

/**
 * This is still a WIP
 */

const ArrayOf = ({ type }) => (
  <React.Fragment>
    <span>[</span>
    <Type type={type} />
    <span>]</span>
  </React.Fragment>
);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
const parseRaw = (raw) => raw.replace(/Type$/, '').replace(/Type.isRequired$/, '!');
const printName = ({ name, raw, required }) => capitalize(raw && name === 'custom' ? parseRaw(raw) : name);
const prettyType = ({ required, name, raw }) => `${printName({ name, raw })}${required ? '!' : ''}`.replace(/!!$/, '!');

const Shape = ({ type }) => {
  const entries = Object.entries(type);
  return (
    <React.Fragment>
      {'{ '}
      {entries.map(([propName, data], index) => (
        <span key={propName}>
          {propName}: {prettyType(data)}
          {entries.length - 1 !== index ? ', ' : ''}
        </span>
      ))}
      {' }'}
      {type.required && '!'}
    </React.Fragment>
  );
};

const Type = ({ type }) => {

  if (typeof type === 'string') {
    return type;
  }

  if (type.name === 'enum') {
    return (
      <span>enum: ({type.value.map(({ value: n }) => <span>{n}, </span>)})</span>
    );
  }

  if (type.name === 'arrayOf') {
    return <ArrayOf type={type.value} />;
  }

  if (type.name === 'shape') {
    return <Shape type={type.value} />;
  }

  return null;
  // if (type.name) { return prettyType(type); }

};

const Prop = ({ name, required, defaultValue, description, type }) => (
  <div>
    <h6>{name} <small><Type type={type} /> {required && ' - Required'}</small></h6>
    {defaultValue && defaultValue.value && (
      <p><small>Default: {defaultValue.value}</small></p>
    )}
    <p>{description}</p>
  </div>
);

const PropsTable = ({ displayName, props }) => (
  <div>
    <h4>{displayName}</h4>
    {props.map((data) => <Prop {...data} />)}
  </div>
);
export default ({ children, of: Component }) => (
  <DocGenContext.Consumer>
    {(data) => {
      const componentInfo = _.get(data, Component.displayName);

      if (!componentInfo) { return 'No propTypes info'; }
      const { props } = componentInfo;
      if (!props) { return 'No prop data'; }
      // console.log(props);
      return <PropsTable displayName={Component.displayName} props={props} />;
    }}
  </DocGenContext.Consumer>
);
