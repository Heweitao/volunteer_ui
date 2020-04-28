<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <div style="text-align: left;padding-left: 380px">
            <h1 style="font-size: 18px;color: #4d4d4d;">管理员列表</h1>
        </div>

        <el-row style="margin-top: 10px" :gutter="20">
            <el-col :span="5">
                <el-button type="primary" @click="showupdialog2=true">新增管理员</el-button>
            </el-col>
        </el-row>

        <el-row style="margin-top: 1px">
        </el-row>
        <el-table :data="data" border stripe style="margin-left: 40px;margin-top: 20px;margin-bottom: 20px;width:800px;" >
            <el-table-column type="index" width="60px">
            </el-table-column>
            <el-table-column prop="username" label="账号" width="120px">
            </el-table-column>
            <el-table-column prop="last_name" label="名称" >
            </el-table-column>
            <el-table-column prop="organ" label="组织" >
            </el-table-column>
            <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <el-button type="danger" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="新增管理员"
                show-close
                :visible.sync="showupdialog2">
            <el-form :model="add" label-width="70px">
                <el-form-item label="账号">
                    <el-input v-model="add.username"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="add.last_name"></el-input>
                </el-form-item>
                <el-form-item label="组织">
                    <el-select v-model="add.organ" placeholder="请选择所属组织">
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
                </el-form-item>
                <el-form-item label="初始密码">
                    <el-input v-model="add.password"></el-input>
                </el-form-item>
                <el-form-item label="重复密码">
                    <el-input v-model="add.re_password"></el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer" class="dialog-footer">
    <el-button @click="showupdialog = false">取 消</el-button>
    <el-button type="primary" @click="up">确 定</el-button>
                  </span>
        </el-dialog>

    </div>
</template>

<script>var t;
export default {
    name: "AdminSystem",
    data() {
        return {
            showupdialog: false,
            showupdialog2: false,
            add: {
                username: '',
                last_name: '',
                organ:'',
                pasword: '',
                re_password: '',
            },
            currentPage: 1,
            data: [
                {
                    id: '10001',
                    username: '',
                    last_name: '',
                    organ:'',
                }
            ],
            userid: 1,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        addOrdinaryAdmin(){
            this.$axios.post('/api/admin/user/',{
                username:',',
                password:'',
                re_password:'',
                last_name:'',
                organ:10
            })
        },
        getOrdinaryAdminTable(){
            this.$axios.get('/api/admin/user/',{
                role:1
            })
        },
        deleteOrdinaryAdmin(){
            this.$axios.delete(`/api/admin/${22}`)
        },
        handleCurrentChange(p) {
            t.currentPage = p;
            this.init();
        },
        del(b) {
            this.$confirm('确定删除账号为 ' + b.id + " 的管理员吗？", '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info'
            }).then(() => {
                this.axios.delete("user", {
                    params: {
                        id: b.id
                    }
                }).then(function (res) {
                    console.log(res);
                    t.$message.success("删除成功！")
                    t.init();
                }).catch(function (error) {
                    //t.$message.error("添加失败" + error)
                    console.log(error);
                });
            }).catch(() => {
                t.$message.success("取消操作！")
            });
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
