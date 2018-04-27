<template>
    <div id="comment">
        <!--<my-tabs class="tab_main" :json="json"></my-tabs>-->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'comment',
    data() {
        return {
            json: [
                {
                    label: '最新评论',
                    name: 'newest'
                },
                {
                    label: '文章评论',
                    name: 'all'
                }
            ]
        }
    }
}
</script>
<style lang='stylus'>
#comment {
}
</style>
