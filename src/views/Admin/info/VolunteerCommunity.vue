<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card shadow="never" style="margin-top: 20px;">
            <el-row style="margin-top: 20px" :gutter="20">
                <el-col :span="3">
                    <el-button type="primary" @click="showupdialog2=true">添加</el-button>
                </el-col>
            </el-row>

            <el-table :data="data" border stripe style="margin-top: 20px;margin-bottom: 20px">
                <el-table-column type="index">
                </el-table-column>
                <el-table-column prop="id" label="编号" >
                </el-table-column>
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="updatetime" label="更新时间" >
                </el-table-column>
                <el-table-column label="操作" width="400">
                    <template slot-scope="scope">
                        <el-button type="info" @click="showupdialog=true">编辑</el-button>
                        <el-button type="danger" @click="del(scope.row)">删除</el-button>
                    </template>
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
                title="添加"
                show-close
                :visible.sync="showupdialog2">
            <el-form :model="add" label-width="70px">
                <el-form-item label="标题">
                    <el-input v-model="add.title"></el-input>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="11">
                        <el-date-picker type="datetime" placeholder="选择日期时间" v-model="add.publishtime"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input
                            type="textarea"
                            :rows="6"
                            v-model="add.content">
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
                :visible.sync="showupdialog">
            <el-form :model="edit" label-width="70px">
                <el-form-item label="标题">
                    <el-input v-model="edit.title"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input
                            type="textarea"
                            :rows="6"
                            v-model="edit.content">
                    </el-input>
                </el-form-item>
                <el-form-item label="上传图片">
                    <el-col :span="4">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="http://127.0.0.1:8000/api/community/pic/"
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
    var t;
export default {
    name: "VolunteerCommunity",
    data() {
        return {
            showupdialog: false,
            showupdialog2:false,
            edit: {
                title: '',
                content: '',
                pic:'',
            },
            add: {
                title: '',
                content: '',
                publishtime:'',
            },
            currentPage: 1,
            data: [
                {
                    id: '',
                    title: '',
                    updatetime: '',
                }
            ],
            userid: 1,
        }
    },
    created() {

        t = this;
        //  this.userid = JSON.parse(window.localStorage.getItem("user")).id;
        this.init();
    },
    mounted() {

    },
    methods: {
        handleCurrentChange(p) {
            t.currentPage = p;
            this.init();
        },
        up() {
            if (this.add.publishtime === '') {
                this.$message.error("输入正确的日期格式")
                return;
            }
            this.$axios.post('/api/community/',this.add)
                .then((res)=>{
                    if(res.status==200){
                        this.$message.success ("创建成功")
                        console.log('成功!');
                    }
                }).catch((err)=>{
                this.$message.error(err)
            })
        }, cancel() {
            console.log('取消操作!');
        },
    },
    beforeDestroy() {

    },
    getCommunityTable(){
        this.$axios.get('/api/community/',{
            page:1,
            pagesize:1
        })
    },
    deleteCommunity(){
        this.$axios.delete(`/api/community/${22}/`)
    },
    changeCommunity(){
        this.$axios.put('/api/community/',{
            title:8,
            content:'sdds',
            publishtime:2,
            id:2
        })
    },
    uploadPic(){
        this.$axios.post('/api/community/pic/',{
            pic:'',
            id:2
        })
    },
    deletePic(){
        this.$axios.delete(`/api/community/pic/${22}/`)
    },
    createCommunity(){
        this.$axios.post('/api/community/',{
            title:'',
            content:'',
            publishtime:''
        })
    },
    props: {},
    computed: {//计算属性

    },
}
</script>

<style scoped>

</style>
