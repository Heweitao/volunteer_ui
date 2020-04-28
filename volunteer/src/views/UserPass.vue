<template>
    <div id="app">

        <el-card shadow="hover" style="text-align: center;width:900px;">
            <div style="text-align: left;padding-left: 380px">
                <h1 style="font-size: 18px;color: #4d4d4d;">密码修改</h1>
            </div>
            <el-form :model="data" label-width="100px">
            <el-form-item label="旧密码">
                <el-input v-model="oldpass"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码">
                <el-input v-model="re_password"></el-input>
            </el-form-item>
        </el-form>
            <span SLOT="footer" class="dialog-footer">
            <el-button type="primary" @click="save">保存</el-button>
              </span>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UserPass",
        data() {
            return {
                data: {
                    oldpass: '',
                    password: '',
                    re_password: '',
                }
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            save(){
                this.$axios.put('/api/user/password/',{
                    password:this.data.password,
                    re_password:this.data.re_password
                })
                .then(this.$message.success('修改成功'));
            }
        }
    }
</script>

<style scoped>

</style>
