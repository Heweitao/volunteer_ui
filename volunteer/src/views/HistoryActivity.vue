<template>

    <div id="app">
        <el-carousel  style="margin-top: 1px;cursor: pointer" :interval="4000" arrow="always"
                     height="409px">
            <el-carousel-item style="height: 409px;" v-for="(item, index) in banner" :key="index">
                <el-image style=" height: 100%;" :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>

        <el-card shadow="never" style="margin-right:100px;width: auto;margin-left: 100px;margin-bottom: 20px;padding: 20px">
            <div style="margin-top: 40px;margin-bottom: 40px;">
                <!--   <span style="font-size: 25px;">{{data.title}}</span> -->
                <el-divider><span style="font-size: 25px;" >{{data.title}}</span></el-divider>
            </div>
            <div style="text-align: center;padding-left: 50px">
                <h1 style="font-size: 15px;color: #4d4d4d;">发布时间：{{data.publishtime}}</h1>
                <h1 style="font-size: 15px;color: #4d4d4d;">活动类型：{{data.type}}</h1>
                <br> <br/>
                <h1 style="font-size: 13px;color: #4d4d4d;">活动内容及反响：{{data.content}}</h1>
                <br> <br/>
            </div>
            <br> <br/>
            <el-image v-for="(item ,key) in pic" :key="key" :src="item"/>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "HistoryActivity",
        data() {
            return {
                banner: [
                    'http://jmva.jiangmen.cn/images/p1_1.png',
                    'http://jmva.jiangmen.cn/images/p4_1.png',
                ],
                data: {
                    id: 1,
                    pic: 'http://jmva.jiangmen.cn/upload/attachment/206/20161121103214_988.jpg',
                    title: '啦啦啦啦',
                    publishtime:'1999年6月1日',
                    type: '',
                    content:'为爱而生，给世界带来温暖，非常有爱的一个社区',
                },
            }
        },
        created() {

        },
        mounted() {
            this.$axios.get(`/api/history/${22}/`)
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
