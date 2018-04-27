<template>
    <div id="all">
      <el-tabs class="tab_main" style="background-color: #fff" v-model="activeName">
        <el-tab-pane v-for="(item, index) in json" :label="item.label" :name="item.name" :key="index">

          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题"
              header-align="center"
              show-overflow-tooltip="true"
              width="380">
            </el-table-column>
            <el-table-column
              prop="type"
              label="评论状态"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="pinglun_all"
              align="center"
              label="总评论数">
            </el-table-column>
            <el-table-column
              prop="pinglun_fensi"
              align="center"
              label="粉丝评论数">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>

          </el-table>

        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default{
    data() {
        return {
          activeName: this.$route.name,
          json: [
            {
              label: '图文评论',
              name: 'home/pinglun/all_news/tuwen_pinglun'
            },
            {
              label: '视频评论',
              name: 'home/pinglun/all_news/shipin_pinglun'
            },
            {
              label: '社区评论',
              name: 'home/pinglun/all_news/shequ_pinglun'
            }
          ],
          tableData: [{
            title: '先锋的臭虫，糊涂的时代先锋的臭虫，糊涂的时代先锋的臭虫，糊涂的时代先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }, {
            title: '先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }, {
            title: '先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }, {
            title: '先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }, {
            title: '先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }, {
            title: '先锋的臭虫，糊涂的时代',
            type: '正常',
            pinglun_all: '0',
            pinglun_fensi: 0
          }]
        }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
        // console.log(this.$route.name)
    }
}
</script>
<style lang='scss' scoped="scoped">



</style>
