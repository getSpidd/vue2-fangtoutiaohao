<template>
    <div id="quanxie" class="pgc-account-permission">
          <el-tabs class="tab_main" v-model="activeName" >
            <el-tab-pane label="帐号权限" name="zhanghao">
              <div class="tui-table-container"><table><thead><tr><th>功能</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>帐号状态</td><td><span><span class="sgreen">正常</span></span></td><td><span>头条号资料填写规范及审核标准。<a href="https://mp.toutiao.com/static/v2/resource/pgc/pgc_white_paper/" target="_blank" rel="noopener noreferrer">了解详情</a></span></td></tr><tr><td>帐号分值</td><td><span>100</span></td><td><span>违禁行为会触发扣分和惩罚。<a href="https://mp.toutiao.com/profile_v3/pgc_public/public/questions/pgc_usage/usage_punish_reason" target="_blank" rel="noopener noreferrer">了解详情</a></span></td></tr><tr><td>实名认证</td><td><span><span class="sgreen">已认证</span></span></td><td><span>提现、资质认证和部分功能权限的开通须先完成实名认证。<a href="https://mp.toutiao.com/profile_v3/pgc_public/public/questions/pgc_signup/signup_use_ocr" target="_blank" rel="noopener noreferrer">了解详情</a></span></td></tr></tbody></table></div>
            </el-tab-pane>
            <el-tab-pane label="功能权限" name="gongneng">
              <div class="tui-table-container"><table><thead><tr><th>功能</th><th>状态</th><th>申请条件</th><th>功能说明</th></tr></thead><tbody><tr><td>头条广告</td><td><span class="fn-manage-success">已开通</span></td><td><span>符合条件的头条号可以开通头条广告。</span></td><td><a href="https://www.toutiao.com/i6526751624302428679/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>自营广告</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>符合条件的头条号可以申请开通自营广告。</span></td><td><a href="https://www.toutiao.com/i6526752673180418567/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>原创标签</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>优质原创头条号可申请开通原创标签。</span></td><td><a href="https://www.toutiao.com/i6526813049301500424/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>双标题/双封面</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数5000以上；已开通原创权限。</span></td><td><a href="https://www.toutiao.com/i6526764402425725443/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>千人万元</td><td><span class="account-status-btn disabled tether-target tether-abutted tether-abutted-top tether-element-attached-bottom tether-element-attached-center tether-target-attached-top tether-target-attached-center">申 请</span></td><td><span>开通原创标签的个人帐号可申请。</span></td><td><a href="https://www.toutiao.com/i6527123691577278984/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>优化助手</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>拥有双标题/双封面权限，或已授权了自动同步内容，满足任一条件可申请开通。</span></td><td><a href="https://www.toutiao.com/i6430670750968971778/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>商品</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数2000以上；已实名认证；近1个月发文大于10篇；无违规记录。</span></td><td><a href="https://www.toutiao.com/i6542274656764690948/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>扩展链接</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数20000以上；已开通原创权限。</span></td><td><a href="https://www.toutiao.com/i6374927048879636993/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>外图封面</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数2000以上。</span></td><td><a href="https://www.toutiao.com/i6427728798438916610/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>创作实验室</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数2000以上；已开通原创权限。</span></td><td><a href="https://www.toutiao.com/i6480052262147195406/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr><tr><td>评论保护</td><td><span class="account-status-btn disabled">申 请</span></td><td><span>累计粉丝数10000以上；已开通原创权限。</span></td><td><a href="https://www.toutiao.com/i6408792857460605442/" target="_blank" rel="noopener noreferrer">功能介绍</a></td></tr></tbody></table></div>
            </el-tab-pane>
          </el-tabs>

    </div>
</template>
<script>
export default {
    name: 'quanxie',
    data() {
        return {
          activeName: 'zhanghao'
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
<style lang='scss' scoped="scoped">
  @import "../../../../assets/css/tongyong";
#quanxie {
  background-color: #fff;
  .el-tabs__header{
    font-size: 16px;
    padding: 32px 40px 0;
    border-bottom: 1px solid #e8e8e8;
  }

}
  .pgc-account-permission{-webkit-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);-moz-box-shadow:0 1px 12px 0 rgba(0,0,0,.05);box-shadow:0 1px 12px 0 rgba(0,0,0,.05);min-height:inherit;padding-bottom:20px}.pgc-account-permission .tui-table-container{margin:20px 40px}.pgc-account-permission table td,.pgc-account-permission table th{height:50px;padding:5px 12px;line-height:2;vertical-align:middle}.pgc-account-permission table td .tui-btn-negative,.pgc-account-permission table th .tui-btn-negative{font-size:14px;line-height:1.15;width:80px;padding:6px 0}.pgc-account-permission table td:first-child,.pgc-account-permission table td:nth-child(2){width:120px}.pgc-account-permission table tr td:first-child,.pgc-account-permission table tr th:first-child{padding:5px 0 5px 12px;width:80px}.pgc-account-permission table tr td:nth-child(3),.pgc-account-permission table tr th:nth-child(3){text-align:left}.pgc-account-permission .account-status-btn{cursor:pointer;display:inline-block;width:80px;line-height:30px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;text-align:center;color:#fff;background:#ed4040}.pgc-account-permission .account-status-btn:hover{background:#f16f6f}.pgc-account-permission .account-status-btn.disabled{cursor:not-allowed;background:#f4f5f6;color:#999}.pgc-account-permission .fn-manage-table .tui-table-container{font-size:14px}.pgc-account-permission .fn-manage-success{color:#34c765}.pgc-account-permission .fn-manage-failed{color:#ed4040}.pgc-account-permission .fn-manage-btn-disabled{color:#999;cursor:text}.pgc-account-permission .fn-manage-btn-close{color:#ed4040;cursor:text}.pgc-account-permission .fn-manage-privilege{margin-top:20px;font-size:14px}.pgc-account-permission .fn-manage-privilege .privilege-link{margin-left:10px}.pgc-account-permission .account-permission-btn{border:none;font-size:14px;font-weight:400}.pgc-account-permission .account-permission-btn.disabled{cursor:not-allowed;background:#f4f5f6;color:#999}
</style>
