<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;" v-wechat-title="$route.meta.title">
       <!-- 报名成功页 -->
      <div class="con-top">
         <Banner></Banner>
      </div>

      <div class="con-bottom">
        <img src="../../assets/images/personal-2.png" alt="" class="rsp-t">
        <div class="rsp-0">
          <img src="../../assets/images/RSP-0.png" class="RSP-0"/>
          <div class="rsp-1">
            <img src="../../assets/images/RSP-1.png" class="RSP-1"/>
          </div>
          <div class="rsp-2">
            <img src="../../assets/images/RSP-2.png" class="RSP-2"/>
          </div>
          <div class="rsp-3">
            <img src="../../assets/images/RSP-2.png" class="RSP-2"/>
          </div>
          <div class="rsp-4">
            <img src="../../assets/images/RSP-3.png" class="RSP-3"/>
          </div>
          <div class="rsp-5">
            <img src="../../assets/images/RSP-4.png" class="RSP-4"/>
          </div>
          <div class="succeed">报名成功</div>
          <div class="string"></div>
          <div class="send">恭喜你，报名成功！ <br />稍后会以短信形式发送正式邀请函</div>
          <router-link to="/"><div class="return">返回活动首页</div></router-link>
        </div>
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
    height: 442px;
    border: 2px solid  #FFFFFF;
    border-radius: 10px;
    position: absolute;
    left: 90px;
    top: 200px;
  }
  .rsp-1{
    width: 174px;
    height: 174px;
    position: absolute;
    left: 198px;
    top: -90px;
    z-index: 3;
  }
  .rsp-2{
    height: 8px;
    width: 80px;
    position: absolute;
    left: 245px;
    top: -40px;
    z-index: 3;
  }
  .rsp-3{
    height: 8px;
    width: 80px;
    position: absolute;
    left: 245px;
    top: -17px;
    z-index: 3;
  }
  .rsp-4{
    height: 8px;
    width: 50px;
    position: absolute;
    left: 245px;
    top: 7px;
    z-index: 3;
  }
  .rsp-5{
    height: 36px;
    width: 42px;
    position: absolute;
    left: 281px;
    top: 33px;
    z-index: 3;
  }
  .succeed{
    font-size: 48px;
    color: #FFFFFF;
    position: absolute;
    left: 190px;
    top: 143px;
  }
  .string{
    width: 334px;
    height: 2px;
    background-color: rgb(88,150,195);
    position: absolute;
    left: 123px;
    top: 220px;
  }
  .send{
    width: 360px;
    height: 64px;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    left: 116px;
    top: 238px;
    line-height :31px;
  }
  .return{
    width: 329px;
    height: 69px;
    border: 2px solid #FFFFFF;
    border-radius: 34.5px;
    background-color: rgb(38,154,255);
    color: #FFFFFF;
    font-size: 26.19px;
    text-align: center;
    line-height: 65px;
    position: absolute;
    left: 129px;
    top: 333px;
  }
</style>
