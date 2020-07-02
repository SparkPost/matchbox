import React from 'react';
import GlobalStyle from './Global';

function PageElement(props) {
  return (
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  );
}

export default PageElement;
