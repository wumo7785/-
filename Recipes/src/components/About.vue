<template>
<div class="parent">
  <div class="about">
    <h1 style="color:black;">关于</h1>
    <br />
    <ul>
      <li>
        软件名称：<font color="red">菜谱大全</font>
      </li>
      <li>
        英文名称：Recipes
      </li>
      <br />
      <li>
        作者团队：
        <br />
          郭颐：前端
        <br />
          韩丽萍：后端
        <br />
          冯文宣：接口
        <br />
      </li>
      <br />
      <li>
        制作日期：2019/7
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  width:70%;
  height: 100%;
  vertical-align:top;
  text-decoration:none;
  color: rgb(0, 0, 0);
  padding: 5%;
  margin: 5% 0;
  box-sizing: border-box;
  background: #bbd9f1;
  display: inline-block;
  
}
.parent{
  text-align: center;

}
ul li{
  list-style: none;
}
</style>
