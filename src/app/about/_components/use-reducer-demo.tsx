'use client';
import React, { useReducer } from 'react';

// reducer函数
//    是一个纯函数，
//      接受不了一个数据和一个action，对数据处理之后返回一个新的数据

const reducerDemo = (state: any, action: any) => {
  // console.group('reducer函数执行了');
  // console.log(state);
  // console.log(action);
  // console.groupEnd();
  switch (action.type) {
    case 'PLUS':
      return { ...state, count: (state.count += action.payload) };
    case 'ADD':
      return { ...state, list: [...state.list, action.payload] };
    default:
      return { ...state };
  }
};

function UseReducerDemo() {
  // state 表示数据
  // dispatch 派发一个action，改变数据
  const [state, dispatch] = useReducer(reducerDemo, {
    title: '这是useReducer的demo',
    count: 1,
    list: [], // ['a', 'b', ...]
  });

  // console.log(state);
  return (
    <div>
      <h1>{state.title}</h1>
      <button
        onClick={() => {
          // dispatch接收一个对象作为参数
          //  会触发reducer函数执行
          // console.log(1);
          dispatch({
            type: 'PLUS',
            payload: 2,
          });
        }}
      >
        {state.count}
      </button>
      <br />
      <input
        type='text'
        placeholder='请输入内容'
        // 回车之后
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            if (e.currentTarget.value) {
              // 派发action，存储数据
              dispatch({
                type: 'ADD',
                payload: e.currentTarget.value,
              });
            }
          }
        }}
      />
      <hr />
      <ul>
        {state.list.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerDemo;
