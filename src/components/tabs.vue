<template>
    <el-tabs class='tabs' v-model='liebiao ? liebiaoName : activeName'>

        <el-tab-pane v-for="(item,index) in json" :label="item.label" :name="item.name" :key="index">
          <template v-if="liebiao" >
              <div v-html="item.html"></div>
          </template>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name: 'tabs',
    props: {
        json: Array,
        liebiao: Boolean
    },
    data() {
        return {
            activeName: this.$route.name,
            liebiaoName: this.json[0].name
        }
    },
    watch: {
        activeName(val) {
            this.$router.push({ name: val })  // 向父级传递一个当前点击的name
            console.log(this.$route.name)
        }
    }
}
</script>
<style lang='scss'>




</style>
