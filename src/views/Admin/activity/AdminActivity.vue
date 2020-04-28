<template>
    <div class="view-m-adminActivity">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row class="headerDiv"
                :gutter="20">
            <!--            //根据特定的情况显示这个下拉-->
            <el-col :span="4">
                <!--                都是超级管理员的东西-->
                <el-select v-model="searchOption.status"
                           placeholder="活动状态"
                           @change="changeHandle">
                    <el-option label="待审核"
                               value="0"></el-option>
                    <el-option label="审核中"
                               value="1"></el-option>
                    <el-option label="待发布"
                               value="2"></el-option>
                    <el-option label="已发布"
                               value="3"></el-option>
                    <el-option label="报名中"
                               value="4"></el-option>
                    <el-option label="报名结束"
                               value="5"></el-option>
                    <el-option label="活动中"
                               value="6"></el-option>
                    <el-option label="活动结束"
                               value="7"></el-option>
                    <el-option label="活动取消"
                               value="8"></el-option>
                    <el-option label="审核不通过"
                               value="10"></el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-button type="primary"
                           @click="search">搜索</el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="primary"
                           @click="search">按热度排序</el-button>
            </el-col>

        </el-row>
        <el-card shadow="never"
                 style="margin-top: 20px;">
            <el-table :data="tableData"
                      border
                      stripe
                      style="margin-bottom: 20px"
                      v-loading="loading"
                      header-row-class-name="headerClass"
                      row-class-name="rowClass">
                <!--     <el-table-column type="index">
                     </el-table-column>-->
                <el-table-column prop="id"
                                 label="活动编号"
                                 min-width="50">
                </el-table-column>
                <el-table-column prop="activity_pic"
                                 label="图片"
                                 min-width="220"
                                 align="center">
                    <template slot-scope="scope">
                        <el-image style="width: 200px;cursor: pointer"
                                  :src="scope.row.activity_pic"
                                  lazy
                                  @click="go(scope.row.id)"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="organ.name"
                                 label="所属组织"
                                 min-width="100">
                </el-table-column>
                <el-table-column prop="title"
                                 label="活动名称"
                                 min-width="100">
                </el-table-column>
                <el-table-column prop="type_name"
                                 label="活动类型">
                </el-table-column>
                <el-table-column prop="people_count"
                                 label="招募人数">
                </el-table-column>
                <el-table-column prop="people"
                                 label="报名人数">
                </el-table-column>
                <el-table-column prop="activity_starttime"
                                 label="活动时间"
                                 min-width="95">
                    <template slot-scope="scope">
                        {{new Date(scope.row.updatetime).Format('yyyy-MM-dd HH:mm:ss')}}
                    </template>
                </el-table-column>
                <el-table-column prop="updatetime"
                                 label="更新时间"
                                 min-width="95">
                    <template slot-scope="scope">
                        {{new Date(scope.row.updatetime).Format('yyyy-MM-dd HH:mm:ss')}}
                    </template>
                </el-table-column>
                <el-table-column prop="hotcount"
                                 label="热度"
                                 min-width="55">
                </el-table-column>
                <el-table-column prop="status"
                                 label="状态">
                    <template slot-scope="scope">
                        <el-tag>{{scope.row.status | statusText}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作"
                                 align="center">
                    <template slot-scope="scope">
                        <el-button type="primary"
                                   size="small"
                                   v-if="[3,4,5,6,7,8].includes(scope.row.status)"
                                   @click="go(scope.row.id)">查看活动</el-button>
                        <el-button type="primary"
                                   size="small"
                                   v-if="[4,7].includes(scope.row.status)"
                                   @click="bmxx(scope.row)">报名信息</el-button>
                        <el-button type="success"
                                   size="small"
                                   v-if="scope.row.status==10"
                                   @click="showupdialog=true">审核意见</el-button>
                        <!-- <el-button type="success"
                                       size="small"
                                       @click="shdialog=true">点击审核</el-button> -->
                        <el-button type="danger"
                                   size="small"
                                   v-if="[2,10].includes(scope.row.status)"
                                   @click="del(scope.row.id)">删除活动</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="1"
                                   v-if="scope.row.status==0"
                                   @click="changeStatus(1,scope.row.id)">提交审核</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="3"
                                   v-if="scope.row.status==2"
                                   @click="changeStatus(3,scope.row.id)">发布活动</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="4"
                                   v-if="scope.row.status==3"
                                   @click="changeStatus(4,scope.row.id)">开始报名</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="6"
                                   v-if="scope.row.status==7"
                                   @click="changeStatus(6,scope.row.id)">开始活动</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="7"
                                   v-if="scope.row.status==6"
                                   @click="changeStatus(7,scope.row.id)">活动结束</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="0"
                                   v-if="scope.row.status==1"
                                   @click="changeStatus(0,scope.row.id)">撤回</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="5"
                                   v-if="scope.row.status==4"
                                   @click="changeStatus(5,scope.row.id)">截止</el-button>
                        <el-button type="warning"
                                   size="small"
                                   v-model="activity_status"
                                   value="8"
                                   v-if="scope.row.status==7"
                                   @click="changeStatus(8,scope.row.id)">取消活动</el-button>
                    </template>
                </el-table-column>
                <div slot="empty">
                    没有数据
                </div>
            </el-table>
            <el-pagination @current-change="search"
                           :current-page="searchOption.currentPage"
                           :page-size="searchOption.pagesize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="dataTotal">
            </el-pagination>
        </el-card>

        <el-dialog title="报名信息"
                   show-close
                   :visible.sync="bmxxdialog">
            <el-table :data="user"
                      border
                      stripe
                      style="margin-top: 20px;margin-bottom: 20px;width:800px">
                <el-table-column type="index">
                </el-table-column>
                <el-table-column prop="organ"
                                 label="所属组织">
                </el-table-column>
                <el-table-column prop="last_name"
                                 label="真实姓名"
                                 width="90">
                </el-table-column>
                <el-table-column prop="sex"
                                 label="性别"
                                 width="50">
                </el-table-column>
                <el-table-column prop="myclass"
                                 label="班级"
                                 width="80">
                </el-table-column>
                <el-table-column prop="phone"
                                 label="联系电话"
                                 width="180">
                </el-table-column>
            </el-table>
            <span SLOT="footer"
                  class="dialog-footer">
                <el-button type="primary"
                           @click="bmxxdialog =false">确定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="活动信息"
                   show-close
                   :visible.sync="shdialog">
            <el-form style="margin-top: 2px"
                     ref="form"
                     :model="shlist"
                     label-width="80px">
                <el-form-item label="所属组织">
                    <el-col :span="8">
                        <el-select v-model="shlist.organ"
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
                    <el-col :span="8">
                        <el-select v-model="shlist.type_name"
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
                    <el-input v-model="shlist.title"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="datetime"
                                        placeholder="选择日期时间"
                                        v-model="shlist.activity_starttime"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="活动时长">
                    <el-input v-model="shlist.activity_time"></el-input>
                </el-form-item>
                <el-form-item label="活动地址">
                    <el-input v-model="shlist.address"></el-input>
                </el-form-item>
                <el-form-item label="招募人数">
                    <el-input v-model="shlist.people_count"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input v-model="shlist.link_pople"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="shlist.phone"></el-input>
                </el-form-item>
                <el-form-item label="结束报名时间"
                              label-width="150">
                    <el-col :span="11">
                        <el-date-picker v-model="shlist.registration_time"
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
                              v-model="shlist.activity_content"></el-input>
                </el-form-item>
                <el-form-item label="图片">
                    <el-col :span="4">
                        <el-upload class="upload-demo"
                                   drag
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或
                                <em>点击上传</em>
                            </div>
                        </el-upload>
                    </el-col>
                </el-form-item>
                <el-form-item label="审核状态">
                    <el-col :span="8">
                        <el-select v-model="shlist.check"
                                   placeholder="审核意见">
                            <el-option label="通过"
                                       value="1"></el-option>
                            <el-option label="不通过"
                                       value="0"></el-option>
                        </el-select>
                    </el-col>
                    <!--                审核不通过则需要填审核意见-->
                    <el-input type="textarea"
                              v-model="shlist.content"></el-input>
                </el-form-item>
            </el-form>
            <span SLOT="footer"
                  class="dialog-footer">
                <el-button type="primary"
                           @click="bmxxdialog =false">提交</el-button>
            </span>
        </el-dialog>
        <el-dialog title="审核意见"
                   :visible.sync="showupdialog">
            <el-input type="textarea"
                      :rows="6"
                      v-model="shlist.content">
            </el-input>
        </el-dialog>
    </div>
</template>

<script>
import utils from "@/public/utils"
import { defer } from 'q';
export default {
    name: "AdminActivity",
    data() {
        return {
            userData: utils.getSession('userData') || {},
            user: [
                {
                    username: '李志军',
                    sex: '男',
                    phone: '10086',
                    last_name: '10086',
                    organ: '10086',
                    myclass: '11111111',
                }
            ],
            shlist: [
                {
                    activity_pic: '',
                    organ: '',
                    registration_time: '',
                    activity_time: '',
                    link_phone: '',
                    activity_content: '',
                    link_pople: '',
                    people_count: '',
                    title: '',
                    activity_starttime: '',
                    type_name: '',
                    content: '',
                    check: '',
                }
            ],
            tableData: [],
            hotcount: '',
            status: '',
            activity_status: '',
            shdata: '',
            content: '活动内容不明确',
            bmxxdialog: false,
            shdialog: false,
            showupdialog: false,
            searchOption: {
                currentPage: 1,
                pagesize: 15,
                status: '0',
                type: 1,
                hotcount: 1
            },
            dataTotal: 0,
            status: {

            },
            loading: false
        }
    },
    created() {
        // t = this;
    },
    mounted() {
        this.search()
    },
    methods: {
        go(id) {
            this.$router.push({
                name: 'ActivityInfo',
                query: {
                    id
                }
            })
        },
        bmxx() {
            this.bmxxdialog = true;
        },
        changeStatus(status, id) {
            this.loading = true
            this.$axios.put('/api/activity/status/', {
                id,
                status: '' + status
            }).then(res => {
                this.loading = false
                if (res.data.message == 'ok') {
                    this.search()
                }
            }).catch(err => {
                this.loading = false
            })
        },
        del(id) {
            this.$axios.delete(`/api/activity/`, { id })
        },
        search() {
            this.loading = true
            this.$axios.get('/api/activity/', this.searchOption).then((res) => {
                this.loading = false
                this.tableData = res.data.results
                this.dataTotal = res.data.count
                console.log(this.tableData)
            }).catch(err => {
                this.loading = false
            })
        },
        changeHandle() {
            this.search()
        }

    },
    beforeDestroy() {

    },
    props: {},
    computed: {//计算属性

    },
    filters: {
        statusText(status) {
            switch (status) {
                case 0:
                    return '待审核'
                    break;
                case 1:
                    return '审核中'
                    break;
                case 2:
                    return '待发布'
                    break;
                case 3:
                    return '已发布'
                    break;
                case 4:
                    return '报名中'
                    break;
                case 5:
                    return '报名结束'
                    break;
                case 6:
                    return '活动中'
                    break;
                case 7:
                    return '活动结束'
                    break;
                case 8:
                    return '活动取消'
                    break;
                case 0:
                    return '待审核'
                    break;
                case 10:
                    return '审核不通过'
                    break;
                default:
                    return ""
                    break;
            }
        }
    }
}
</script>

<style lang="less">
.view-m-adminActivity {
  .headerClass {
    .cell {
      text-align: center;
    }
  }
  .rowClass {
    .cell {
      text-align: center;
    }
  }
  .headerDiv {
    margin-top: 20px;
    .el-button {
      width: 100%;
    }
  }
}
</style>

