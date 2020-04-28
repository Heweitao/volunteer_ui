<template>
    <div class="about">
        <el-card style="padding: 100px;;margin: 100px" shadow="never">

            <el-divider content-position="center"><span style="font-size: 33px">义工网</span></el-divider>
            <span><br/> <br/>

      江门市义工联合会于2006年11月成立，并于2016年2月份更名为江门市五邑义工联合会（简称市义工联），

      是由志愿、无偿为社会提供义工服务的各界人士组成并经市民政部门登记成立的非营利性社会团体，

      由市文明委领导，在市文明办、团市委指导协调下开展工作，办事机构挂靠团市委

      。2012年12月市编委批复同意成立江门市志愿服务工作指导中心（公益一类事业单位），

      与市义工联秘书处合署办公。截至2019年1月，市义工联共有注册义工（志愿者）37万多人。

      一级志愿者分会14个，志愿者服务总队7支，基层志愿服务队3900多支。自成立以来，

      累计超过268多万人次的义工（志愿者）在扶贫开发、社会救助、社区建设、环境保护、大型活动、医疗卫生、残障康复、青少年教育等领域开展服务活动17万多场次，

      服务总时长超过1188多万小时。市义工联先后被中国社工协会志愿者委员会评为“全国优秀志愿者组织”、

      被广东省发展志愿服务事业指导委员会授予“广东省志愿服务先进集体”荣誉称号，2012年荣获广东志愿服务最高奖——首届南粤志愿服务“红棉奖”。

      十年以来，市义工联注重打造培育服务项目品牌，

      精心打造出了“万名义工献爱心”进社区活动、12355青少年心理和法律咨询服务、“护苗行动”、“邑”家人、“暖家行动”、志愿服务“e”站等品牌项目。

      在市义工联品牌项目的带动下，各一级分会、服务总队大力整合社会资源，拓展服务领域，打造出50多个常态化开展的志愿服务品牌活动，

      推进我市志愿服务专业化发展。

     </span><br/> <br/><br/> <br/>
            <el-image v-for="(item ,key) in banner" :key="key" :src="item"/>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                banner: [
                    'http://jmva.jiangmen.cn/images/p1_1.png',
                    'http://jmva.jiangmen.cn/images/p4_1.png',
                ],
            }
        },
    }
</script>

<style slot-scoped>
    span{
        cursor: default;
    }
    span:hover{
        color: #4d4d4d;
    }
</style>
