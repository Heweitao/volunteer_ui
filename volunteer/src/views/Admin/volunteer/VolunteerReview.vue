<template>

    <div class="view-m-volunteerReview">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card shadow="never"
                 style="margin-top: 20px;">
            <el-table :data="tableData"
                      border
                      stripe
                      style="margin-top: 20px;margin-bottom: 20px;width: 1200px"
                      header-row-class-name="headClass"
                      row-class-name="rowClass"
                      v-loading="loading">
                <el-table-column type="index">
                </el-table-column>
                <el-table-column prop="username"
                                 label="账号"
                                 width="150">
                </el-table-column>
                <el-table-column prop="last_name"
                                 width="100"
                                 label="真实姓名">
                </el-table-column>
                <el-table-column prop="sex"
                                 label="性别"
                                 width="60">
                    <template slot-scope="scope">
                        {{scope.row.sex?'男':'女'}}
                    </template>
                </el-table-column>
                <el-table-column prop="phone"
                                 label="联系电话">
                </el-table-column>
                <el-table-column prop="date_joined"
                                 label="注册时间"
                                 width="190">
                    <template slot-scope="scope">
                        {{new Date(scope.row.date_joined).Format('yyyy-MM-dd HH:mm:ss')}}
                    </template>
                </el-table-column>
                <el-table-column prop="check"
                                 label="状态"
                                 width="80">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.check==='待审核'"
                                type="danger"
                                value="0">{{ scope.row.check }}</el-tag>
                        <el-tag v-if="scope.row.check==='正常'"
                                type="success"
                                value="1">{{ scope.row.check }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="state"
                                 label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary"
                                   @click="showDialog(scope.row)">审核</el-button>
                    </template>

                </el-table-column>
            </el-table>
            <el-pagination @current-change="search"
                           :current-page="searchOption.page"
                           :page-size="searchOption.pagesize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="dataTotal">
            </el-pagination>
        </el-card>

        <el-dialog title="志愿者信息"
                   show-close
                   :visible.sync="dialog"
                   width="460px">
            <el-form :model="approvalRow"
                     label-width="100px">
                <el-form-item label="所属组织:">
                    <!-- <el-input v-model="approvalRow.organ"
                              disabled>
                    </el-input> -->
                    {{approvalRow.organ}}
                </el-form-item>
                <el-form-item label="真实姓名:">
                    <!-- <el-input v-model="approvalRow.last_name"
                              disabled></el-input> -->
                    {{approvalRow.last_name}}
                </el-form-item>
                <el-form-item label="性别:">
                    <div style="text-align: start;margin-left: 10px">
                        {{approvalRow.sex?"男":"女"}}
                    </div>
                </el-form-item>
                <el-form-item label="账号:">
                    {{approvalRow.username}}
                </el-form-item>
                <el-form-item label="政治面貌:">
                    {{approvalRow.political}}
                </el-form-item>
                <el-form-item label="班级:">
                    {{approvalRow.myclass}}
                </el-form-item>
                <el-form-item label="详细地址:">
                    {{approvalRow.location}}
                </el-form-item>
                <el-form-item label="联系电话:">
                    {{approvalRow.phone}}
                </el-form-item>
            </el-form>
            <span SLOT="footer"
                  class="dialog-footer">
                <el-button type="primary"
                           @click="approval">通过审核</el-button>
                <el-button type="danger"
                           @click="approval">不通过</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>var t;
import organ from "@/public/organOption"
import utils from "@/public/utils"
export default {
    name: "VolunteerReview",
    data() {
        return {
            dialog: false,
            tableData: [],
            searchOption: {
                order: 1,
                page: 1,
                pagesize: 15,
                check: 0
            },
            dataTotal: 0,
            approvalRow: {},
            loading:false
        }
    },
    mounted() {
        this.search();
    },
    methods: {
        search() {
            this.loading = true
            this.$axios.get('/api/admin/user/', this.searchOption).then(res => {
                this.tableData = res.data.results.data
                this.dataTotal = res.data.count
                this.loading = false
            }).catch(err=>{
                this.loading = false
            })
        },
        del(id) {
            let _this = this
            this.$confirm(`通过审核${this.approvalRow.last_name}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info'
            }).then(() => {
                _this.$axios.put("/api/admin/user/", {
                    id
                }).then(function (res) {
                    _this.$message.success("审核成功!")
                    this.this.approvalRow = {}
                    this.this.dialog = false
                    this.search()
                }).catch(function (error) {
                });
            }).catch(() => {
                this.this.approvalRow = {}
                _this.$message.success("取消操作！")
            });
        },
        approval() {
            this.del(this.approvalRow.id)
        },
        showDialog(row) {
            this.approvalRow = row
            this.dialog = true
        }
    },
    computed: {//计算属性
        organOption() {
            return organ
        }
    },
}
</script>

<style lang="less">
.view-m-volunteerReview {
  .headClass,
  .rowClass {
    .cell {
      text-align: center;
    }
  }
  .el-form {
    .el-form-item__content {
      text-align: left;
    }
  }
}
</style>

