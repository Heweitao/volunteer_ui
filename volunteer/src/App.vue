<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>

    export default {
        name: 'app',
    }
</script>

<style>
    html, body, #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #737373;
        cursor: pointer;
    }

    span:hover, a:hover {
        color: #409EFF;
        cursor: pointer;
    }
    .el-card{
        margin-top: 20px;
    }
</style>
