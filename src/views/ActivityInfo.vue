<template>
    <div>
        <el-card>
            <div style="width: 100%;display: block;height: 400px">
                <el-carousel style="margin-top: 1px;cursor: pointer;width: 40%;float: left"
                             :interval="4000"
                             arrow="always"
                             height="380px">
                    <el-carousel-item style="height: 380px;"
                                      v-for="(item, index) in data.activity_pic"
                                      :key="index">
                        <el-image style=" height: 100%;width: 100%;"
                                  :src="item"></el-image>
                    </el-carousel-item>
                </el-carousel>
                <div style="float: right;text-align: left;width: 55%">
                    <h1 class="text"
                        style="font-size: 22px;color: #4d4d4d;font-weight: bold;">{{data.title}}</h1>
                    <h1 class="text"
                        style="font-size: 15px;color: #4d4d4d;">活动类型:{{data.type_name}}</h1>
                    <h1 class="text"
                        style="font-size: 15px;color: #4d4d4d;">所属组织：{{organName}}</h1>
                    <h1 class="text"
                        style="font-size: 15px;color: #4d4d4d;">截止报名时间：{{data.registration_time}}</h1>
                    <h1 class="text"
                        style="font-size: 15px;color: #4d4d4d;">招募人数：{{data.people_count}}</h1>

                    <el-row style="margin-top: 40px"
                            :gutter="20">
                        <el-col :span="4">
                            <el-button type="primary"
                                       @click="bm">我要报名</el-button>
                        </el-col>
                        <el-col :span="4">
                            <h1 style="font-size: 14px;color: #4d4d4d;">已报名人数：{{data.people}}</h1>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="success"
                                       icon="el-icon-thumb"
                                       @click="like">喜欢：{{data.hotcount}}</el-button>
                        </el-col>
                        <!-- <el-col :span="4">
                             <h1 style="font-size: 15px;color: #4d4d4d;">已报名人数：{{data.xcj}}</h1>
                         </el-col>-->
                    </el-row>
                </div>
            </div>
            <div>
                <el-divider content-position="left">
                    <span style="font-size: 20px;font-weight: bold">活动内容</span>
                </el-divider>
                <div style="text-align: left;padding-left: 50px">
                    <h1 style="font-size: 15px;color: #4d4d4d;">{{data.activity_content}}</h1>
                </div>
                <div style="margin-top: 50px">
                    <el-divider content-position="left">
                        <span style="font-size: 20px;font-weight: bold">活动安排</span>
                    </el-divider>
                </div>
                <div style="text-align: left;padding-left: 50px">
                    <h1 style="font-size: 15px;color: #4d4d4d;">活动时间：{{data.activity_starttime}}</h1>
                    <h1 style="font-size: 15px;color: #4d4d4d;">活动时长（小时）：{{data.activity_time}}</h1>
                    <h1 style="font-size: 15px;color: #4d4d4d;">活动地址：{{data.address}}</h1>
                    <h1 style="font-size: 15px;color: #4d4d4d;">联系人：{{data.link_pople}}</h1>
                    <h1 style="font-size: 15px;color: #4d4d4d;">联系电话：{{data.link_phone}}</h1>
                </div>

            </div>
        </el-card>
    </div>
</template>

<script>
import utils from "@/public/utils"
export default {
    data() {
        return {
            id: 21,
            data: {},
            organName: ''
        }
    },
    // created() {
    //     // t = this;
    //     this.id = this.$route.query.id;
    //     console.log(this.id)
    //     //网络请求
    //
    // },
    mounted() {
        this.$axios.get(`/api/stuactivity/`, { type: this.act_id },
        ).then((res) => {
            this.data = res.data.results.data[0]
            this.organName = this.data.organ.name
        }
        )
    },
    computed: {
        act_id() {
            return this.$route.query.id
        }
    },
    methods: {
        bm() {
            this.$axios.post('/api/stuactivity/sign/', { user: utils.getSession('userData').user_id ,id:this.act_id})
                .then((res)=>{
                    if(res.data.message=='ok' && res.data.results==[]){
                        this.$message.success('报名成功!')
                    }else{
                        this.$message.error('报名失败!'+res.data.results)
                    }
                })
        },
        like() {
            this.$axios.post('/api/stuactivity/', { id: utils.getSession('userData').user_id })
                .then((res) => this.$message.success(res.data.results))
        }
    },
    beforeDestroy() {

    },
    props: {},
}
</script>

<style scoped>
.text {
  margin-top: 35px;
}
</style>
