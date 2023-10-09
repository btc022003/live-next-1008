import React from 'react';
import styles from './about.module.css'; // 局部样式
import StateDemo from './_components/state-demo';

function About() {
  return (
    <div className={styles.container}>
      About
      <StateDemo />
    </div>
  );
}

export default About;
