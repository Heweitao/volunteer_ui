<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row style="margin-top: 20px" :gutter="20">

            <el-col :span="4">
                <el-input prefix-icon="el-icon-search" placeholder="输入关键字搜索" v-model="key"></el-input>
            </el-col>
            <el-col :span="1">
                <el-button type="primary" @click="search">搜索</el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="showupdialog2 = true">上传</el-button>
            </el-col>

        </el-row>
        <el-card shadow="never" style="margin-top: 20px;">
            <el-table :data="data" border stripe style="margin-bottom: 20px">
                <!--     <el-table-column type="index">
                     </el-table-column>-->
                <el-table-column type="index" width="80">
                </el-table-column>
                <el-table-column prop="activity_id" label="活动编号" >
                </el-table-column>
                <el-table-column prop="title" label="活动名称" >
                </el-table-column>
                <el-table-column prop="activity_type" label="活动类型">
                </el-table-column>
                <el-table-column prop="updatetime" label="更新时间">
                </el-table-column>
                <el-table-column prop="check" label="状态" v-model="status" value="7">
                    <template >
                        <el-tag type="danger" >结束</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="300">
                    <el-button type="success" size="small" @click="showupdialog = true">编辑</el-button>
                    <el-button type="danger" size="small" @click="del">删除活动</el-button>
                    <el-button type="primary" size="small" @click="$router.push('VolunteerTimeEntry')">义工时录入</el-button>
                </el-table-column>
            </el-table>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </el-card>

        <el-dialog
                title="上传"
                show-close
                :visible.sync="showupdialog2">
            <el-form :model="adddata" label-width="70px">
                <el-form-item label="标题">
                    <el-input v-model="adddata.title"></el-input>
                </el-form-item>
                <el-form-item label="发布时间" >
                    <el-col :span="11">
                        <el-date-picker type="datetime" placeholder="选择日期时间" v-model="adddata.publishtime"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="活动内容及反响">
                    <el-input
                            type="textarea"
                            :rows="6"
                            v-model="adddata.content">
                    </el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="up">确 定</el-button>
                  </span>
        </el-dialog>

        <el-dialog
                title="编辑"
                show-close
                :visible.sync="showupdialog">
            <el-form :model="edit" label-width="70px">
                <el-form-item label="活动名称">
                    <el-input v-model="edit.title"></el-input>
                </el-form-item>
                <el-form-item label="活动内容及反响">
                    <el-input
                            type="textarea"
                            :rows="6"
                            v-model="edit.content">
                    </el-input>
                </el-form-item>
                <el-form-item label="活动图片">
                    <el-col :span="4">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <!--                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                        </el-upload>
                    </el-col>
                </el-form-item>
            </el-form>
            <span SLOT="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="up">确 定</el-button>
                  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AdminHistoryActivity",
        data() {
            return {
                data: [
                    {
                        title: '',
                        activity_id:'',
                        activity_type: '',
                        updatetime: '',
                        check: '',
                    }
                ],
                adddata: [
                    {
                        activity_id:'',
                        title: '',
                        publishtime: '',
                        content: '',
                    }
                ],
                edit: [
                    {
                        activity_id:'',
                        title: '',
                        content: '',
                        pic:'',
                    }
                ],
                currentPage: 1,
                key: '',
                showupdialog : false,
                showupdialog2 : false,
            }
        },
        created() {
        },
        mounted() {
    
        },
        methods: {
            handleCurrentChange(p) {
                this.currentPage = p;
                this.init();
            },
            //post的数据部分请自行修改绑定
            up(){
                this.$axios.post('/api/history/',this.edit
                )
            },
            changeHistory(){
                this.$axios.put('/api/history/',this.edit)
            },
            deleteHistory(){
                this.$axios.delete(`/proxt/api/history/${22}`)
            },
            showEndActivity(){
                this.$axios.get('/api/activity/',{
                    status:7
                })
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
