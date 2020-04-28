<template>

    <div id="app"> <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
    </el-breadcrumb></div>
</template>

<script>
    export default {
        name: "HotActivity",
        data() {
            return {}
        },
        created() {
        },
        mounted() {

        },
        methods: {},
        beforeDestroy() {

        },
        props: {},
        computed: {//计算属性

        },
    }
</script>

<style scoped>

</style>
