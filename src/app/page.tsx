// 这个页面中的代码是服务器端代码
import React from 'react';

type IPerson = {
  name: string;
  desc: string;
};

// 组件可以直白的理解为就是一个自定义标签
// 组件就是一个function函数
// 建议组建名字都大写
//  每一个组件都需要一个返回值
//  返回的是当前组件需要展示的dom元素
const Person = (props: IPerson) => {
  // const person = {
  //   name: '那维莱特',
  //   desc: '水龙王，目前最强的输出。单人成队',
  // };
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

function Home() {
  const list = [1, 2, 3, 4, 5];
  const tags = [
    <h2 key={11}>这是一个二级标题</h2>,
    <p key={22}>这是一个段落</p>,
  ];
  // jsx语法
  // 样式名字的关键词需要使用className
  // style属性的写法比较特殊
  return (
    <div className='home'>
      <h1 style={{ color: 'white', backgroundColor: 'goldenrod' }}>
        这是一个首页
      </h1>
      <p>这段代码是服务器直接生成的内容</p>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr />
      {tags}
      <hr />
      {list.length > 0 ? (
        <span>数组中存在数据</span>
      ) : (
        <span>数组中没有数据</span>
      )}
      <Person name='刻晴' desc='黑丝猫耳，很强' />
      <Person name='行秋' desc='六星水神' />
    </div>
  );
}

export default Home;
