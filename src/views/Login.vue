<template>

    <div id="app">
        <div class="login">
            <el-card>
                <el-form :model="form">

                    <div style="margin-top: 5px;margin-bottom: 20px;text-align: center;margin-left: 15px">
                        <span style="font-size: 22px;">登录义工网</span>
                    </div>
                    <el-form-item>
                        <el-input v-model="form.username"
                                  prefix-icon="el-icon-user"
                                  placeholder="账号（账号为学号）"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password"
                                  prefix-icon="el-icon-lock"
                                  placeholder="密码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button style="width: 100%;"
                                   type="success"
                                   autofocus
                                   @click="login">登录</el-button>
                    </el-form-item>
                    <el-form-item style="margin: 0;padding: 0;text-align: end">
                        <!--                        <a style="font-size: 13px; margin: 0;padding: 0" @click="zcdialgo =true">还没有账号？立即注册</a>-->
                        <el-button style="width: 100%;"
                                   type="primary"
                                   autofocus
                                   @click="zcdialgo =true">还没有账号？立即注册
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
        <el-dialog title="注册新用户"
                   show-close
                   :visible.sync="zcdialgo">
            <el-form :model="adddata"
                     label-width="70px">
                <el-form-item label="所属组织">
                    <el-col :span="8">
                        <el-select v-model="adddata.organ"
                                   placeholder="请选择所属组织">
                            <el-option label="五邑大学青年志愿者协会"
                                       value="1"></el-option>
                            <el-option label="五邑大学智能制造学部"
                                       value="2"></el-option>
                            <el-option label="五邑大学经管学院"
                                       value="3"></el-option>
                            <el-option label="五邑大学生物科技与大健康学院"
                                       value="4"></el-option>
                            <el-option label="五邑大学外国语学院"
                                       value="5"></el-option>
                            <el-option label="五邑大学文学院"
                                       value="6"></el-option>
                            <el-option label="五邑大学土木建筑学院"
                                       value="7"></el-option>
                            <el-option label=".五邑大学艺术学院"
                                       value="8"></el-option>
                            <el-option label="五邑大学纺织材料与工程学院"
                                       value="9"></el-option>
                            <el-option label="五邑大学数学学院"
                                       value="10"></el-option>
                            <el-option label="五邑大学轨道交通学院"
                                       value="11"></el-option>
                            <el-option label="五邑大学应用物理与材料学院"
                                       value="12"></el-option>
                            <el-option label="五邑大学政法学院"
                                       value="13"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="adddata.last_name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <div style="text-align: start;margin-left: 10px">
                        <el-radio-group v-model="adddata.sex">
                            <el-radio-button label="1">男</el-radio-button>
                            <el-radio-button label="0">女</el-radio-button>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="adddata.username"
                              placeholder="账号为学号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="adddata.password"
                              placeholder="密码由6-15位字母+数字组成"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="adddata.re_password"
                              placeholder="确保密码跟上面保持一致"></el-input>
                </el-form-item>
                <el-form-item label="政治面貌">
                    <el-col :span="8">
                        <el-select v-model="adddata.political"
                                   placeholder="请选择政治面貌">
                            <el-option label="群众"
                                       value="1"></el-option>
                            <el-option label="共青团员"
                                       value="2"></el-option>
                            <el-option label="中共预备党员"
                                       value="3"></el-option>
                            <el-option label="中共党员"
                                       value="4"></el-option>
                            <el-option label="其他党派"
                                       value="5"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="adddata.myclass"
                              placeholder="例如：170801"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="adddata.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="adddata.phone"></el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer"
                  class="dialog-footer">
                <el-button @click="zcdialgo = false">取 消</el-button>
                <el-button type="primary"
                           @click="zc">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import utils from "@/public/utils"
export default {
    name: "Login",
    data() {
        return {
            zcdialgo: false,
            form: {
                username: '',
                password: ''
            },
            adddata: {
                username: '',
                password: '',
                re_password: '',
                sex: '1',
                last_name: '',
                location: '地址',
                myclass: '',
                political: '',
                organ: '',
                phone: ''
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
            if (this.form.username === '') {
                this.$message.error("请输入账号")
                return;
            }
            if (this.form.password === '') {
                this.$message.error("请输入密码")
                return;
            }
            this.$axios.post('/login/', this.form)
                .then((res) => {
                    console.log(res.data, 'log')
                    const { user_id, username, role ,lastname} = res.data
                    _this.$store.commit('set_token', res.data.token)
                    _this.$store.commit('setUserData', res.data)
                    utils.saveSession("vuex", res.data.token)
                    utils.saveSession("userData", res.data)
                    if (res.data.message && res.data.message === "等待管理员审核账号") {
                        _this.$message.error(res.data.message)
                        throw new Error;
                    }
                    if (res.data.role === 0) {
                        _this.$message.success("登录成功")
                        _this.$router.push("/Home")
                    }
                    else {
                        _this.$message.error("权限错误，请前往管理员登录页面！")
                    }                });
        },
        zc() {
            if (this.adddata.password != this.adddata.re_password) {
                this.$message.error("两次密码不正确，请重新输入")
            }
            this.$axios.post('/api/user/', this.adddata)
                .then((res) => {
                    if (res.data.message === 'ok') this.$message.success('注册成功!')
                });
        }
    }}
</script>

<style lang="less" scoped>
#app {
  //   background: url("https://blue.landray.com.cn/img/others_bc_bcPic@2x.afb14e25.png");
  // background: url("https://blue.landray.com.cn/img/EKP_banner_bcPic@2x.5598ae02.png");
  background-image: url(//pcbrowser.dd.qq.com/pcbrowserbig/assets/navigate/img/day_cloud.png),
    linear-gradient(180deg, #0260ac, #3992e0 36%, #9ce0fe 77%, #eff9fd);
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