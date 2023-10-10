'use client';
import React, { useState, memo, useCallback } from 'react';

// memo作用是对组件做缓存，当组件接收到的属性不改变的时候组件不会重新渲染

// 数据类型定义
type IItem = {
  txt: string;
  id: number;
};

const Item = ({ txt, del, id }: IItem & { del: (id: number) => void }) => {
  console.log('Item render');
  return (
    <div style={{ borderBottom: '1px solid orange', padding: '12px' }}>
      <p>{txt}</p>
      <button onClick={() => del(id)}>删除</button>
    </div>
  );
};

const MemoItem = memo(Item);

function CallbackDemo() {
  const [list, setList] = useState<IItem[]>([]);
  const saveHandle = (e: any) => {
    if (e.keyCode === 13) {
      if (e.currentTarget.value) {
        setList([...list, { id: Date.now(), txt: e.currentTarget.value }]);
      } else {
        alert('请输入内容');
      }
    }
  };

  // 每一次组件更新之后，这个方法都会重新定义，每一次数据改变之后都是一个新的方法
  // 为了解决这个问题，可以使用useCallback对function做缓存
  const del = useCallback((id: number) => {
    // 这里定义了一个删除函数
    // console.log(list);
    // 因为对函数做了缓存，所以此处获取list数据的时候是初始化的数据
    // 我们改变数据的时候需要使用回调函数的写法设置值
    setList((v) => {
      return v.filter((item) => item.id != id);
    });
  }, []);
  return (
    <div>
      <input type='text' placeholder='请输入内容' onKeyUp={saveHandle} />
      <hr />
      {list.map((item) => (
        <MemoItem key={item.id} del={del} {...item}></MemoItem>
      ))}
    </div>
  );
}

export default CallbackDemo;
