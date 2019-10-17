<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;"  v-wechat-title="$route.meta.title">
      <!-- 报名未开始页 | 报名已结束页 | 活动不存在 | 错误页 .....等 -->
        活动不存在
    </div>
</template>

<script>
    export default {
      name: "Error",
      components:{

      },
      data(){
        return {
            banner:''
        }
      },
      beforeCreate(){
      },
      created(){
        
      },
      mounted(){

      },
      watch:{
      },
      computed:{

      },
      methods:{
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl";
  *{
    margin :0;
    padding :0;
  }
  .HomePage
    min-height:100vh
</style>
