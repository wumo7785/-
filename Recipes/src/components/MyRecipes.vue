<template>
    <div id="show">
        <img src="static/title.png">
        <link type="text/css" rel="stylesheet" href="static/img_show/style.css">
       
        <br />
        <section class="pc-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-center none-effect">
                        <a href="#">
                            <img src="static/img/banner001.jpg">
                        </a>
                        <div class="layer-mask"></div>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="static/img/banner002.jpg">
                        </a>
                        <div class="layer-mask"></div>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="static/img/banner003.jpg">
                        </a>
                        <div class="layer-mask"></div>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="static/img/banner004.jpg">
                        </a>
                        <div class="layer-mask"></div>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="static/img/banner005.jpg">
                        </a>
                        <div class="layer-mask"></div>
                    </div>
                </div>
                <div class="button">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </section>
        <hr />
        <!--图标库-->
        <link rel="stylesheet" href="static/all.css" />
        <!--主要样式-->
        <link rel="stylesheet" href="static/style.css" />
         <form>
          <div class="input-group">
           <input type="text" id="search" placeholder="Search... " v-model="search" autocomplete="false" />
           <label for="search"><i class="fas fa-search"></i></label>
          </div>
          <div class="suggestion-list hidden">
          </div>
        </form>
        <div v-for="item in filteredItems" :key="item.title" class="single">
            <div class="post" align="center">
                <div class="image" align="center">
                <router-link v-bind:to="'/SinglePage/'+item.id"><img v-bind:src="item.albums" width="100%" height="auto">
                </router-link>
                </div>
            <div class=infopost>
                <div>
                 <router-link v-bind:to="'/SinglePage/'+item.id"><h3 v-titlecolor>{{item.title | to-uppercase}}</h3>
                 </router-link>
                 <p>类别：{{item.tags | cut1}}</p>
                </div>
            </div>
                 <div class="description">
                     <article>
                    <p>配料： {{item.burden}}</p>
                    <p>简介： {{item.imtro | cut2}}  </p>
                     </article>
                </div>
                     <div class="clear"></div>
            </div>
        </div>
     </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'show',
     data(){
        return{
            items:[],
            moreitems:[],
            search:""
        }
    },
    created(){
       this.$http.jsonp('http://apis.juhe.cn/cook/index?key=c0a4d875f3dbfeb96c6db4faf6d318b1&cid=1',
        {
          emulateJSON:true,
          params:{
              "pn":0,
              "rn":30,
          }
        }
        )
        .then(function(data){
            this.items=data.body.result.data.slice(0,30);
            this.moreitems=data.body.result.data;
            console.log(this.items);
        })
    },
    computed:{
        filteredItems:function(){
            return this.moreitems.filter((moreitem)=>{
                return moreitem.title.match(this.search)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#show{
        max-width: 70%;
        margin:0 auto;
        vertical-align:top;
        text-decoration:none;
}

.single{
    padding: 2%;
    margin: 2% 0;
    box-sizing: border-box;
    background: #bbd9f1;
} 
.post{
    border-bottom: 1% solid #e5e5e5;
    border-bottom-width: 1%;
    border-bottom-style: solid;
    border-bottom-color: rgb(229,229,229);
    margin-bottom: 3%;
    border: 2% solid white;
} 
.image{
    width: 30%;
    height: auto;
    align-content: center;

    padding: 1%;
    padding-top: 1%;
    padding-right: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
    border: 1% solid #e5e5e5;
    border-top-color: rgb(229, 229, 229);
    border-top-style: solid;
    border-top-width: 1%;
    border-right-color: rgb(229, 229, 229);
    border-right-style: solid;
    border-right-width: 1%; 
    border-bottom-color: rgb(229, 229, 229);
    border-bottom-style: solid;
    border-bottom-width: 1%;
    border-left-color: rgb(229, 229, 229);
    border-left-style: solid;
    border-left-width: 1%;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
} 
.post.infopost{
    width:50%;
    margin-top:0%
}
.post.description {
    margin-left: 0px;
    padding-left: 0px;
    border-left: 0px solid #e5e5e5;
    width: 50%;
} 
.clear {
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
}
hr{
    opacity: 0;
}
</style>
