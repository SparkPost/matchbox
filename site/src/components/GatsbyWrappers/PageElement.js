import React from 'react';
import Critical from './Critical';

function PageElement(props) {
  return (
    <div className="site-wrapper">
      <Critical />
      {props.children}
    </div>
  );
}

export default PageElement;
