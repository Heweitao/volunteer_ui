<template>

    <div id="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/AdminIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <div ref="chart" style="height: 600px"></div>

        <h1  >志愿者排序 </h1>
        <el-card shadow="never" style="margin-right:150px;width: auto;margin-left: 150px;margin-bottom: 20px;padding: 20px">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%"
                    isshow = false>
                <el-table-column
                        type="index"
                        label="排名"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="组织名称"
                       >
                </el-table-column>
                <el-table-column
                        prop="activity_people_count"
                        label="志愿者人数">
                </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "AdminIndex",
        data() {
            return {
                data: [

                ],
                tableData: [{
                    name: '智能制造',
                    activity_people_count: '666'
                }, {
                    name: '科技学院',
                    activity_people_count: '100'
                }],
                a_data:[],
            }
        },
        created() {
            let ss = '管理员';
            if (ss==="管理员"){
                this.isshow = false;
            }
            // {
            //     this.loadInfo();
            // }
        },
        mounted() {
            this.getdata()
            this.$axios.get('/api/admin/organ/',{
                order:0,
                page:1,
                pagesize:5,
                reverse:0
            })
        },
        methods: {
            getdata()
            {
                this.$axios.get('/api/analyse/')
            .then(
                (res)=>{
                    for(let index in res.data.results)
                   {
                    this.a_data.push(res.data.results[index])
                    this.draw()
                   }
                }
                );},
            draw() {
            let myChart = this.echarts.init(this.$refs.chart);
            let option = {
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        interval: 0,//横轴信息全部显示
                        rotate: 0,//-15度角倾斜显示
                    },
                    data: [
                        '注册人数',
                        '正式志愿者',
                        '男',
                        '女',
                        '已完成活动',
                        '党员人数',
                        '团员人数',
                        '群众人数',
                        '有服务时长的志愿者',
                        '50小时以上的志愿者'
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.a_data,
                    type: 'bar',
                    barWidth: '40%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ["#3398db", "#434348", "#90ed7d", "#f7a35c", "#61a0a8", "#61a0a8", "#91c7ae", "#2f4554", "#ED9751", "#DE72F7", "#1C93F7"];
                                return colorList[params.dataIndex]
                            }
                        }
                    }, label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                },]
            };
            myChart.setOption(option);
            }
        // beforeDestroy() {

        // },
// 
        }}
</script>

<style scoped>

</style>
