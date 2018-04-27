<template>
    <div id="gaikuo">
      <div class="shuju clearfix">
        <div class="shuju_this">
          <h2>
            109
            <span>
                粉丝数
              </span>
          </h2>

        </div>
        <div class="shuju_this">
          <h2>
            109
            <span>
                粉丝累计阅读量
              </span>
          </h2>

        </div>
        <div class="shuju_this">
          <h2>
            109
            <span>
                粉丝收益
              </span>
          </h2>

        </div>

      </div>

      <div class="exponential-content">
        <div class="exponential-title-wrap">
          <div class="title">头条粉丝</div>
          <div class="date-wrapper"><span class="tui-rangepicker"><button type="button"
                                                                          class="tui-btn tui-btn-secondary active">7天</button><button
            type="button" class="tui-btn tui-btn-secondary">14天</button><button type="button"
                                                                                class="tui-btn tui-btn-secondary">30天</button><span><span
            class="tui-input-wrapper"><input readonly="" placeholder="开始日期  -  结束日期" value="2018-04-04  -  2018-04-10"
                                             class="tui-input" type="text"></span></span></span></div>
        </div>
        <div id="myChart1"
             style="height: 500px; padding-top: 20px; -moz-user-select: none; position: relative; background: transparent none repeat scroll 0% 0%;"
             _echarts_instance_="ec_1523430212841">
          <div
            style="position: relative; overflow: hidden; width: 826px; height: 480px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">

          </div>
          <div
            style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px/21px Microsoft YaHei; padding: 5px; left: 114px; top: 197px;">
            2018-04-04<br><span
            style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#ff5f63;"></span>新增粉丝:
            0
          </div>
        </div>
      </div>
      <div class="content-dash-wrap"><div class="title-wrap"><div class="title">数据列表</div><div class="audience-download-box"><a href="/statistic/audience_daily_export/?start_date=2018-04-17&amp;end_date=2018-04-23">导出Excel</a></div></div><table class="content-table"><thead><tr><th>时间</th><th>新增粉丝</th><th>取消关注</th><th>累计粉丝</th></tr></thead><tbody><tr><td>2018-04-23</td><td>0</td><td>0</td><td>110</td></tr><tr><td>2018-04-22</td><td>0</td><td>0</td><td>110</td></tr><tr><td>2018-04-21</td><td>0</td><td>0</td><td>110</td></tr><tr><td>2018-04-20</td><td>0</td><td>0</td><td>110</td></tr><tr><td>2018-04-19</td><td>1</td><td>0</td><td>110</td></tr><tr><td>2018-04-18</td><td>0</td><td>0</td><td>109</td></tr><tr><td>2018-04-17</td><td>0</td><td>0</td><td>109</td></tr></tbody></table></div>

    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'fensi',
    data() {
        return {
          data_val: [2220, 1682, 2791, 3000, 4090, 3230, 2910],
          xAxis_val: ['2018-04-17', '2018-04-18', '2018-04-19', '2018-04-20', '2018-04-21', '2018-04-22', '2018-04-23'],
          data_val1: [0, 0, 0, 0, 0, 0, 0]
        }
    },
    computed: {

    },
    methods: {
      drawLine() {
        let myChart = echarts.init(document.getElementById('myChart1'))
        myChart.setOption({
          backgroundColor: '#fff',
          grid: {
            left: 10,
            top: '10%',
            bottom: 20,
            right: 40,
            containLabel: true
          },
          tooltip: {
            show: true,
            backgroundColor: '#384157',
            borderColor: '#384157',
            borderWidth: 1,
            formatter: '{b}:{c}',
            extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
          },
          legend: {
            left: 0,
            top: 0,
            data: ['新增粉丝'],
            textStyle: {
              color: '#5c6076'
            }
          },
          xAxis: {
            data: this.xAxis_val,
            boundaryGap: false,
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#cbcbcb'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            ayisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#cbcbcb'
              }
            },
            splitLine: {
              show: true,
              smooth: false,
              lineStyle: {
                color: '#cbcbcb',
                type: 'dotted'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },

          series: [
            {
              type: 'bar',
              name: 'linedemo',
              tooltip: {
                show: false
              },
              animation: false,
              barWidth: 1.4,
              hoverAnimation: false,
              data: this.data_val,
              itemStyle: {
                normal: {
                  color: '#fff',
                  opacity: 0.6,
                  label: {
                    show: false
                  }
                }
              }
            },
            {
              type: 'line',
              name: '新增粉丝',

              animation: false,
              symbol: 'circle',

              hoverAnimation: false,
              data: this.data_val1,
              itemStyle: {
                normal: {
                  color: '#f17a52',
                  opacity: 0
                }
              },
              lineStyle: {
                normal: {
                  width: 1,
                  color: '#fff',
                  opacity: 1
                }
              }
            },
            {
              type: 'line',
              name: 'linedemo',
              symbolSize: 6,
              animation: false,
              lineWidth: 1.2,
              hoverAnimation: false,
              data: this.data_val,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  color: '#f17a52',
                  shadowBlur: 0,
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: '#fff'
                    }
                  }
                }
              },
              areaStyle: {
                normal: {
                  color: '#fff',
                  opacity: 0.08
                }
              }
            }
          ]
        })
      }
    },
    mounted() {
      this.drawLine()
      // console.log(this.$route.name)  接收来自子级传递的选项卡name
    }
}
</script>
<style lang='scss'>
  @import "./../../../../../assets/css/tongyong";
