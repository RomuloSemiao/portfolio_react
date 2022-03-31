import React from "react";

import styles from './index.module.scss';

import Lamp from "../../assets/images/lampada-de-ideia.svg";

function Skills() {
  return (
    <div className={styles.bgSoftSkills}>
      <div className={styles.softSkills}>
        <img alt="" src={Lamp} />
        <div>
          <h3>And what about my soft skills?</h3>
          <p>
            I am a guy that can work with people easily and make friends at the work
            enviroment. I Have a practice to learn new concepts and crativity at my
            job. Always seeking for new tools and things that could help me at
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
