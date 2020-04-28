<template>

    <div id="app">
        <el-container>
            <el-header>
                <a style="text-align: center;text-decoration:none"
                   href='#/Admin'>
                    <div>

                        <el-image src="http://jmva.jiangmen.cn/images/logo.jpg"
                                  lazy
                                  style="width: 80px;"></el-image>
                        <!--   <img src="../assets/logo.png">-->
                        <!--                        <h1 style="color: #ff6a00;margin-left: 20px">管理系统</h1>-->

                    </div>
                </a>
                <h4 class="ft"
                    style="color: #000">{{tip}}
                    <el-tag style="margin-left: 20px;font-size: 14px"
                            type="success"
                            size="mini"
                            effect="dark">在线
                    </el-tag>
                </h4>
                <el-button type="info"
                           @click="loginout"
                           round>退出登录</el-button>
            </el-header>
            <el-container>
                <el-aside :style="{'width':isCollapse?'64px':'250px'}">

                    <el-tooltip class="item"
                                effect="dark"
                                :content="isCollapse?'展开':'折叠'"
                                placement="top">
                        <li style="padding: 13px;color: #000;cursor: pointer"
                            @click="isCollapse=!isCollapse"
                            :class="isCollapse?'el-icon-arrow-right':'el-icon-arrow-left'" />
                    </el-tooltip>
                    <el-menu :default-active="navselected"
                             @select="selectItems"
                             class="el-menu-vertical-demo"
                             text-color="#000"
                             :collapse="isCollapse"
                             :router="true">
                        <el-menu-item index="AdminIndex">
                            <i class="el-icon-house"></i>
                            <span slot="title">数据统计</span>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-thumb"></i>
                                <span>活动管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="AdminActivity">
                                    <i class="el-icon-c-scale-to-original"></i>
                                    <span slot="title">活动管理</span>
                                </el-menu-item>
                                <el-menu-item index="AdminAddActivity">
                                    <i class="el-icon-chicken"></i>
                                    <span slot="title">发布活动</span>
                                </el-menu-item>
                                <el-menu-item index="AdminHistoryActivity">
                                    <i class="el-icon-apple"></i>
                                    <span slot="title">历史活动</span>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-refrigerator"></i>
                                <span>志愿者管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item class=""
                                              index="VolunteerInfo">
                                    <i class="el-icon-zoom-in"></i>
                                    <span slot="title">志愿者信息</span>
                                </el-menu-item>
                                <el-menu-item class=""
                                              index="VolunteerReview">
                                    <i class="el-icon-tickets"></i>
                                    <span slot="title">待审核</span>
                                </el-menu-item>
                                <!--         <el-menu-item index="VolunteerTimeEntry">
                                    <i class="el-icon-wallet"></i>
                                    <span slot="title">义工时录入</span></el-menu-item>-->
                            </el-menu-item-group>

                        </el-submenu>

                        <el-menu-item index="VolunteerCommunity">
                            <i class="el-icon-zoom-in"></i>
                            <span slot="title">志愿社区</span>
                        </el-menu-item>
                        <el-menu-item index="AdminSystem">
                            <i class="el-icon-male"></i>
                            <span slot="title">系统管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view/>
                    </el-main>
                    <el-footer>
                        <footer style="color: #000;font-size: 14px">志愿者管理系统</footer>
                    </el-footer>
                </el-container>

            </el-container>

        </el-container>
    </div>
</template>

<script>
export default {
    // name: "Admin",
    data() {
        return {
            navselected: "Welcome",
            isCollapse: false,
            tip: "你好 ！管理员",
            user: null,

        }
    },
    created() {
    },
    mounted() {
        console.log(this.$store.state.userData);
    },
    methods: {
        loginout() {
            window.localStorage.clear();
            window.sessionStorage.clear();
            this.$router.push("/AdminLogin");
        },
        setNavselected(s) {
            this.navselected = s;
        },
        selectItems(index) {
            this.$store.state.navselected = index;
        },
        getUser() {
            //这里跑用户数据api

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
.el-header {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  height: 100px;
  background: #ffffff;
  align-items: center;
  justify-content: space-between;

  > a {
    div {
      display: flex;
      align-items: center;

      .el-image {
        margin-left: 20px;
        height: 70px;
        width: 80px;
      }
    }
  }
}

.el-main {
  background-color: #f8f9fb;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #f8f9fb;
  height: 100%;

  .el-menu {
    border-right: none;
    background-color: #f8f9fb;

    .el-menu-item-group {
      background-color: #f8f9fb;
    }
    text-align: left;
  }
}

.el-footer {
  cursor: pointer;
  background-color: #f8f9fb;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
