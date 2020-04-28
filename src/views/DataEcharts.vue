<template>

    <div id="app">

        <el-tabs v-model="activeName" style="height: 100%" type="card">
            <el-tab-pane label="文本展示" name="first">
                <el-card style="margin-left: 200px;margin-right: 200px;padding: 30px">
                    <div style="margin-top: 50px">
                        <el-divider content-position="center"><span
                                style="font-size: 22px;font-weight: bold">数据统计</span>
                        </el-divider>
                    </div>

                    <div style="margin-top: 50px">
                        <span>注册人数:{{data.regpeople}}</span>
                        <span style="margin-left: 70px">正式志愿者:{{data.activitypeople}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px">
                        <span>男:{{data.activityboy}}</span>
                        <span style="margin-left: 70px">女:{{data.activitygirl}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px">
                        <span>党员人数:{{data.communistparty}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px">
                        <span>团员人数:{{data.younger}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px">
                        <span>群众人数:{{data.masses}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px">
                        <span>其他党派:{{data.elseparty}}</span>
                    </div>
                    <div style="margin-top: 20px">
                        <el-divider></el-divider>
                    </div>
                    <div style="margin-top: 20px" >
                        <span>50小时以上的志愿者:{{data.gooduser_count}}</span>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="图表展示" name="second"  style="height: 100%">
                <div id="echart" style="height: 600px"></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "DataEcharts",
        data() {
            return {
                data: {
                    regpeople: '',
                    activitypeople:'',
                    activityboy:'',
                    activitygirl:'',
                    communistparty:'',
                    younger:'',
                    masses:'',
                    elseparty:'',
                    gooduser_count:'',

                },
                activeName: 'second',
                q1:666,
            }
        },
        created() {

        },
        mounted() {
            let myChart = this.echarts.init(document.getElementById('echart'));
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
                        '党员人数',
                        '团员人数',
                        '群众人数',
                        '其他党派',
                        '50小时以上的志愿者'
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130, 77, 6],
                    type: 'bar',
                    barWidth: '40%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ["#3398db", "#434348", "#90ed7d", "#f7a35c",  "#61a0a8", "#91c7ae", "#2f4554", "#ED9751", "#DE72F7", "#1C93F7"];
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

        },
        methods: {},
        beforeDestroy() {

        },
        props: {},
        computed: {//计算属性

        },
    }
</script>

<style scoped>

</style>
