let data = {
  message: '',
  code: '0',
  data: {
    elements: {
      nodes: [
        {
          position: {
            y: 81,
            x: 50
          },
          data: {
            size: 1,
            type: 3,
            id: 'hpi.video.xxx.com',
            name: 'hpi.video.xxx.com'
          }
        },
        {
          position: {
            y: 171,
            x: 50
          },
          data: {
            size: 1,
            type: 3,
            id: 'i.api.ivideo.xxx.com',
            name: 'i.api.ivideo.xxx.com'
          }
        },
        {
          position: {
            y: 261,
            x: 50
          },
          data: {
            size: 0.90000000000000002,
            type: 3,
            id: 'i.hpi.video.xxx.com',
            name: 'i.hpi.video.xxx.com'
          }
        },
        {
          position: {
            y: 0,
            x: 450
          },
          data: {
            size: 1,
            type: 2,
            id: '日志中为空',
            name: '日志中为空'
          }
        },
        {
          position: {
            y: 0,
            x: 760
          },
          data: {
            size: 1,
            type: 3,
            id: 'i.s.video.xxx.com',
            name: 'i.s.video.xxx.com'
          }
        },
        {
          position: {
            y: 90,
            x: 760
          },
          data: {
            size: 0.90000000000000002,
            type: 3,
            id: 'intra.ask.ivideo.xxx.com',
            name: 'intra.ask.ivideo.xxx.com'
          }
        },
        {
          position: {
            y: 180,
            x: 760
          },
          data: {
            size: 0.69999999999999996,
            type: 3,
            id: 'dispatcher.intra.video.xxx.com',
            name: 'dispatcher.intra.video.xxx.com'
          }
        },
        {
          position: {
            y: 270,
            x: 760
          },
          data: {
            size: 0.10000000000000001,
            type: 3,
            id: 'i.lis.video.xxx.com',
            name: 'i.lis.video.xxx.com'
          }
        }
      ],
      edges: [
        {
          data: {
            info: {
              QPS: {
                value: 321.19999999999999,
                value_tongbi: 304.7
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 1.05,
                value_tongbi: 0.72
              }
            },
            target: '日志中为空',
            width: 1,
            colour: 'green',
            target_type: 2,
            source: 'i.api.ivideo.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 79.069999999999993,
                value_tongbi: 69.89
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 69.150000000000006,
                value_tongbi: 74.57
              }
            },
            target: 'i.s.video.xxx.com',
            width: 0.29999999999999999,
            colour: 'green',
            target_type: 3,
            source: 'i.hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 22.809999999999999,
                value_tongbi: 20.32
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 4.5499999999999998,
                value_tongbi: 4.8
              }
            },
            target: 'intra.ask.ivideo.xxx.com',
            width: 0.10000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'i.hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 45.729999999999997,
                value_tongbi: 58.93
              },
              error_rate: {
                value: 0,
                value_tongbi: 0.01
              },
              avg_rt: {
                value: 7.0800000000000001,
                value_tongbi: 17.6
              }
            },
            target: 'intra.ask.ivideo.xxx.com',
            width: 0.20000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 12.039999999999999,
                value_tongbi: 8.14
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 1.7,
                value_tongbi: 2.53
              }
            },
            target: 'dispatcher.intra.video.xxx.com',
            width: 0.10000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'i.hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 312.56999999999999,
                value_tongbi: 388.13
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 51.030000000000001,
                value_tongbi: 53.83
              }
            },
            target: 'i.s.video.xxx.com',
            width: 1,
            colour: 'green',
            target_type: 3,
            source: 'hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 0.56000000000000005,
                value_tongbi: 0.25
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 2.52,
                value_tongbi: 7.78
              }
            },
            target: 'dispatcher.intra.video.xxx.com',
            width: 0.10000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'hpi.video.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 50.200000000000003,
                value_tongbi: 48.45
              },
              error_rate: {
                value: 0,
                value_tongbi: 0
              },
              avg_rt: {
                value: 66.900000000000006,
                value_tongbi: 74.54
              }
            },
            target: 'i.s.video.xxx.com',
            width: 0.20000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'i.api.ivideo.xxx.com'
          }
        },
        {
          data: {
            info: {
              QPS: {
                value: 0.050000000000000003,
                value_tongbi: '-'
              },
              error_rate: {
                value: 0,
                value_tongbi: '-'
              },
              avg_rt: {
                value: 158.22999999999999,
                value_tongbi: '-'
              }
            },
            target: 'i.lis.video.xxx.com',
            width: 0.10000000000000001,
            colour: 'green',
            target_type: 3,
            source: 'hpi.video.xxx.com'
          }
        }
      ]
    }
  }
}
export default data
