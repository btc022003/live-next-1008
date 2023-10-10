'use client';
import React, { useState, useMemo } from 'react';

function UseMemoDemo() {
  const [c1, setC1] = useState(1);
  const [c2, setC2] = useState(1);
  const [c3, setC3] = useState(1);
  // useMemo就是缓存一个值，当依赖的数据变了之后会重新计算这个值
  const m2 = useMemo(() => c2, [c3]); // m2的值应该是和c2一样的，但是m2的值会依赖于c3，当c3改变的时候m2会获取新的值
  return (
    <div>
      <h1>m2的值为:{m2}</h1>
      <button onClick={() => setC1(c1 + 1)}>c1:{c1}</button>
      <button onClick={() => setC2(c2 + 1)}>c2:{c2}</button>
      <button onClick={() => setC3(c3 + 1)}>c3:{c3}</button>
    </div>
  );
}

export default UseMemoDemo;
