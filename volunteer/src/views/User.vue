<template>

    <div id="app">
        <el-container>
            <el-container>
                <el-aside :style="{'width':isCollapse?'64px':'250px'}">
                    <el-tooltip class="item" effect="dark" :content="isCollapse?'展开':'折叠'" placement="top">
                        <li style="padding: 13px;color: #000;cursor: pointer" @click="isCollapse=!isCollapse"
                            :class="isCollapse?'el-icon-arrow-right':'el-icon-arrow-left'"/>
                    </el-tooltip>
                    <el-menu :default-active="navselected"
                             @select="selectItems"
                             class="el-menu-vertical-demo"
                             text-color="#000"
                             :collapse="isCollapse"
                             :router="true">
                        <el-menu-item index="UserMyInfo">
                            <i class="el-icon-user"></i>
                            <span slot="title">我的信息</span>
                        </el-menu-item>
                        <el-menu-item index="UserDataEdit">
                            <i class="el-icon-edit"></i>
                            <span slot="title">资料修改</span></el-menu-item>
                        <el-menu-item index="UserPass">
                            <i class="el-icon-position"></i>
                            <span slot="title">密码修改</span>
                        </el-menu-item>
                        <el-menu-item index="UserActivity">
                            <i class="el-icon-apple"></i>
                            <span slot="title">我的活动</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view/>
                    </el-main>
                </el-container>

            </el-container>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                isCollapse: false,
                user: null,
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            setNavselected(s) {
                this.navselected = s;
            },
            selectItems(index) {
                this.$store.state.navselected = index;
            }
        },
        beforeDestroy() {

        },
    }
</script>

<style lang="less" scoped>

    .el-main {
        background-color: #F8F9FB;
        height: 100%;

    }

    .el-container {
        height: 100%;
    }

    .el-aside {
        background-color: #F8F9FB;;
        height: 100%;

        .el-menu {
            border-right: none;
            background-color: #F8F9FB;;

            .el-menu-item-group {
                background-color: #F8F9FB;;
            }
        }
    }

</style>
