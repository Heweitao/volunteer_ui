<template>

    <div id="app">
        <div class="login">
            <el-card>
                <el-form :model="form">

                    <div style="margin-top: 5px;margin-bottom: 20px;text-align: center;margin-left: 15px">
                        <span style="font-size: 22px;">管理员登陆</span>
                    </div>
                    <el-form-item>
                        <el-input v-model="form.username" prefix-icon="el-icon-user"
                                  placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" prefix-icon="el-icon-lock"
                                  placeholder="密码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button style="width: 100%;" type="success" autofocus @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
        <!-- <el-dialog
                title="注册新用户"
                :visible="zcdialgo">
            <el-form :model="adddata" label-width="70px">
                <el-form-item label="密码">
                    <el-input v-model="adddata.pass"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="adddata.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="adddata.age"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <div style="text-align: start;margin-left: 20px">
                        <el-radio-group v-model="adddata.sex">
                            <el-radio-button label="男"></el-radio-button>
                            <el-radio-button label="女"></el-radio-button>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-input v-model="adddata.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="adddata.phone"></el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer" class="dialog-footer">
    <el-button @click="zcdialgo = false">取 消</el-button>
    <el-button type="primary" @click="zc">确 定</el-button>
                  </span>
        </el-dialog> -->
    </div>
</template>

<script>
import utils from "@/public/utils"
import process from "@/public/process"
export default {
    name: "AdminLogin",
    data() {
        return {
            zcdialgo: false,
            form: {
                username: '',
                password: '',
            }
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        login() {
            let _this = this
            if (this.form.id === '') {
                this.$message.error("请输入账号")
                return; 
            }
            if (this.form.pass === '') {
                this.$message.error("请输入密码")
                return;
            }
            let url="/login/"
         
            this.$axios.post(url,this.form)
            .then((res)=>{
            console.log(res.data)
            if(res.data.role!=0&&res.data.token){
            const {user_id,username,role} = res.data
            _this.$store.commit('set_token',res.data.token)
            _this.$store.commit('setUserData',{user_id,username,role})
            utils.saveSession("vuex",res.data.token)
            utils.saveSession("userData",{user_id,username,role})
            _this.$message.success("登录成功")
            _this.$router.push("/AdminIndex")
            }
            else {
                _this.$message.error("权限错误，请前往用户登录页面！")
         }});
        },

    }}
</script>

<style lang="less" scoped>

    #app {
        //   background: url("https://blue.landray.com.cn/img/others_bc_bcPic@2x.afb14e25.png");
        // background: url("https://blue.landray.com.cn/img/EKP_banner_bcPic@2x.5598ae02.png");
        background-image: url(//pcbrowser.dd.qq.com/pcbrowserbig/assets/navigate/img/day_cloud.png),linear-gradient(180deg,#0260ac,#3992e0 36%,#9ce0fe 77%,#eff9fd);
    }

    .login {
        width: 400px;
        height: 400px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
    }
</style>
