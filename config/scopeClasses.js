'use strict';

import { basename } from 'path';
import { camelCase } from 'change-case';

const cache = {
  files: {},
};

const COMPONENT_REGEX = /^[A-Z]\w+$/;
const CHILD_REGEX = /^\w+-\w+$/;

const isComponent = (className) => COMPONENT_REGEX.test(className);
const isChild = (className) => CHILD_REGEX.test(className);

const prefix = (className) => `Matcbox-${className}`;
const child = (component, child) => `${component}__${child}`
const variation = (component, variation) => `${component}--${variation}`

export default function(localName, filePath) {
  const file = cache.files[filePath] || {};
  const componentName = basename(filePath, '.scss');

  const baseClass = prefix(componentName);
  let className = file[localName];

  if (className == null) {
    if (isComponent(localName)) {

      // if the filename === name of the class
      // use base class else, use child selector
      className = componentName === localName
        ? baseClass
        : child(baseClass, localName);

    } else if (isChild(localName)) {

      const [subcomponent, variation] = localName.split('-');
      const subcomponentName = child(baseClass, subcomponent);
      className = variation(subcomponentName, camelCase(variation));

    } else {
      className = variation(baseClass, camelCase(localName));
    }
  }

  file[localName] = className;
  cache.files[filePath] = file;

  // console.log('-------');
  // console.log(cache.files[filePath]);

  return className;
}
