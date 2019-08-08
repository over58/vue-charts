let data = {
  nodes: [
    {
      x: '5',
      y: '5',
      name: '服务器',
      alarm: '产生告警了哦'
    },
    {
      x: '3',
      y: '0',
      name: '存储设备1'
    },
    {
      x: '7',
      y: '0',
      name: '存储设备2'
    },
    {
      x: '0',
      y: '10',
      name: '防火墙'
    },
    {
      x: '5',
      y: '10',
      name: '网络设备1',
      alarm: '产生告警了哦'
    },
    {
      x: '12',
      y: '12',
      name: '网络设备2'
    }
  ],
  edges: [
    {
      source: '存储设备2',
      target: '存储设备1',
      name: '数据传输',
      label: {
        normal: {
          show: true,
          formatter () {
            return this.name
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#12b5d0'
        }
      }
    }, {
      source: '存储设备1',
      target: '服务器',
      name: '数据传输',
      label: {
        normal: {
          show: true,
          formatter () {
            return this.name
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#12b5d0'
        }
      }
    },
    {
      source: '服务器',
      target: '防火墙',
      name: '访问',
      label: {
        normal: {
          show: true,
          formatter () {
            return this.name
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#12b5d0'
        }
      }
    },
    {
      source: '防火墙',
      target: '网络设备1',
      name: '访问',
      label: {
        normal: {
          show: true,
          formatter () {
            return this.name
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#12b5d0'
        }
      }
    },
    {
      source: '网络设备1',
      target: '网络设备2',
      name: '访问',
      label: {
        normal: {
          show: true,
          formatter () {
            return this.name
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#12b5d0'
        }
      }
    }
  ]
}

export default data
