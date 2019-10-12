<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;">

      <!-- 报名未开始页 | 报名已结束页 | 活动不存在 | 错误页 .....等 -->
      <div class="bj-1"></div>
      <div class="bj-3"></div>
      <div class="logo">
        <img src="../../assets/images/Logo.png"/>
      </div>
      <div class="ai">
        <img src="../../assets/images/AI-1.jpg" class="ai-img"/>
      </div>
      <div class="ai-size">活动信息</div>
      <!--日期-->
      <div class="time">
        <img src="../../assets/images/ai-border.jpg" />
      </div>
      <div class="time-2">
        <img src="../../assets/images/ai-bjcol.jpg" />
      </div>
      <div class="time-img">
        <img src="../../assets/images/time-img.png"/>
      </div>
      <div class="time-size">活动日期：</div>
      <div class="time-body">2018年7月5日</div>
      
      <!--地址-->
      <div class="time site">
        <img src="../../assets/images/ai-border.jpg" />
      </div>
      <div class="time-2 site-2">
        <img src="../../assets/images/ai-bjcol.jpg" />
      </div>
      <div class="time-img site-img">
        <img src="../../assets/images/site-img.png"/>
      </div>
      <div class="time-size site-size">活动地址：</div>
      <div class="time-body site-body">北京市海淀区</div>
      
      
      <!--日程-->
      <div class="schedule">
        <div class="schedule-con">
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">签到</div>
          </div>
          <div class="column"></div>
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">xxxx</div>
          </div>
          <div class="column"></div>
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">解决方案</div>
          </div>
          <div class="column"></div>
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">茶歇</div>
          </div>
          <div class="column"></div>
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">合作伙伴案例分享</div>
          </div>
          <div class="column"></div>
          <div class="schedule-con-num" id="schedule-con">
            <div class="schedule-time">13:30-14:00</div>
            <div class="dot"></div>
            <div class="schedule-con-zi">技术中心参观</div>
          </div>
        </div>
      </div>
      <div class="time-2 schedule-2">
        <img src="../../assets/images/ai-bjcol.jpg" />
      </div>
      <div class="time-img schedule-img">
        <img src="../../assets/images/site-img.png"/>
      </div>
      <div class="time-size schedule-size">活动地址：</div>
      
      <!--按钮-->
      <div class="btn" @click="tohome">返回活动首页</div>
    </div>
</template>

<script>
    export default {
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
        tohome(){
        //  console.log(this.$store.state.activityMessage.eventId)
        //  console.log(this.$store.state.activityMessage.campaignChannelId)
         var eventId = this.$store.state.activityMessage.eventId;
         var campaignChannelId = this.$store.state.activityMessage.campaignChannelId;
         this.$router.push('/home?'+ 'eventId='+eventId+'&campaignChannelId='+campaignChannelId)
       }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl";
  *{
    margin :0;
    padding :0;
  }
  .HomePage{
    height :1380px;
    min-height:100vh;
    min-width:100%;
    background-image: url(../../assets/images/bj-b.png);
    position :relative;
  }
    
  

  .bj-1,.bj-2,.bj-3,.bj-4{
    width: 750px;
    height: 1380px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .bj-1{
    background-image: url(../../assets/images/bj-b.png);
  }
  .bj-3{
    background-image: url(../../assets/images/d.png);
  }
  .bj-4{
    background-image: url(../../assets/images/gene.png);
  }
  .logo{
    width: 50px;
    height: 169px;
    position: absolute;
    left: 60px;
    top: 57px;
  }
  .ai{
    width: 256px;
    height: 64px;
    position: absolute;
    left: 55px;
    top: 185px;
  }
  .ai-size{
    font-size: 32px;
    font-weight: bold;
    color: #093073;
    position: absolute;
    left: 137px;
    top: 200px;
  }
  .time{
    width: 627px;
    height: 52px;
    position: absolute;
    left: 68px;
    top: 328px;
  }
  .time-2{
    width: 207px;
    height: 52px;
    position: absolute;
    left: 62px;
    top: 319px;
  }
  .time-img{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 72px;
    top: 326px;
  }
  .time-size{
    font-size: 26px;
    color: #FFFFFF;
    position: absolute;
    left: 108px;
    top: 333px;
  }
  .time-body{
    font-size: 26px;
    color: #FFFFFF;
    position: absolute;
    left: 277px;
    top: 340px;
  }
  .site{
    top: 417px;
  }
  .site-2{
    top: 409px;
  }
  .site-img{
    top: 418px;
  }
  .site-size{
    top: 422px;
  }
  .site-body{
    top: 430px;
  }
  .schedule{
    width: 633px;
    height: 582px;
    border: 2px solid #269aff;
    box-sizing: border-box;
    position: absolute;
    left: 68px;
    top: 513px;
  }
  .schedule-2{
    top: 502px;
  }
  .schedule-img{
    top:510px;
  }
  .schedule-size{
    top: 514px;
  }
  .schedule-con{
    margin-left: 40px;
    margin-top: 100px;
  }
  .schedule-con-num{
    display: flex;
    margin-top: -6px;
  }
  .schedule-time{
    width: 181px;
    height: 22px;
    font-size: 24px;
    color: #FFFFFF;
  }
  .dot{
    width: 17px;
    height: 17px;
    background-color: #FFFFFF;
    border-radius: 50%;
    margin-top: 6px;
  }
  .schedule-con-zi{
    width: 320px;
    height: 22px;
    font-size: 24px;
    color: #FFFFFF;
    margin-left: 40px;
  }
  .column{
    width: 4px;
    height: 55px;
    background-color: #FFFFFF;
    margin-left: 187px;
  }
  .btn{
    width: 420px;
    height: 88px;
    border: 2px solid #FFFFFF;
    border-radius: 44px;
    background-color: #2a9cff;
    font-size: 40px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
    position: absolute;
    left: 169px;
    top: 1170px;
  }
</style>
