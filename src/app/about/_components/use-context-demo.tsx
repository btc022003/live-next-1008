'use client';
import React, { createContext, useContext, useState } from 'react';
import { globalContext } from '@/app/_component/app-provider';
const context = createContext({
  title: '这是一个数据',
  count: 1,
  plus: () => {},
});

const AboutProvider = ({ children }: any) => {
  // context.Provider 相当于数据提供者
  //  value中的数据就可以在其内部的所有自组件上进行使用
  const [count, setCount] = useState(1);
  // 定义一个function
  const plus = () => {
    setCount(count + 1);
  };
  // 只有被context.Provider包含的子组件内部才能使用value中的数据
  //  一个项目可以包含多个context
  return (
    <context.Provider value={{ title: '666', count, plus }}>
      {children}
    </context.Provider>
  );
};

const SecondLev = ({ a }: any) => {
  const { title, count, plus } = useContext(context);
  // console.log(data); // useContext就可以获取context.Provider的value中的数据
  return (
    <div style={{ backgroundColor: '#339966', padding: '16px' }}>
      <h2>这是二级组件---{a}</h2>
      <p>{title}</p>
      <button
        onClick={() => {
          plus();
        }}
      >
        {count}
      </button>
    </div>
  );
};

const FirstLev = ({ a }: any) => {
  const { count } = useContext(context);
  return (
    <div className='f' style={{ padding: '16px', backgroundColor: '#993366' }}>
      <h1>这是一级组件---{count}</h1>
      <SecondLev a={a} />
    </div>
  );
};

function UseContextDemo() {
  const uu = useContext(context);
  console.log(uu);
  const { appName } = useContext(globalContext);
  return (
    <>
      {/* 必须是组件内的数据才能被访问到 */}
      <h2 style={{ color: 'red' }}>
        {uu.count}---{appName}
      </h2>
      <AboutProvider>
        <div>
          UseContextDemo
          <hr />
          <FirstLev a='123' />
        </div>
      </AboutProvider>
    </>
  );
}

export default UseContextDemo;