#gaikuo {
  .shuju{
    .shuju_this{
      @include box-show(148px,290px);
      float: left;
      margin-right: 18px;
      h2{
        position: relative;
        text-align: center;
        line-height: 120px;
        @include font-tongyong(40px,red);
      }
      span{
        position: absolute;
        @include font-tongyong(16px,#222);
        left: 42%;
        top: 35%;
      }
    }
  }
   .pgc-dashboard-column{width:290px!important} .exponential-sub-title{line-height:1;font-size:16px;color:#222;margin:20px 0 15px} .exponential-sub-title-first{line-height:1;font-size:16px;color:#222;margin:20px 0 15px;margin:0 0 15px} .exponential-title-wrap{height:58px;line-height:34px;padding-bottom:24px;border-bottom:1px solid #e8e8e8;overflow:hidden} .exponential-content{padding:32px 40px 25px;background-color:#fff;margin-top:24px;-webkit-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);-moz-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);box-shadow:0 1px 12px 0 rgba(0,0,0,.05);min-height:inherit;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;position:relative} .exponential-content .date-wrapper{float:right;height:34px;line-height:34px} .exponential-content .title{float:left;font-size:16px;height:34px;line-height:34px;display:inline-block} .pgc-dashboard{padding:20px 0} .pgc-dashboard .pgc-dashboard-secondary{font-size:16px;color:#222} .pgc-dashboard .pgc-dashboard-secondary .iconfont{margin-left:5px} .tui-pagination-container{margin-top:20px;overflow:hidden} .content-dash-wrap{margin-top:24px;background-color:#fff;-webkit-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);-moz-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);box-shadow:0 1px 12px 0 rgba(0,0,0,.05);min-height:inherit;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:32px 40px 52px} .content-dash-wrap .title-wrap{overflow:hidden} .content-dash-wrap .title{line-height:22px;font-size:16px;float:left} .content-dash-wrap .audience-download-box{float:right;text-align:right;line-height:22px;font-size:16px} .content-dash-wrap .audience-download-box a{color:#406599;cursor:pointer} .content-table{margin-top:20px;border-collapse:collapse;table-layout:fixed;border:1px solid #e8e8e8;font-size:14px;width:100%} .content-table td, .content-table th{padding:10px 12px;border-bottom:1px solid #e8e8e8;text-align:center} .content-table th:first-child{text-align:left} .content-table td{max-width:300px;overflow:hidden} .content-table td:first-child{padding-left:10px;text-align:left} .pgc-audience-property{font-size:0} .pgc-audience-property .exponential-content:last-child, .pgc-audience-property .exponential-content:nth-child(2){height:109px} .audience-bar{margin-right:5px;margin-left:5px;padding:25px 20px 20px} .audience-bar .bar-wrap{height:26px;background:#48bfcd;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;opacity:.8} .audience-bar .bar-inner{width:33%;height:100%;-webkit-transition:width 2s;-moz-transition:width 2s;transition:width 2s;background:#ff7555;text-align:center;color:#fff;line-height:26px} .audience-bar .bar-note{padding-top:20px;width:100%;text-align:right} .audience-bar .bar-note-sharp{width:18px;height:18px;display:inline-block;vertical-align:middle} .audience-bar .bar-note-title{font-size:14px;line-height:18px;content:#666;margin:0 20px 0 5px;vertical-align:middle} .audience-bar .bar-note-title:last-child{margin-right:0} .audience-bar .orange{background:#ff7555} .audience-bar .blue{background:#48bfcd} .audience-age-chart{height:330px;margin-right:180px;overflow:hidden} .audience-age-list, .audience-map-list{height:330px;width:180px;display:inline-block;position:absolute;right:0;top:0;border-left:1px solid #e8e8e8} .audience-age-list .content-table, .audience-map-list .content-table{margin-top:0;border:0} .audience-map-chart{width:600px;margin:10px} .audience-map-pie-chart{margin-right:180px;border-top:1px solid #e8e8e8} .audience-map-list{height:822px} .audience-map-list .audience-map-list-content{overflow-y:auto;height:778px} .interest-media{display:inline-block;padding:18px 5px;-webkit-box-shadow:0 0 3px transparent;-moz-box-shadow:0 0 3px transparent;box-shadow:0 0 3px transparent;margin:0 10px 10px 0;width:115px;height:115px;font-size:14px;color:#555;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;-moz-transition:box-shadow .3s,-moz-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s,-moz-box-shadow .3s;cursor:pointer;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-align:center;vertical-align:top} .interest-media:hover{-webkit-box-shadow:0 0 7px #999;-moz-box-shadow:0 0 7px #999;box-shadow:0 0 7px #999} .interest-media img{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;height:50px;width:50px} .interest-media span{line-height:2;display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap} .no-data-hint{font-size:30px;font-weight:700;color:#ddd;text-align:center;margin:30px 0} .no-data-hint .emoji{font-size:48px;display:inline-block;margin-bottom:10px} .popup-inner{margin-bottom:16px} .pgc-hover-popup i{font-size:14px;margin-left:2px} .pgc-hover-popup .hover-content{text-align:left} .tui-pagination-container{margin-top:0;margin-bottom:20px;padding-top:20px;background-color:#fff}
}

</style>
