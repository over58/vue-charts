<template>
  <div id="chart"></div>
</template>
<script>
import * as D3 from 'd3'
import D3Tooltip from 'd3-tooltip'

let vm = null
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    getSvgDom () {
      let height = 200 // 画布的高度
      let width = this.$el.parentNode.offsetWidth - 301

      let svg = D3.select('#chart')// 选择文档中的body元素
        .append('svg') // 添加一个svg元素
        .attr('width', width) // 设定宽度

        .attr('height', height) // 设定高度
      let dataset = [650, 230, 200, 180, 150, 130, 100, 90, 50, 10]

      let num = dataset.length - 1

      let dataX = ['javaScript', 'CSS', 'HTML', 'canvas', 'svg', 'webgl', 'vue.js', 'jQuery', 'node.js', 'java']
      let dataY = ['0', '1年', '2年', '3年', '4年']
      let dataAx = dataX.concat(dataY)

      let top = 10
      let left = 80
      let right = 30
      let bottom = 30
      let rectHeight = (height - bottom - top - 5) / dataset.length // 每个矩形所占的像素高度(包括空白)
      let rectWidth = (width - left - right) / (dataY.length - 1)

      let tooltip = D3Tooltip(D3)
      // 绘制外层边框
      svg.append('rect')
        .attr('x', left)
        .attr('y', top)
        .attr('width', width - left - right)
        .attr('height', height - top - bottom)
        .attr('fill', '#F6F6F6')
        .attr('stroke', '#555')
      // 绘制柱子
      svg.selectAll('svg')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', left)
        .attr('y', function (d, i) {
          return i * rectHeight + top + 5
        })
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('width', function (d, i) {
          return d
        })
        .attr('height', rectHeight - 5)
        .attr('fill', 'steelblue')
        .on('click', function (d, i) {
          // return alert(d);
        })
        .on('mouseover', (d, i) => {
          let html = d.toString()
          tooltip.html(dataX[i] + ': ' + Math.round((html / width) * 12 * 4) + '个月')
          tooltip.show()
        })
        .on('mouseout', (d, i) => {
          tooltip.hide()
        })
        .attr('cursor', 'pointer')
        .attr('opacity', 0.8)
        .append('animate')
        .attr('attributeName', 'width')
        .attr('attributeType', 'XML')
        .attr('begin', '0s')
        .attr('dur', '1s')
        .attr('fill', 'freeze')
        .attr('from', '20')
        .attr('to', function (d) {
          return d
        })

      svg.selectAll('text')
        .data(dataAx)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
          if (i > num) {
            return (i - num - 1) * rectWidth + left - 10
          }
          return 0
        })
        .attr('y', function (d, i) {
          if (i > num) {
            return height - bottom + 12
          }
          return i * rectHeight + 23
        })
        .attr('fill', '#555')
        .attr('font-size', 12)
        .text(function (d, i) {
          return d
        })
    }
  },
  created () {
    vm = this
    console.log(vm)
    console.log('d3', D3)
    console.log('d3-tooltip', D3Tooltip)
  },
  mounted () {
    this.getSvgDom()
  }
}
</script>
<style scoped>
#chart{
  height: 300px;
  border: solid 1px red;
}
</style>
