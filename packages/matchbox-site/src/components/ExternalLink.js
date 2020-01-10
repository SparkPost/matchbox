import React from 'react';

const ExternalLink = (props) => <a href={props.to} target="_blank" rel="noopener norefferer">{props.children}</a>;
export default ExternalLink;
