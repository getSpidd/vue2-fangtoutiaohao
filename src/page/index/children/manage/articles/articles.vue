<template>
    <div id="articles">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'articles',
    data() {
        return {

        }
    }
}
</script>
<style lang='stylus'>
#articles {
    min-height: inherit;
}
</style>
