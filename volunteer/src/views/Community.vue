<template>

    <div id="app">
        <el-carousel  style="margin-top: 1px;cursor: pointer" :interval="4000" arrow="always"
                     height="409px">
            <el-carousel-item style="height: 409px;" v-for="(item, index) in img" :key="index">
                <el-image style=" height: 100%;" :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>

        <el-card shadow="never" style="margin-right:100px;width: auto;margin-left: 100px;margin-bottom: 20px;padding: 20px">
            <div style="margin-top: 40px;margin-bottom: 40px;">
                <!--   <span style="font-size: 25px;">{{data.title}}</span> -->
                <el-divider><span style="font-size: 25px;" >{{data.title}}</span></el-divider>
            </div>
            <div style="text-align: center;padding-left: 50px">
                <h1 style="font-size: 20px;color: #4d4d4d;">发布时间：{{data.publishtime}}</h1>
                <h1 style="font-size: 20px;color: #4d4d4d;">内容：{{data.content}}</h1>
            </div>
            <br> <br/>
            <el-image v-for="(item ,key) in pic" :key="key" :src="item"/>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "Community",
        data() {
            return {
                img: [
                    'http://jmva.jiangmen.cn/images/p1_1.png',
                    'http://jmva.jiangmen.cn/images/p1_1.png',
                ],
                data: {
                    id:'',
                    pic: '',
                    title: '',
                    publishtime:'',
                    content:'',
                },
            }
        },

        created() {

        },
        mounted() {
                this.$axios.get(`/api/community/${22}/`)
                .then()
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
