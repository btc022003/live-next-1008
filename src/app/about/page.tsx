import React from 'react';
import styles from './about.module.css'; // 局部样式
import StateDemo from './_components/state-demo';
import EffectDemo from './_components/effect-demo';
import RefDemo from './_components/ref-demo';

function About() {
  return (
    <div className={styles.container}>
      {/* About */}
      {/* <StateDemo /> */}
      {/* <EffectDemo /> */}
      <RefDemo />
    </div>
  );
}

export default About;
