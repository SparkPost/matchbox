import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ChevronRight } from '@sparkpost/matchbox-icons';

import styles from './CodeBlock.module.scss';

class CodeBlock extends Component {
  static displayName = 'CodeBlock';

  static defaultProps = {
    height: 355,
    numbered: false,
  };

  static propTypes = {
    /**
     * The string of code to render
     */
    code: PropTypes.string,

    /**
     * Height in pixels of the <pre> block
     */
    height: PropTypes.number,

    /**
     * Use line numbers instead of chevrons
     */
    numbered: PropTypes.bool,
  };

  renderPrefix = (row, i) => {
    if (this.props.numbered) {
      return (
        <div key={i} className={styles.LineNumber}>
          {i}
        </div>
      );
    } else {
      return <ChevronRight key={i} className={styles.LineChevron} />;
    }
  };

  render() {
    const { code, height, className } = this.props;

    let prefixMarkup = null;
    const rows = code.split(/\r\n|\r|\n/);

    if (rows.length) {
      prefixMarkup = <div className={styles.PrefixWrapper}>{rows.map(this.renderPrefix)}</div>;
    }

    return (
      <pre className={classnames(styles.CodeBlock, className)} style={{ height: `${height}px` }}>
        <code className={styles.Code}>{code}</code>
        {prefixMarkup}
      </pre>
    );
  }
}

export default CodeBlock;
