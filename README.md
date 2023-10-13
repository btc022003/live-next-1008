开始准备做一些列的Next.js，顺带的补一下react的基础知识。为想学习react的人提供些许帮助

目前的Next.js的版本是13.5

目前来讲有一个认知，这个框架更像PHP

【视频链接】(https://www.bilibili.com/video/BV1rC4y1V7FV/)

## web开发

就是开发一个web项目，就是我们常见的运行在浏览器中的项目

### 服务器端和客户端

服务器端：所有生成数据的代码都是服务器端代码

客户端：所有的请求到本地的，然后被自己的浏览器解析的代码就是客户端代码

### 常见的一些web开发框架

asp.net

jsp

php

rails

express

### 前端是做什么的

前端就是一切图的。前端干的就是写页面，展示数据

对目前的前端要求越来越高了：

1. 具备常见的前端框架vue、react
2. 还需要会node
3. 还需要具备一些数据库相关的开发经验
4. 还需要具备一些服务器部署和运维相关的技能
5. 前端开始往全栈的方向发展
6. 同时需要注意，计算机软件基础理论知识很重要

随着你们工作经验的积累，需要你慢慢的补齐一些基本功

## Next.js基础用法

[https://nextjs.org](https://nextjs.org/docs)

```bash
npx create-next-app my-react-pre # 创建一个next项目
```

### 企业级开发框架

是一个企业级的代码封装，内置了各种插件，我们就可以直接在这个框架的基础之上做后续项目开发

### 目录结构

```bash
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── src
│   └── app
│       ├── api
│       │   └── hello
│       │       └── route.ts
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.module.css
│       └── page.tsx
└── tsconfig.json
```

在13.5之后，所有的路由文件都可以直接使用page.tsx表示，page文件就是一个页面，在指定的目录中创建页面就行

app目录中的_components目录是不会被解析成路由目录的

### jsx语法

就是可以在js中直接使用html标签

### hooks

react16.8之后新增的一些API，可以让我们在函数式组件中定义状态数据和模拟组件生命周期。目前来说依然是官方在主推的一个写法

常见的hooks有：useState、useEffect、useMemo、useCallback、useContext、useRef、useReducer

**在next.js这个框架中需要大家注意hooks函数只能在客户端组件使用**

### useState

在函数式组件中定义一个局部状态数据，在组件中数据或者属性改变之后组件会重新渲染(就是函数式组件这个函数会重新执行)

useState接受一个默认值，返回的是一个数组

数组有两项：

1. 第一项，表示数据的名字
2. 第二项，表示改变数据的方法

第二项可以接受两种形式的参数

1. 直接是一个值
2. 是一个函数，这个函数的默认参数为上一次的最新数据，返回值为新的数据

### useEffect

副作用，就是当依赖的数据改变之后执行一个回调函数。接受两个参数

1. 参数一，是一个回调函数
2. 参数二，是一个依赖数组

依赖数组中的任意一个数据改变之后，回调函数会重新执行

### useRef

作用是获取组件中的dom元素

### useMemo

作用是缓存一个值，他的语法和useEffect很像，也是接受两个参数。当依赖项目中的数据不改变的时候缓存的值不会更新

### useCallback

作用是缓存一个function

### memo

缓存一个组件，当组件接收到的属性不改变的时候，组件不会重新更新

### useContext

获取context上下文，实现跨组件之间传参数

### useReducer

另一种定义数据的方案，和useState不一样，可以尝试。如果项目中的数据特别复杂，建议使用

## Tailwindcss使用

[https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)
