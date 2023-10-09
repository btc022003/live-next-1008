import React from 'react';
import styles from './about.module.css'; // 局部样式
import StateDemo from './_components/state-demo';
import EffectDemo from './_components/effect-demo';

function About() {
  return (
    <div className={styles.container}>
      About
      {/* <StateDemo /> */}
      <EffectDemo />
    </div>
  );
}

export default About;
