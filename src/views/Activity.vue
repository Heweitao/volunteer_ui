<template>

    <div id="app">
        <el-row style="margin-top: 20px"
                :gutter="3">
            <!--            <el-col :span="5">-->
            <!--                <el-select v-model="type" placeholder="请选择活动类型">-->
            <!--                    <el-option label="便民服务" value="1"></el-option>-->
            <!--                    <el-option label="政策宣传" value="2"></el-option>-->
            <!--                    <el-option label="青少年服务" value="3"></el-option>-->
            <!--                    <el-option label="绿色环保" value="4"></el-option>-->
            <!--                    <el-option label="敬老助残" value="5"></el-option>-->
            <!--                    <el-option label="其它服务" value="6"></el-option>-->
            <!--                </el-select>-->
            <!--            </el-col>-->
            <el-col :span="4">
                <el-date-picker v-model="searchOption.starttime"
                                align="right"
                                type="date"
                                placeholder="开始时间"
                                :picker-options="pickerOptions">
                </el-date-picker>
            </el-col>
            <el-col :span="1"
                    style="margin-top: 10px">
                <span>至</span>
            </el-col>
            <el-col :span="4">
                <el-date-picker v-model="searchOption.stoptime"
                                align="right"
                                type="date"
                                placeholder="结束时间"
                                :picker-options="pickerOptions">
                </el-date-picker>
            </el-col>
            <el-col :span="1"
                    style="margin-top: 10px">
                <span>名称:</span>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="活动名称/组织名称"
                          v-model="key"></el-input>
            </el-col>
            <el-col :span="1">
                <el-button type="primary"
                           @click="search">搜索</el-button>
            </el-col>

        </el-row>

        <el-table :data="tableData"
                  border
                  stripe
                  style="margin-top: 20px;margin-bottom: 20px">
            <!--     <el-table-column type="index">
                 </el-table-column>-->
            <el-table-column prop="id"
                             label="编号"
                             min-width="30">
            </el-table-column>
            <el-table-column prop="activity_pic"
                             label="图片"
                             min-width="110">
                <template slot-scope="scope">
                    <el-image style="width: 200px;cursor: pointer"
                              :src="scope.row.activity_pic"
                              lazy
                              @click="go(scope.row)"></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="title"
                             label="活动名称">
            </el-table-column>
            <el-table-column prop="type"
                             label="活动类型">
            </el-table-column>
            <el-table-column prop="organ.name"
                             label="所属组织">
            </el-table-column>
            <el-table-column prop="people_count"
                             label="招募人数">
            </el-table-column>
            <el-table-column prop="people"
                             label="已报名人数">
            </el-table-column>
            <el-table-column prop="activity_starttime"
                             label="活动时间">
            </el-table-column>
            <el-table-column prop="state"
                             label="操作"
                             min-width="100">
                <template slot-scope="scope">
                    <el-button type="primary"
                               size="small"
                               @click="go(scope.row)">我要参加</el-button>
                    <!--                    <el-button type="success" size="small" >分享</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange"
                       :current-page="searchOption.page"
                       :page-size="searchOption.pagesize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="dataTotal">
        </el-pagination>

    </div>
</template>

<script>
import moment from 'moment'
moment.locale('zh-cn');
export default {
    name: "Activity",
    data() {
        return {
            tableData:[],
            currentPage: 1,
            key: '',
            starttime: '',
            stoptime: '',
            pickerOptions: {

                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            dataTotal:0,
            searchOption: {
                page: 1,
                pagesize: 15,
                status: 4,
                starttime:'',
                stoptime:''
            }
        }
    },
    created() {
    },
    mounted() {
        this.search()
    },
    methods: {
        handleCurrentChange() {
            this.search();
        },
        go(b) {
            this.$router.push({
                path: '/ActivityInfo',
                query: {
                    id: b.id,
                }
            })
        },
        search() {
            this.$axios.get('/api/stuactivity/', this.searchOption)
                .then((res) => {
                    console.log(res.data.results.count)
                    this.tableData = res.data.results.data
                    this.dataTotal = res.data.results.count
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
