import React from 'react';
import styles from './about.module.css'; // 局部样式
import StateDemo from './_components/state-demo';
import EffectDemo from './_components/effect-demo';
import RefDemo from './_components/ref-demo';
import UseMemoDemo from './_components/use-memo-demo';

function About() {
  return (
    <div className={styles.container}>
      {/* About */}
      {/* <StateDemo /> */}
      {/* <EffectDemo /> */}
      {/* <RefDemo /> */}
      <UseMemoDemo />
    </div>
  );
}

export default About;
