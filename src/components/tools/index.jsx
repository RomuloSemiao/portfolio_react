import React from "react";

import Fade from 'react-reveal/Fade';
import styles from './index.module.scss';

import Languages from "./images";

function Tools() {
  return (
    <Fade bottom>
      <div className={styles.tools}>
        <h3>Main tools</h3>

        <div>
          {Languages.map((img) => (
            <img className={styles.images} alt={img.name} src={img.src} />
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Tools;
