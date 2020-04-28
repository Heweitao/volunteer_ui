<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="data" border stripe style="margin-top: 20px;margin-bottom: 20px">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="id" label="账号" width="60">
            </el-table-column>
            <el-table-column prop="pass" label="密码">
            </el-table-column>
            <el-table-column prop="name" label="用户名">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="50">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="130">
            </el-table-column>
            <el-table-column prop="address" label="收货地址">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="80">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.state==='冻结'" type="danger">{{ scope.row.state }}</el-tag>
                    <el-tag v-if="scope.row.state==='正常'" type="success">{{ scope.row.state }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ctime" label="创建时间" width="150">
            </el-table-column>

            <el-table-column prop="state" label="操作" min-width="100">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.state==='正常'" type="warning" @click="dj(scope.row)">冻结</el-button>
                    <el-button v-if="scope.row.state==='冻结'" type="primary" @click="jd(scope.row)">解冻</el-button>
                    <el-button type="danger" @click="del(scope.row)">删除</el-button>
                    <el-button type="info" @click="shoup(scope.row)">编辑</el-button>
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

        <el-dialog
                title="修改用户资料"
                :visible="showupdialog">
            <el-form :model="upuser" label-width="70px">
                <el-form-item label="身份证">
                    <el-input v-model="upuser.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="upuser.pass"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="upuser.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="upuser.age"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <div style="text-align: start;margin-left: 20px">
                        <el-radio-group v-model="upuser.sex">
                            <el-radio-button label="男"></el-radio-button>
                            <el-radio-button label="女"></el-radio-button>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="家庭住址">
                    <el-input v-model="upuser.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="upuser.phone"></el-input>
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
    name: "AdminGL",
    data() {
        return {
            showupdialog: false,
            upuser: {
                id: '10001',
                name: '李志军',
                pass: '',
                sex: '男',
                age: '25',
                phone: '10086',
                ctime: '10086',
                state: '10086',
                address: '广东省中山市得利大厦A座1001',
            },
            currentPage: 1,
            data: [
                {
                    id: '10001',
                    name: '李志军',
                    pass: '',
                    sex: '男',
                    age: '25',
                    phone: '10086',
                    ctime: '10086',
                    state: '正常',
                    address: '广东省中山市得利大厦A座1001',
                }
            ],
            userid: 1,
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
            this.axios.get("/admin/user", {
                params: {
                    p: this.currentPage,
                    userid: this.userid,
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.code === 1) {
                    t.data = res.data.data;
                }
            });
        },
        handleCurrentChange(p) {
            t.currentPage = p;
            this.init();
        },
        del(b) {
            this.$confirm('确定删除账号： ' + b.id + " 的用户吗？", '提示', {
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
        shoup(b) {
            this.showupdialog = true;
            this.upuser = b;
        },
        up(b) {
            console.log(b)
            this.axios.put("user", {
                id: this.upuser.id,
                name:this.upuser.name,
                pass: this.upuser.pass,
                sex: this.upuser.sex,
                age: this.upuser.age,
                phone:this.upuser.phone,
                address: this.upuser.address,
            })
                .then(function (res) {
                    console.log(res);
                    t.init();
                    t.showupdialog = false;
                    t.$message.success("修改成功！")
                }).catch(function (error) {
                t.$message.error("修改失败" + error)
                console.log(error);
            });
        },
        dj(b) {
            this.axios.put("user", {
                id: b.id,
                state: '冻结',
            })
                .then(function (res) {
                    console.log(res);
                    t.init();
                }).catch(function (error) {
                //t.$message.error("添加失败" + error)
                console.log(error);
            });
            console.log(b)
        },
        jd(b) {
            this.axios.put("user", {
                id: b.id,
                state: '正常',
            })
                .then(function (res) {
                    console.log(res);
                    t.init();
                }).catch(function (error) {
                //t.$message.error("添加失败" + error)
                console.log(error);
            });
            console.log(b)
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
