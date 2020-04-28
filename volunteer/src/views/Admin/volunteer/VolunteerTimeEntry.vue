<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="data" border stripe style="margin-top: 20px;margin-bottom: 20px;width:1000px">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="organ" label="所属组织">
            </el-table-column>
            <el-table-column prop="username" label="账号" width="100">
            </el-table-column>
            <el-table-column prop="last_name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="50">
            </el-table-column>
            <el-table-column prop="users" label="id" v-model="data.users" width="50">
            </el-table-column>
            <el-table-column prop="activity_time" label="服务时长（h)" width="150">
                <el-input  v-model="data.activity_time" placeholder="请输入"></el-input>
            </el-table-column>
            <el-table-column prop="rank" label="服务评价" width="180">
                <el-select v-model="data.rank" placeholder="请评价">
                    <el-option label="优秀" value="2"></el-option>
                    <el-option label="良好" value="1"></el-option>
                    <el-option label="一般" value="0"></el-option>
                </el-select>
            </el-table-column>
            <el-table-column prop="state" label="操作" min-width="50" >
                <el-button type="primary" @click="input">录入</el-button>
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

    </div>
</template>

<script>
export default {
    name: "VolunteerTimeEntry",
    data() {
        return {
            currentPage: 1,
            data: [
                {
                    organ:'111',
                    username: '',
                    last_name: '',
                    sex: '男',
                    id:'',
                    users:'',
                    rank:'',
                    activity_time:'',
                }

            ],
        }
    },
    created() {


    },
    mounted() {

    },
    methods: {
        putActivityTime(){
            this.$axios.put('/api/activity/time/',{
                rank:0,
                users:[1,2],
                activity_time:2,
                id:2
            }).then((res)=>this.$message.success(res.data.results))
        },
        getVolunteerInfo(){
            this.$axios.get(`/api/activity/${22}`)
        }
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
