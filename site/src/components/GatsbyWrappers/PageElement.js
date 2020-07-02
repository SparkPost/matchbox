import React from 'react';
import Critical from './Critical';

function PageElement(props) {
  return (
    <>
      <Critical />
      {props.children}
    </>
  );
}

export default PageElement;
