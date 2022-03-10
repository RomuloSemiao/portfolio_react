import React from 'react';

import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Header({ title, subtitle }) {
  return (
    <Fade top>
      <div className={styles.header}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </Fade>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
