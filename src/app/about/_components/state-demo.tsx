'use client';
// 加了 use client 之后这个组件就是一个客户端组件，所有的hooks就能使用了
import React, { useState } from 'react';

function StateDemo() {
  // useState接受一个默认值
  //  返回一个数组
  //    数组的第一项，表示数据的名字
  //    数组的第二项，表示改变数据的方法
  //      可以接受两种形式的参数
  //      1.直接是一个值
  //      2.【建议】是一个函数，这个函数的默认参数为上一次的最新数据，返回值为新的数据。在我们后面讲到useCallback做优化的时候会使用到
  const [count, setCount] = useState(1);
  const [list, setList] = useState([
    {
      id: 1,
      txt: '小新',
    },
    {
      id: 2,
      txt: '风间',
    },
  ]);
  // 演示倒计时效果
  const [time, setTime] = useState(10);
  return (
    <div>
      StateDemo
      <h3>当前的count为:{count}</h3>
      {/* 添加时间的时候直接写onXX就行 */}
      <button
        onClick={() => {
          // 改变数据
          // 第一种写法
          setCount(count + 1);
        }}
      >
        改变
      </button>
      <button
        onClick={() => {
          setCount((v) => {
            return v + 1;
          });
        }}
      >
        改变
      </button>
      <hr />
      <input
        type='text'
        placeholder='请输入内容'
        onKeyUp={(e) => {
          // 判断按键的键值，13表示回车键
          if (e.keyCode === 13) {
            //
            const txt = e.currentTarget.value;
            if (txt) {
              // 存，使用扩展运算符改变数据
              setList([...list, { id: Date.now(), txt }]);
              e.currentTarget.value = ''; // 清空输入框的数据
            } else {
              alert('请输入内容');
            }
          }
        }}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.txt}</li>
        ))}
      </ul>
      <hr />
      <h1>剩余时间:{time}秒</h1>
      <button
        disabled={time < 10}
        onClick={() => {
          const timer = setInterval(() => {
            // 一个小细节问题，这东西主要在你做一些效果的时候会引发一些小bug
            setTime((t) => {
              if (t > 1) {
                return t - 1;
              } else {
                clearInterval(timer);
                return 0;
              }
            });
            console.log('执行了');
          }, 1000);
        }}
      >
        开始
      </button>
    </div>
  );
}

export default StateDemo;
