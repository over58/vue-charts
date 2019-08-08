<template>
  <div>
    <div ref="chart" style="height:800px;border:solid 1px red"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import graph from './data1'
let vm = null
export default {
  components: {
  },
  data () {
    return {
      charts: {
        nodes: graph.data.elements.nodes,
        edges: graph.data.elements.edges,
        linesData: []
      },
      nodePositionMap: new Map(),
      chartInstance: null
    }
  },
  computed: {
  },
  methods: {
    initData () {
      this.charts.nodes = this.charts.nodes.map(node => {
        this.nodePositionMap.set(node.data.name, [node.position.x, node.position.y])
        return {
          name: node.data.name,
          data: node.data,
          value: [node.position.x, node.position.y],
          // x: node.position.x,
          // y: node.position.y,
          symbolSize: 20 * node.data.size,
          // alarm: node.alarm,
          // symbol: 'image:///asset/get/s/' + node.img,
          itemStyle: {
            normal: {
              color: '#12b5d0'
            }
          }
        }
      })

      this.charts.linesData = []

      this.charts.edges = this.charts.edges.map(edge => {
        this.charts.linesData.push([
          {
            coord: this.nodePositionMap.get(edge.data.source)
          },
          {
            coord: this.nodePositionMap.get(edge.data.target)
          }
        ])
        return {
          source: edge.data.source,
          target: edge.data.target,
          label: {
            normal: {
              show: true
              // formatter: edge.nam
            }
          },
          lineStyle: {
            normal: {
              color: edge.data.colour
            }
          }
        }
      })
    },
    init () {
      this.initData()
      let option = {
        title: {
          text: '网络拓扑图'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}',
          alwaysShowContent: true
        },
        backgroundColor: '#F5F5F5',
        xAxis: {
          min: 0,
          max: 5000,
          show: true,
          type: 'value'
        },
        yAxis: {
          min: 0,
          max: 980,
          show: true,
          type: 'value'
        },
        series: [
          {
            type: 'graph',
            layout: 'none',
            id: 'a',
            coordinateSystem: 'cartesian2d',
            edgeSymbol: ['', 'arrow'],
            // symbolSize: 50,
            label: {
              normal: {
                show: true,
                position: 'bottom'
                // color: '#12b5d0'
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                shadowColor: 'none'
              }
            },
            xAxis: {
              min: 0,
              max: 12,
              show: false,
              type: 'value'
            },
            yAxis: {
              min: 0,
              max: 12,
              show: false,
              type: 'value'
            },
            // edgeSymbolSize: 8,
            draggable: true,
            nodes: this.charts.nodes,
            edges: this.charts.edges,
            z: 4,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function (item) {
                    return item.data.name
                  }
                }
              }
            }
          },
          {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 4,
            effect: {
              show: true,
              trailLength: 0,
              symbol: 'arrow',
              color: '#12b5d0',
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                curveness: 0
              }
            },
            data: this.charts.linesData
          }
        ]
      }
      this.chartInstance = echarts.init(this.$refs.chart)
      this.chartInstance.setOption(option)
    }
  },
  mounted () {
    vm = this
    this.$nextTick(() => {
      this.init()
    })
    window.addEventListener('resize', () => {
      vm.chartInstance && this.chartInstance.resize()
    })
  }
}
</script>
<style scoped>
</style>
