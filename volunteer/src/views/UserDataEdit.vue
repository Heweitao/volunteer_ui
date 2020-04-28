<template>
    <div id="app">

        <el-card shadow="hover" style="text-align: center;">

            <el-form :model="data" label-width="110px" style="margin-top: 20px">
                <el-form-item label="所属组织" >
                    <el-col :span="4" >
                        <el-select v-model="data.organ" placeholder="请选择所属组织" >
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
                    </el-col>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="data.last_name"></el-input>
                </el-form-item>
                <el-form-item label="性别" >
                    <div style="text-align: start;margin-left: 10px;width: 130px" >
                        <el-radio-group v-model="data.sex">
                            <el-radio-button label="男"></el-radio-button>
                            <el-radio-button label="女"></el-radio-button>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="政治面貌">
                    <el-col :span="4" >
                        <el-select v-model="data.political" placeholder="请选择政治面貌" >
                            <el-option label="群众" value="1"></el-option>
                            <el-option label="共青团员" value="2"></el-option>
                            <el-option label="中共预备党员" value="3"></el-option>
                            <el-option label="中共党员" value="4"></el-option>
                            <el-option label="其他党派" value="5"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="data.myclass"
                              placeholder="例如：170801"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="data.location"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="data.phone"></el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="yes">确 定</el-button>
                  </span>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "UserDataEdit",
        data() {
            return {
                data: {
                    organ: '生物科技与大健康学院',
                    last_name: '李志军',
                    sex: '男',
                    political: '群众',
                    myclass: '',
                    location: '北京天安门',
                    phone: '10000',
                }
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            yes(){
                this.$axios.put('/api/user/',
                    this.data
                )
            }
        }
    }
</script>

<style scoped>

</style>
