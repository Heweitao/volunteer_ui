<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card shadow="never">

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "AdminUsers",
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
