import React from 'react';

import styles from './index.module.scss';

import images from './images';

function Projects() {
  return (
    <div className={styles.projects}>
      <h3>Main projects</h3>
      <div>
        {images.map((img) => (
          <a key={img.alt} href={img.link}>
            <img alt={img.alt} src={img.src} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
