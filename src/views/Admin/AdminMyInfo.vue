<template>
    <div id="app">

        <el-card shadow="hover" style="text-align: center;">

             <el-form :model="data" label-width="140px" style="margin-top: 20px">
                <el-form-item label="账号ID">
                    <el-input v-model="data.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="data.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="data.sex" disabled></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="data.pass"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="data.age"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="data.phone"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="data.jj" type="textarea" show-word-limit="true"
                              autosize></el-input>
                </el-form-item>
                <el-button type="primary" @click="sa">保存修改</el-button>
            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "AdminMyInfo",
        data() {
            return {
                data: {
                    id: '10001',
                    name: '李志军',
                    pass: '',
                    sex: '男',
                    age: '25',
                    phone: '10086',
                    jj: '简介',
                }
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            sa() {
            },
            login() {
            }
        }
    }
</script>

<style scoped>

</style>
