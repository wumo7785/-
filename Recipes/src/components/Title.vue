<template>
    <nav>
        <ul>
            <li>
                <a href="http://localhost:8080">返回首页</a>
            </li>
            <li>
                <a href=" http://localhost:8080/About">关于我们</a>
            </li>
        </ul>
    </nav> 
</template>

<script>
export default{
    name:"Title"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  text-align: right;
  margin:0;
}
li{
  display: inline-block;
  margin :0 20px;
  background: rgb(240, 227, 132);
}
nav{
    padding: 1% 0;
    text-align: right;
    height: 5%;
}
.router-link-active{
    background:rgba(132, 191, 240, 0.8);
    color:#444;
}
</style>
