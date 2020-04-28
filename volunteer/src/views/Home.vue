<template>
    <div>
        <el-carousel @click.native="go" style="margin-top: 1px;cursor: pointer" :interval="3500" arrow="always"
                     height="409px">
            <el-carousel-item style="height: 409px;" v-for="(item, index) in banner" :key="index">
                <el-image style=" height: 100%;width: 100%;" :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>

        <el-row type="flex" justify="center" class="shownum" style="margin-top: 20px" :gutter="20">
            <el-col :span="3" style="cursor: pointer" @click.native="go_volunteer">
                <div>
                    <img src="http://jmva.jiangmen.cn/images/img_002.png"/>
                    <div class="num">326524</div>
                    <div class="title">志愿者</div>
                </div>
            </el-col>
            <el-col :span="3" style="cursor: pointer" @click.native="go_activity">
                <div>
                    <img src="http://jmva.jiangmen.cn/images/img_003.png"/>
                    <div class="num">47555</div>
                    <div class="title">志愿活动</div>
                </div>
            </el-col>
            <el-col :span="3" style="cursor: pointer" @click.native="go_time">
                <div>
                    <img src="http://jmva.jiangmen.cn/images/img_005.png"/>
                    <div class="num">236632</div>
                    <div class="title">志愿服务时长</div>
                </div>
            </el-col>
            <el-col :span="3" style="cursor: pointer" @click.native="go_organ">
                <div>
                    <img src="http://jmva.jiangmen.cn/images/img_004.png"/>
                    <div class="num">13</div>
                    <div class="title">志愿组织</div>
                </div>
            </el-col>
            <el-col :span="3" style="cursor: pointer" @click.native="$router.push('DataEcharts')">
                <div>
                    <img src="http://jmva.jiangmen.cn/images/img_006.png"/>
                    <div class="num" >...</div>
                    <div class="title" >更多数据统计</div>
                </div>
            </el-col>
        </el-row>
        <div style="margin-top: 40px;margin-bottom: 40px">
            <el-divider><span style="font-size: 25px;">热门活动</span></el-divider>
        </div>

        <el-carousel :interval="3000" type="card" height="350px" style="width: 100%;margin-top: 10px">
            <el-carousel-item v-for="(item,key) in hotactivity" :key="key">
                <div style="display: flex;justify-content: center;align-items: center">
                    <el-card style="width: 300px" shadow="never" @click.native="goto_rmhd(item.id)">
                        <el-image :src="item.activity_pic"></el-image>
                        <div style="font-size: 18px;color: #535353;font-weight: bold;margin-top:10px;">
                            {{ item.title}}
                        </div>
                        <div style="margin-top:30px;display: flex;justify-content: center;align-items: center;width: 100%">
                            <div style="margin-left: 10px;margin-right: 10px">
                                <div style="color: #00afef;font-size: 26px;"> {{ item.people_count}}</div>
                                <div style="margin-top: 5px">招募人数</div>
                            </div>
                            <div style="margin-left: 10px;margin-right: 10px">
                                <div style="color: #fcd004;font-size: 26px;">{{ item.people}}</div>
                                <div style="margin-top: 5px">报名人数</div>
                            </div>
                            <div style="margin-left: 10px;margin-right: 10px">
                                <div style="color: #7a7a7a;font-size: 26px;">{{ item.registration_time}}</div>
                                <div style="margin-top: 5px">剩余天数</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div style="margin-top: 40px;margin-bottom: 40px">
            <el-divider><span style="font-size: 25px;">志愿社区</span></el-divider>
        </div>
        <el-row>
            <el-col :span="6"  v-for="(index,key) in zysq" :key="key"  style="margin-bottom: 220px">
                <div class="grid-content bg-purple" style="background-color: #999">
                    <el-card  shadow="never" style="margin-top: 30px;cursor: pointer;height: 300px"
                             @click.native="goto_zysq(index.id)">
                        <el-image style="width: 210px" :src="index.pic" lazy></el-image>
                        <div style="margin-top:20px;">
                            <h4 style="color: #000;font-weight: 500;font-size: 18px">{{index.title}}</h4>
                            <span style="color: #4d4d4d">{{index.content}}</span>
                            <h4 style="color: #4d4d4d;font-weight: 500;font-size: 15px">发布时间：{{index.publishtime}}</h4>

                        </div>
                    </el-card>
                </div>
            </el-col>

        </el-row>
     <!--   <el-row style="margin-top: 1px" >
            <el-col :span="6"  v-for="(index,key) in zysq" :key="key"  style="margin-bottom: 220px">
                <div class="grid-content bg-purple" style="background-color: #999">
                    <el-card  shadow="never" style="margin-top: 30px;cursor: pointer;height: 300px"
                              @click.native="goto_zysq(index.id)">
                        <el-image style="width: 210px" :src="index.img" lazy></el-image>
                        <div style="margin-top:20px;">
                            <h4 style="color: #000;font-weight: 500;font-size: 18px">{{index.title}}</h4>
                            <span style="color: #4d4d4d">{{index.content}}</span>
                            <h4 style="color: #4d4d4d;font-weight: 500;font-size: 15px">时间：{{index.ctime}}</h4>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>-->
    </div>


</template>

<script>
    export default {
        name: "Home",
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
                hotactivity: [
                    {
                        id: 1,
                        activity_pic: 'http://127.0.0.1:8000/media/activitypic/',
                        title: '给工地工人送温暖',
                        people_count: 20,
                        people: 10,
                        registration_time: 10,
                    },
                ],
                zysq: [
                    {
                        id: '',
                        pic: 'http://jmva.jiangmen.cn/upload/attachment/206/20161121103214_988.jpg',
                        title: '智能制造学部',
                        publishtime: '1999年6月1日',
                        content: '为爱而生，给世界带来温暖，非常有爱的一个社区',
                    }, {
                        id: '',
                        pic: '',
                        title: '',
                        publishtime: '',
                        content: '',
                    },
                ],
            }
        },
        created() {

        },
        mounted() {
            this.$axios.get('/api/stuactivity/')
            .then((res)=>this.hotactivity = res.data.results.data)
            this.$axios.get('/api/stucommunity/')
            .then((res)=>this.zysq = res.data.results)
        },
        methods: {
            go_volunteer() {
                this.$message.success("志愿者")
            },
            go_activity() {
                this.$message.success("志愿活动")
            },
            go_time() {
                this.$message.success("志愿服务时长")
            },
            go_organ() {
                this.$message.success("志愿组织")
            },
            go_tj() {
                this.$message.success("更多数据统计")
            },
            //热门活动点击事件
            goto_rmhd() {
                this.$router.push({
                    path: '/ActivityInfo',
                    query: {
                        id: '',
                    }
                })
            },
            //志愿社区的点击事件community
            goto_zysq(b) {
                this.$router.push({
                    path: '/Community',
                    query: {
                        id: b.id,
                    }
                })
            }
        },
        beforeDestroy() {

        },
        props: {},
        computed: {//计算属性

        },
    }
</script>
<style lang="less" scoped>
    .shownum {
        width: 100%;
        height: auto;
        background: url('http://jmva.jiangmen.cn/images/bg3.jpg') repeat-x;
        padding: 30px 0px 10px 0px;
    }


    .grid-content{
        background-color: #00afef;
        height: 100px;
    }
</style>
