'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'; // 引入图表插件进行使用

function RefDemo() {
  const tagBtn = useRef<HTMLButtonElement>(null);
  const tagChartContainer = useRef<HTMLDivElement>(null);
  const initChart = () => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(tagChartContainer.current);

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  };
  useEffect(() => {
    // 组件初始化之后执行
    // ts中的一些规范，这里使用了!实现强制转换
    tagBtn.current!.style.color = 'red';
    initChart(); // 初始化echarts组件
  }, []);
  return (
    <>
      <h1>使用useRef这个api可以获取当前组件中的某一个dom元素</h1>
      <button ref={tagBtn}>按钮</button>
      <div
        ref={tagChartContainer}
        style={{ width: '600px', height: '400px' }}
      ></div>
    </>
  );
}

export default RefDemo;
