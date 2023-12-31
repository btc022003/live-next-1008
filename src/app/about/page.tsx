import React from 'react';
import styles from './about.module.css'; // 局部样式
import StateDemo from './_components/state-demo';
import EffectDemo from './_components/effect-demo';
import RefDemo from './_components/ref-demo';
import UseMemoDemo from './_components/use-memo-demo';
import CallbackDemo from './_components/callback-demo';
import UseContextDemo from './_components/use-context-demo';
import UseReducerDemo from './_components/use-reducer-demo';

function About() {
  return (
    <div className={styles.container}>
      {/* About */}
      {/* <StateDemo /> */}
      {/* <EffectDemo /> */}
      {/* <RefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <CallbackDemo /> */}
      {/* <UseContextDemo /> */}
      <UseReducerDemo />
    </div>
  );
}

export default About;
