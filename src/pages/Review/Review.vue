<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;" v-wechat-title="$route.meta.title">
       <!-- 审核 -->
      <div class="con-top">
         <Banner></Banner>
      </div>

      <div class="con-bottom">
        <img src="../../assets/images/personal-2.png" alt="" class="rsp-t">
        <div class="rsp-0 rsp-000">
          <img src="../../assets/images/RSP-000.png" class="RSP-0"/>
        </div>
        <div class="circle">
          <img src="../../assets/images/circle.png" class="circleimg"/>
        </div>
        <div class="right">
          <img src="../../assets/images/right.png" class="rightimg"/>
        </div>
        <div class="rutern">提交成功</div>
        <div class="audit">您的签到员正在审核中，我们将尽快审核！</div>
      </div>
    </div>
</template>

<script>
    import banner from '../../components/Banner/Banner'
    export default {
      components:{
        Banner:banner
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
    height :1193px;
    min-height:100vh;
    min-width:100%;
  .con-top{
    height: 320px;
    background-image: url(../../assets/images/personal-1.png);
    position: relative;
  }
  .con-bottom{
    height: 974px;
    width: 100%;
    margin-top: 71px;
    position: relative;
  }
  .logo{
    width: 86px;
    height: 25px;
    position: absolute;
    left: 34px;
    top: 25px;
  }
  .logoimg,.healthimg,.til-1-img{
    display: block;
  }
  .health{
    height: 62px;
    width: 99px;
    position: absolute;
    left: 110px;
    top: 68px;
  }
  .til-1{
    height: 176px;
    width: 360px;
    position: absolute;
    left: 182px;
    top: 72px;
  }

  .rsp-t{
    width :100%;
    position :absolute;
    left :0;
    top:0;
    z-index :-3;
  }
  .rsp-0{
    width: 569px;
    height: 300px;
    border: 2px solid  #FFFFFF;
    border-radius: 10px;
    position: absolute;
    left: 90px;
    top: 182px;
  }
  .circle{
    width: 122px;
    height: 122px;
    position: absolute;
    left: 160px;
    top: 223px;
  }
  .right{
    width: 72px;
    height: 64px;
    position: absolute;
    left: 185px;
    top: 251px;
  }
  .rutern{
    font-size: 48px;
    color: #FFFFFF;
    position: absolute;
    left: 335px;
    top: 256px;
  }
  .audit{
    font-size: 24px;
    color: #FFFFFF;
    position: absolute;
    left: 153px;
    top: 378px;
  }

</style>
