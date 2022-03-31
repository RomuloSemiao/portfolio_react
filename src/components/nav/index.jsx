import React from "react";

import Fade from 'react-reveal/Fade';

import '../app/index';
import { links } from "./links";
import '../about/index';
import '../tools/index';
import '../skills/index';
import '../projects/index';

export default function Nav() {
  return (
    <Fade top>
      {links.map((link) => (
        <a href={link.url} key={link.id}>
          {link.text}
        </a>
      ))}
    </Fade>
  );
}
