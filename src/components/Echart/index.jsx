import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux'


export default function Echart() {

  // 获取分类
  const categories = useSelector(state => state.categories).categories

  const getdDataList = categories => {
    const dataList = []
    categories.map(item => {
      return dataList.push({name: item.name, value: item.c_articles.length})
    })
    return dataList
  }

  // 饼图配置
  let option = {
    // title: {
    //   text: '文章分类',
    //   left: '50%',
    // },
    tooltip: {
      trigger: 'item'
    },
    // legend: { // 图例
    //   orient: 'vertical',
    //   left: 'left'
    // },
    series: [
      {
        name: '分类名称',
        type: 'pie',
        radius: '50%',
        width: '500px',
        height: '500px',
        top: '-20%',
        left: '25%',
        // label: {
        //   show: false
        // },
        data: getdDataList(categories),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return (
    <div className='echart'>
      <div id='catrgory-pie'>
        <ReactECharts style={{ width: '610px', height: '350px' }} option={option} />
      </div>
    </div>
  )
}
