<template>

    <div id="app">
        <el-carousel @click.native="go" style="margin-top: 1px;cursor: pointer" :interval="4000" arrow="always"
                     height="409px">
            <el-carousel-item style="height: 409px;" v-for="(item, index) in banner" :key="index">
                <el-image style=" height: 100%;width: 100%;" :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>
        <div style="margin-top: 50px">
            <el-divider content-position="center"><span style="font-size: 20px;font-weight: bold">历史活动</span>
            </el-divider>
        </div>

        <el-carousel :interval="3000" type="card" height="350px" style="width: 100%;margin-top: 10px">
            <el-carousel-item v-for="(item,key) in history" :key="key">
                <div style="display: flex;justify-content: center;align-items: center">
                    <el-card style="width: 300px" shadow="never" @click.native="goto_lshd(item.id)">
                        <el-image :src="item.pic"></el-image>
                        <div style="font-size: 18px;color: #535353;font-weight: bold;margin-top:10px;">
                            {{ item.title}}
                        </div>
                        <div style="margin-top:30px;display: flex;justify-content: center;align-items: center;width: 100%">
                            <div style="margin-left: 10px;margin-right: 10px">
                                <div style="color: #7a7a7a;font-size: 16px;">{{ item.publishtime}}</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
    export default {
        name: "ShowStyle",
        data() {
            return {
                banner: [
                    'http://jmva.jiangmen.cn/images/p1_1.png',
                    'http://jmva.jiangmen.cn/images/p4_1.png',
                    'http://jmva.jiangmen.cn/images/p8_1.png',
                    'http://jmva.jiangmen.cn/images/p2_1.png',
                    'http://jmva.jiangmen.cn/images/p3_1.jpg',
                    'http://jmva.jiangmen.cn/images/p7_1.jpg',
                    // '',
                ],
                history: [
                    {
                        id: '',
                        pic: '',
                        title: '',
                        activity:'',
                        publishtime: '',
                        content:'',
                    },
                    {
                        id: 1,
                        pic: 'http://jmva.jiangmen.cn/images/16.jpg',
                        title: '给工地工人送温暖',
                        activity:'',
                        publishtime: '2020-03-20 14:00:01',
                        content:'这个活动主要是为了送温暖',
                    },
                    {
                        id: 1,
                        pic: 'http://jmva.jiangmen.cn/images/16.jpg',
                        title: '给工地工人送温暖',
                        activity:'',
                        publishtime: '2020-03-20 14:00:01',
                        content:'这个活动主要是为了送温暖',
                    },
                ],
            }
        },
        created() {
            this.$axios.get('/api/stuhistory/',{
                page:1,
                pagesize:1
            }).then()
        },

        methods: {
            //历史活动的点击事件HistoryActivity
            goto_lshd(b) {
                this.$router.push({
                    path: '/HistoryActivity',
                    query: {
                        id: b.id,
                    }
                })
            },
        },
        beforeDestroy() {

        },

        props: {},
        computed: {//计算属性

        },
    }
</script>

<style scoped>

</style>
