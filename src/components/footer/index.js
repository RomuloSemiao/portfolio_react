import React from 'react';

import styles from './index.module.scss';

import Images from './images';

function Footer() {
  return (
    <div className={styles.bgFooter}>
      <div className={styles.footer}>
        <p>Rômulo Semião © 2022</p>
        <div>
          {Images.map((img) => (
            <a href={img.link}>
              <img alt={img.alt} src={img.src} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
