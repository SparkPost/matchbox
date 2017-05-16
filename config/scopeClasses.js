'use strict';

import { basename } from 'path';
import { camelCase } from 'change-case';

const cache = { files: {} };

const COMPONENT_REGEX = /^[A-Z]\w+$/;
const CHILD_REGEX = /^\w+-\w+$/;

const isComponent = (className) => COMPONENT_REGEX.test(className);
const isChild = (className) => CHILD_REGEX.test(className);

const setPrefix = (className) => `Matcbox-${className}`;
const setChild = (component, child) => `${component}__${child}`
const setVariation = (component, variation) => `${component}--${variation}`

export default function(localName, filePath) {
  const file = cache.files[filePath] || {};
  const componentName = basename(filePath, '.scss');

  // Set class prefix
  const baseClass = setPrefix(componentName);

  let className = file[localName];

  if (className == null) {
    if (isComponent(localName)) {

      // Set block (root & child) element classes
      className = componentName === localName
        ? baseClass
        : setChild(baseClass, localName);

    } else if (isChild(localName)) {

      // Set child variation classes
      const [subcomponent, variation] = localName.split('-');
      const subcomponentName = setChild(baseClass, subcomponent);
      className = setVariation(subcomponentName, camelCase(variation));

    } else {

      // Set root variation classes
      className = setVariation(baseClass, camelCase(localName));

    }
  }

  file[localName] = className;
  cache.files[filePath] = file;
  return className;
}
