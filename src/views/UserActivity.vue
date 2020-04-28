<template>

    <div id="app">

        <el-card shadow="never" style="margin-top: 20px;">
            <el-table :data="data" border stripe style="margin-top: 20px;margin-bottom: 20px">
                <el-table-column prop="type" label="活动类型" width="80">
                </el-table-column>
                <el-table-column prop="organ" label="所属组织" width="250">
                </el-table-column>
                <el-table-column prop="title" label="活动名称">
                </el-table-column>
                <el-table-column prop="activity_starttime" label="活动时间" width="130">
                </el-table-column>
                <el-table-column prop="people_count" label="招募人数">
                </el-table-column>
                <el-table-column prop="people" label="报名人数">
                </el-table-column>
                <el-table-column prop="activity_time" label="时长">
                </el-table-column>
                <el-table-column prop="state" label="状态" width="80">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status==='已报名'" type="danger">{{ scope.row.status }}</el-tag>
                        <el-tag v-if="scope.row.status==='时长已录入'" type="success">{{ scope.row.status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="state" label="操作" min-width="100">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.status==='已报名'" type="warning" size="medium" @click="dj(scope.row)">取消报名</el-button>
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
    </div>
</template>

<script>var t;
export default {
    name: "UserActivity",
    data() {
        return {
            data: [
                {
                    type: '敬老助残',
                    organ: '11111',
                    title: 'lalalal',
                    activity_starttime: '2020年1月1日',
                    people_count: '10',
                    people: '7',
                    activity_time: '666',
                    status: '已报名',
                }
            ],
            currentPage: 1,
        }
    },
    created() {

        t = this;
        //  this.userid = JSON.parse(window.localStorage.getItem("user")).id;
        this.init();
    },
    mounted() {
            this.$axios.get('/api/stuactivity/sign/',
            {
                page:1,
                pagesize:2
            })
    },
    methods: {
        handleCurrentChange(p) {
            t.currentPage = p;
            this.init();
        },

        dj(b) {
            this.$axios.delete(`/api/stuactivity/sign/${b.id}`)
                .then()
        },

    },
}
</script>

<style scoped>

</style>
