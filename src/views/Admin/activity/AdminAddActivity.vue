<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form style="margin-top: 30px"
                 ref="form"
                 :model="form"
                 label-width="80px">
            <el-form-item label="所属组织">
                <el-col :span="4">
                    <el-select v-model="form.organ"
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
            <el-form-item label="活动类型">
                <el-col :span="4">
                    <el-select v-model="form.type"
                               placeholder="请选择活动类型">
                        <el-option label="便民服务"
                                   value="1"></el-option>
                        <el-option label="政策宣传"
                                   value="2"></el-option>
                        <el-option label="青少年服务"
                                   value="3"></el-option>
                        <el-option label="绿色环保"
                                   value="4"></el-option>
                        <el-option label="敬老助残"
                                   value="5"></el-option>
                        <el-option label="其它服务"
                                   value="6"></el-option>

                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="活动名称">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="datetime"
                                    placeholder="选择日期时间"
                                    v-model="form.activity_starttime"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动时长">
                <el-input v-model="form.activity_time"
                          placeholder="请输入活动的时长（小时）"></el-input>
            </el-form-item>
            <el-form-item label="活动地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="招募人数">
                <el-input v-model="form.people_count"></el-input>
            </el-form-item>
            <el-form-item label="联系人">
                <el-input v-model="form.link_pople"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.link_phone"></el-input>
            </el-form-item>
            <el-form-item label="结束报名时间"
                          label-width="150">
                <el-col :span="11">
                    <el-date-picker v-model="form.registration_time"
                                    style="width: 100%;"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动内容">
                <el-input type="textarea"
                          v-model="form.activity_content"></el-input>
            </el-form-item>

            <el-form-item label="上传图片">
                <el-col :span="4">
                    <el-upload class="upload-demo"
                               action="http://127.0.0.1:8000/api/admin/activity/"
                               :on-preview="handlePreview"
                               :on-remove="handleRemove"
                               :file-list="form.activity_pic"
                               list-type="picture"
                               >
                        <el-button size="small"
                                   type="primary">点击上传</el-button>
                        <div slot="tip"
                             class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>

                    <input type="file">
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="onSubmit">发布</el-button>
                <el-button @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "AdminAddActivity",
    data() {
        return {
            form: {
                activity_pic:
                    [
                        {
                            name: 'activitypic/20200219173815.png',
                            url: 'activitypic/20200219173815.png'
                        },
                    ],
                organ: '',
                registration_time: '',
                activity_time: '',
                link_phone: '',
                activity_content: '',
                link_pople: '',
                people_count: '',
                title: '',
                activity_starttime: '',
                type: '',
                address: '',
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleRemove(file, activity_pic) {
            console.log(file, activity_pic);

        },
        handlePreview(file) {
            console.log(file);
        },
        onSubmit() {
            if (this.form.registration_time === '') {
                this.$message.error("日期格式错误！")
                return;
            }
            if (this.form.link_phone === '') {
                this.$message.error("请输入正确的联系电话！")
                return;
            }
            if (this.form.activity_time === '') {
                this.$message.error("日期格式错误！")
                return;
            }
            if (this.form.address === '') {
                this.$message.error("请输入活动地址！")
                return;
            }
            if (this.form.activity_content === '') {
                this.$message.error("请输入活动内容！")
                return;
            }
            this.$axios.post('/api/admin/activity/', this.form)
                .then((res) => {
                    if (res.data.status_code === 200) {
                        this.$message.success = "创建成功"
                        this.goBack()
                    }
                }).catch((err) => {
                    this.$message.error(err)
                })
        }, save() {
            console.log('save!');
        },
        handleAvatarSuccess() {

        },
        goBack() {
            this.$router.back(-1)
        },
        uploadPicture(file) {
            console.log(file)
            let formData = new FormData();
                formData.append("files", file.file);
            this.form.activity_pic = formData
            //this.$axios.post('/api/admin/activity/', formData);
        }
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
