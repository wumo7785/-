<template>

  <div class="single"> 
   
   <div v-for="item in item " :key="item.title" class="parent">
    <h2>{{item.title}}</h2> 
    <div v-for="mystep in item.steps" :key="mystep.step" class="child"> 
     <h2>{{mystep.step}}</h2> 
     
     <br />
     <br />
     <img v-bind:src="mystep.img" /> 
     
     <br /> 
    </div> 
   </div> 
  </div>

</template>

<script>
export default {
  name: "SinglePage",
  data () {
    return {
      id:this.$route.params.id,
      item:{}
    }
  },
  created(){
         this.$http.jsonp('http://apis.juhe.cn/cook/queryid?key=c0a4d875f3dbfeb96c6db4faf6d318b1&id=',
        {
          emulateJSON:true,
          params:{
            "id":this.$route.params.id
          }
        },
        
        )
        .then(function(data){
           this.item=data.body.result.data;
           console.log(this.item);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#single{
  max-width: 960px;
  margin:0 auto;
  padding:20px;
  background: #eee;
  border:1px dotted #aaa;
  
}
img{
  width: 50%;
  height: auto;
}
.parent{
  text-align: center;

}
.child{
   width:70%;
  height: 100%;
  vertical-align:top;
  text-decoration:none;
  color: rgb(0, 0, 0);
  padding: 2%;
  margin: 2% 0;
  box-sizing: border-box;
  background: #bbd9f1;
  display: inline-block;
  
}
</style>
