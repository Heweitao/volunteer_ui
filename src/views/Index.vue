<template>

    <div id="app">
        <el-container>
            <el-header style="height: 90px;width: 100%;margin: 0;padding: 0">
                <img @click="$router.push('Index')" style="cursor: pointer" class="logo"
                     src="http://jmva.jiangmen.cn/images/logo.jpg"/>
                <div class="top_font">
                    <a href="#/Index">首页</a>

                    <a href="#/User">个人中心</a>

                    <a href="#/Activity">活动招募</a>

                    <a href="#/ShowStyle">风采展示</a>

                    <a href="#/About">关于我们</a>
                </div>
                <div class="tool">
                    <div style="margin-right: 100px">
                        <span class="item el-icon-user" @click="to" v-if="!islogin">  {{tip}}</span>
                        <span class="item" v-if="islogin">你好!  {{this.$store.state.userData.lastname}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="item" v-if="!islogin" @click="$router.push('Login')">注册</span>
                        <el-divider v-if="!islogin" direction="vertical"></el-divider>
                        <span class="item" @click="$router.push('AdminLogin')">管理员入口</span>
                        <el-divider v-if="islogin" direction="vertical"></el-divider>
                        <span v-if="islogin" class="item" @click="loginout">退出登录</span>
                    </div>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer style="padding-top: 20px">
                <div>
                    <a href="#/Index" style="font-size: 14px">首页</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="#/About" style="font-size: 14px">关于我们</a>
                    <el-divider direction="vertical"  v-if="this.$store.state.userData.role==2" ></el-divider>
                    <a style="font-size: 14px" href="#/Admin" v-if="this.$store.state.userData.role==2">管理员</a>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import utils from "@/public/utils"
    export default {
        name: "Index",
        data() {
            return {
                islogin: this.$store.state.token.length>0,
                tip: '你好！请登录',
            }
        },
        created() {
            let token = utils.getSession("vuex")
            this.$store.commit('set_token',token)
            console.log(this.$store.state.token)
        },
        mounted() {

        },
        methods: {
            to() {
                if (this.tip === '你好！请登录') {
                    this.$router.push('Login');
                    return;
                }
            },
            loginout() {
                //退出登录
                window.sessionStorage.clear();
                this.$router.push("/Login");
            },
        },
        beforeDestroy() {

        },
        props: {},
        computed: {//计算属性

        },
    }
</script>

<style lang="less" scoped>
    .el-container {
        height: 100%;
    }

    .el-header {
        z-index: 99;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /*//  background: url("https://img02.hua.com/pc/images/pc_newuser_order_100.png?v") 50% 0px no-repeat;*/

        .logo {
            height: 80px;
            margin-right: 20px;
        }

        .top_font {

            a {
                margin-right: 20px;
                margin-left: 20px;
                font-size: 16px;
                color: #333333;
                font-weight: bold;
            }

            a:hover {
                cursor: pointer;
                color: #409EFF;
            }
        }

        .tool {
            font-weight: 500;
            font-size: 13px;
            padding: 0;
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            text-align: center;
            //   background-color: #f2f2f2;
            height: 35px;

            .item {
                text-align: center;
                margin-right: 17px
            }

        }
    }

    .el-main {
        height: 100%;
        padding-left:5%;
        padding-right: 5%;
    }

    .el-footer {
        background-color: #FFF;
    }

    .footer-nav {
        display: block;
        font-size: 15px;
        width: 1200px;
        margin: 30px auto;
        text-align: center;
        box-shadow: 0 0 black;
        color: #737373;
        text-decoration: none;
    }

    .footer-nav > a {
        color: #737373;
        text-decoration: none;
    }
</style>
