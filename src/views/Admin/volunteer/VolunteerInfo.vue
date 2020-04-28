<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row style="margin-top: 20px" :gutter="20">
            <el-col :span="4">
                <el-input prefix-icon="el-icon-search" placeholder="输入账号" v-model="key"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="输入联系电话" v-model="key"></el-input>
            </el-col>
            <el-col :span="1">
                <el-button type="primary" @click="search">搜索</el-button>
            </el-col>
            <el-col :span="6">
                <el-select v-model="order" placeholder="排序">
                    <el-option label="按服务时长排序" value="1"></el-option>
                    <el-option label="按参加活动数排序" value="2"></el-option>
                </el-select>
            </el-col>
        </el-row>

        <el-card shadow="never" style="margin-top: 20px;">
            <el-table :data="data" border stripe style="margin-top: 20px;margin-bottom: 20px">
                <el-table-column type="index">
                </el-table-column>
                <el-table-column prop="username" label="账号" width="100">
                </el-table-column>
                <el-table-column prop="last_name" label="真实姓名" width="90">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="50">
                </el-table-column>
                <el-table-column prop="phone" label="联系电话" width="150">
                </el-table-column>
                <el-table-column prop="activity_time" label="服务时长" width="130">
                </el-table-column>
                <el-table-column prop="activity_count" label="参加活动数" width="130">
                </el-table-column>
                <el-table-column prop="date_joined" label="注册时间" width="150">
                </el-table-column>
                <el-table-column prop="check" label="状态" width="80">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.check==='冻结'" vlaue="2" type="danger">{{ scope.row.check }}</el-tag>
                        <el-tag v-if="scope.row.check==='正常'" vlaue="1" type="success">{{ scope.row.check }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="state" label="操作" min-width="100">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.check==='正常'" type="warning" vlaue="1" @click="dj(scope.row)">冻结</el-button>
                        <el-button v-if="scope.row.check==='冻结'" type="primary" vlaue="2" @click="jd(scope.row)">解冻</el-button>
                        <el-button  type="primary" @click="showupdialog=true">详细信息</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </el-card>

        <el-dialog
                title="志愿者信息"
                show-close
                :visible.sync="showupdialog">
            <el-form :model="upuser" label-width="70px">
                <el-form-item label="所属组织" >
                    <el-col :span="8" >
                        <el-select v-model="upuser.organ" placeholder="请选择所属组织" >
                            <el-option label="五邑大学青年志愿者协会" value="1"></el-option>
                            <el-option label="五邑大学智能制造学部" value="2"></el-option>
                            <el-option label="五邑大学经管学院" value="3"></el-option>
                            <el-option label="五邑大学生物科技与大健康学院" value="4"></el-option>
                            <el-option label="五邑大学外国语学院" value="5"></el-option>
                            <el-option label="五邑大学文学院" value="6"></el-option>
                            <el-option label="五邑大学土木建筑学院" value="7"></el-option>
                            <el-option label=".五邑大学艺术学院" value="8"></el-option>
                            <el-option label="五邑大学纺织材料与工程学院" value="9"></el-option>
                            <el-option label="五邑大学数学学院" value="10"></el-option>
                            <el-option label="五邑大学轨道交通学院" value="11"></el-option>
                            <el-option label="五邑大学应用物理与材料学院" value="12"></el-option>
                            <el-option label="五邑大学政法学院" value="13"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="upuser.last_name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <div style="text-align: start;margin-left: 10px">
                        <el-radio-group v-model="upuser.sex">
                            <el-radio-button label="男"></el-radio-button>
                            <el-radio-button label="女"></el-radio-button>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="upuser.username"
                              placeholder="账号为学号"></el-input>
                </el-form-item>
                <el-form-item label="政治面貌">
                    <el-col :span="8" >
                        <el-select v-model="upuser.political" placeholder="请选择政治面貌" >
                            <el-option label="群众" value="0"></el-option>
                            <el-option label="共青团员" value="1"></el-option>
                            <el-option label="中共预备党员" value="2"></el-option>
                            <el-option label="中共党员" value="3"></el-option>
                            <el-option label="其他党派" value="4"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="upuser.myclass"
                              placeholder="例如：170801"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="upuser.location"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="upuser.phone"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>var t;
export default {
    name: "VolunteerInfo",
    data() {
        return {
            showupdialog: false,
            currentPage: 1,
            data: [
                {
                    username: '',
                    last_name: '',
                    sex: '',
                    activity_time: '',
                    activity_count: '',
                    phone: '',
                    date_joined:'',
                    check: '正常',
                }
            ],
            upuser: {
                organ: '',
                last_name: '',
                sex: '',
                username: '',
                political: '',
                myclass: '',
                phone: '',
                location: '',
            },
            userid: 1,
            key: '',
            order: '',
        }
    },
    created() {

        t = this;
        //  this.userid = JSON.parse(window.localStorage.getItem("user")).id;
        this.init();
    },
    mounted() {

    },
    methods: {
        init() {
            this.$axios.get("/api/admin/user/", {
                order:1,
                page:1,
                pagesize:5,
                check:0
                }
            ).then( (res)=> {
                console.log(res);
                if (res.data.code === 1) {
                    t.data = res.data.data;
                }
            });
        },
        frozeVolunteer(){
            this.$axios.put('/api/admin/user/',{
                id:2,
                check:0
            })
        },
        handleCurrentChange(p) {
            t.currentPage = p;
            this.init();
        },

        shoup(b) {
            this.showupdialog = true;
            this.upuser = b;
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
