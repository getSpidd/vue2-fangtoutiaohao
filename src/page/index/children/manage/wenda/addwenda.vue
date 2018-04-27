<template>
  <div id="addwenda" class="xigua-xuqNt80Mg0Lm0IxixKLZf">

    <el-tabs v-model="activeName" >
      <el-tab-pane label="发表问题" name="addwenti">
        <div class="pgc-form-item-wrap"><div class="row tui-form-item tui-form-item-with-help pgc-form-item company_name "><div class="col-xs-24 col-sm-5 col-md-5 col-lg-5 tui-form-item-label"><label for="company_name" class="tui-form-item-required">组织名称</label></div><div class="col-xs-24 col-sm-19 col-md-19 col-lg-19"><div class="tui-form-item-control "><span class="tui-input-wrapper"><input value="" class="tui-input tui-input-lg" type="input"></span><div class="tui-form-explain"><span>请与组织机构代码证或营业执照名称一致<br></span></div></div></div></div></div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  export default {
    name: 'addwenda',
    data() {
      return {
        activeName: 'addwenda'
      }
    },
    computed: {

    },
    methods: {
      tupianAddClick() {
        this.tupianAdd = !this.tupianAdd
      },
      tupianAddFalse() {
        this.tupianAdd = false
      }
    },
    mounted() {
      // console.log(this.$route.name)   接收来自子级传递的选项卡name
    }
  }
</script>
<style lang='scss' scoped="scoped">
  @import "../../../../../assets/css/tongyong";
  #addwenda{
    .el-tabs__header{
      font-size: 16px;
      padding: 32px 40px 0;
      border-bottom: 1px solid #e8e8e8;
    }
    @include box-show();
  }
  .yincang{
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }


</style>
