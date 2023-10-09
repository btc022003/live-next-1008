'use client';
import React, { useEffect, useState } from 'react';

function EffectDemo() {
  const [c, setC] = useState(1);

  // 依赖项，参数二有三种形式
  // 1. 参数二不存在，没有第二个参数。每一次组件更新的时候回调函数都会执行
  // 2. 参数二为空白的数组，就是数组中没有数据。只有组件初始化的时候执行一次，对应class组件中的componentDidMount
  // 3. 参数二中有一个或者多个数据。任何一个数据改变的时候回调函数都会执行，对应class组件中的componentDidUpdate
  // 参数一的回调函数可以返回一个function，这个返回的函数在组件销毁的时候执行，对应class组件中的componentWillUnmount
  useEffect(() => {
    console.log('组件初始化了');
    return () => {
      console.log('组件销毁了');
    };
  }, []);
  useEffect(() => {
    console.log('组件初始化了2');
    return () => {
      console.log('组件销毁了');
    };
  }, []);
  useEffect(() => {
    console.log('c变了');
  }, [c]);
  return (
    <div>
      EffectDemo
      <button onClick={() => setC(c + 1)}>{c}</button>
    </div>
  );
}

export default EffectDemo;
