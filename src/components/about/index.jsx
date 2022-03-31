import React from 'react';
import { Fade } from 'react-reveal';

// import Fade from 'react-reveal/Fade';
import Personal from '../../assets/images/personal-img.svg';

import styles from './index.module.scss';

function About() {
  return (
    <div className={styles.about}>
      <Fade left>
        <div className={styles.flex}>
          <h3>About me...</h3>
          <p>
            Front-end developer, 23 years old, from Rio de Janeiro, can speak English
            and a little bit of Spanish. Been studied front`s tools since August 2020,
            and started to work with it at September 2021, in Controplan Software. I
            have some knowledge about fixing computers and prints, and doing maintence
            of network cables.
          </p>
        </div>
      </Fade>
      <Fade right>
        <img alt="" src={Personal} />
      </Fade>
    </div>
  );
}

export default About;
