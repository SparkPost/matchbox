import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { MdCheck, MdInfo, MdDanger } from 'react-icons/lib/md';

import styles from './Banner.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true };

const IconSection = ({ status }) => {
  if (status === 'default') {
    return null;
  }

  const icons = {
    success: MdCheck,
    info: MdInfo,
    danger: MdDanger
  }

  const Icon = icons[status];

  return (
    <div className={styles.IconWrapper}>
      <Icon size={24} className={styles.Icon} />
    </div>
  );
};

class Banner extends Component {

  render() {
    const {
      children,
      title,
      status = 'default',
      onDismiss,
      action,
      secondaryAction,
      fixed,
      autoDismiss,
    } = this.props;

    // const headerMarkup = title
    //   ? <Header title={title} actions={actions} />
    //   : null;
    //
    const titleMarkup = title
      ? <h5 className={styles.Title}>{ title }</h5>
      : null;

    const bannerStyles = classNames(
      styles.Banner,
      styles[`${status}`],
      fixed && styles.fixed
    );

    return (
      <div className={bannerStyles}>
        {/* <IconSection status={status} /> */}
        <div className={styles.Content}>
          { titleMarkup }
          { children }
        </div>
      </div>
    );
  }
};

// Panel.propTypes = {
//   title: PropTypes.string,
//   accent: PropTypes.bool,
//   sectioned: PropTypes.bool,
//   actions: PropTypes.arrayOf(PropTypes.shape({
//     content: PropTypes.string.isRequired
//   })),
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ]),
// };

export default Banner;
