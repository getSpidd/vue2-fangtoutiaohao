<template>
    <div id="fenxi">
        <div class="shuju clearfix">
          <div class="shuju_this">
            <h2>
              109
              <span>
               回答数
              </span>
            </h2>

          </div>
          <div class="shuju_this">
            <h2>
              109
              <span>
                阅读数
              </span>
            </h2>

          </div>
          <div class="shuju_this">
            <h2>
              109
              <span>
                点赞量
              </span>
            </h2>

          </div>

        </div>

        <div class="liebiao wenda-analysis">

          <div class="content-dash"><div class="wenda-tip">下方列表仅显示最近7天内的回答数据，更多数据请前往我的问答查看</div><div class="content-dash-wrap"><table class="content-table"><thead><tr><th>发布时间</th><th>问答</th><th>阅读量</th><th>点赞量</th></tr></thead><tbody></tbody></table></div></div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'fenxi',
    data() {
        return {
          activeName: 'hot',
          invTime: 2000,
          slides: [
            {
              src: require('@/assets/img/slide_1.jpg'),
              // 打包过后会根据根据打包规则重新定义位置。不会出现找不到图片的问题    **图片通过JS引入都必须  require()
              title: 'xxx1',
              href: 'detail/analysis'
            },
            {
              src: require('@/assets/img/slide_1.jpg'),
              title: 'xxx2',
              href: 'detail/count'
            }
          ]
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
      // console.log(this.$route.name)  接收来自子级传递的选项卡name
    }
}
</script>
<style lang='scss'>
  @import "../../../../../assets/css/tongyong";
#fenxi {
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

  .slide{
    @include box-show();
    overflow: hidden;
    margin-top: 24px;
    height: 124px;
    width: 906px;
  }
  .liebiao{
    @include box-show();
    margin-top: 24px;

  }

  .wenda-analysis{position:relative}.wenda-analysis .content-dash{-webkit-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);-moz-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);box-shadow:0 1px 12px 0 rgba(0,0,0,.05);min-height:inherit;padding:16px 24px 31px;background-color:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.wenda-analysis .detail-download-box{position:absolute;right:24px;top:16px}.wenda-analysis .detail-download-box a{cursor:pointer}.wenda-analysis .tui-pagination-container{margin-top:20px}.wenda-analysis .content-table{margin-top:20px;border-collapse:collapse;table-layout:fixed;border:1px solid #e8e8e8;font-size:14px;color:#222;width:100%;text-align:center}.wenda-analysis .content-table th{border-bottom:1px solid #e8e8e8;height:42px;line-height:42px;font-size:14px;letter-spacing:0;text-align:left}.wenda-analysis .content-table th:first-child{padding-left:24px;width:200px}.wenda-analysis .content-table th:last-child{width:100px}.wenda-analysis .content-table td{color:#505050;height:42px;line-height:42px;border-bottom:1px solid #e8e8e8;max-width:300px;overflow:hidden;text-align:left}.wenda-analysis .content-table td:first-child{padding-left:24px}.wenda-analysis .content-table td a{white-space:nowrap;text-overflow:ellipsis;display:block;overflow:hidden}.wenda-analysis .load-more{text-align:center;cursor:pointer;line-height:44px;border:1px solid #e8e8e8;border-top:0;font-size:14px}.wenda-analysis .wenda-tip{font-size:14px;color:gray}.wenda-count{margin-bottom:24px}.wenda-count li{-webkit-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);-moz-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);box-shadow:0 1px 12px 0 rgba(0,0,0,.05);min-height:inherit;background-color:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin-right:18px;width:290px;display:inline-block;text-align:center;height:148px;padding-bottom:8px;padding-top:44px}.wenda-count li:last-child{margin-right:0}.wenda-count .numbers{font-size:40px;color:#f85959;line-height:36px;margin-bottom:20px}.wenda-count p{line-height:22px;height:44px}
}

</style>
