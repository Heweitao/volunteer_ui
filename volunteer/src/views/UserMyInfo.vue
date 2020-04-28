<template>
    <div id="app">

        <el-card shadow="hover" style="text-align: center;">

            <el-form :model="data" label-width="110px" style="margin-top: 20px">
                <el-form-item label="账号">
                    <el-input v-model="data.username" disabled></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="data.last_name" disabled></el-input>
                </el-form-item>
                <el-form-item label="所属组织">
                    <el-input v-model="data.organ" disabled></el-input>
                </el-form-item>
                <el-form-item label="注册时间">
                    <el-input v-model="data.date_joined" disabled></el-input>
                </el-form-item>
                <el-form-item label="服务次数">
                    <el-input v-model="data.activity_count" disabled></el-input>
                </el-form-item>
                <el-form-item label="服务时长">
                    <el-input v-model="data.activity_time" disabled></el-input>
                </el-form-item>
                <el-form-item label="账号状态" width="800">
                    <el-tag v-if="data.check==='冻结'" value="2" type="danger" >{{ data.check }}</el-tag>
                    <el-tag v-if="data.check==='正常'" value="1" type="success">{{ data.check }}</el-tag>
                </el-form-item>
                <el-form-item label="最近登录时间">
                    <el-input v-model="data.logintime" disabled></el-input>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UserMyInfo",
        data() {
            return {
                data: {
                    username: '',
                    last_name: '',
                    organ: '',
                    date_joined: '',
                    activity_count: '',
                    activity_time: '',
                    check: '',
                    logintime: '',
                }
            }
        },
        created() {
        },
        mounted() {
            this.$axios.get('/api/user/')
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
