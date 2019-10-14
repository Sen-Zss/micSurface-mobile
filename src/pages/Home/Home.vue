<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;">
      <img src="../../assets/images/bj.jpg" alt="" class="img-bj">
      <img src="../../assets/images/logo.png" alt="" class="logo">
      <div class="title">{{name}}<br>{{name1}}</div>
      <div class="time">{{time}}</div>
      <div class="apply" @click="routerL">我要报名</div>
      <div class="schedule" @click="routerLt">大会介绍及日程</div>
    </div>
</template>

<script>
import {receive_campaignChannelId} from 'vuex'
import {getActivityInfo} from '../../api/index'
    export default {
      name: "Home",
      components:{

      },
      data(){
        return {
            banner:'',
            name:'',
            name1:'',
            time:'',
        }
      },
      beforeCreate(){
        var eventId = this.$store.state.activityMessage.eventId;
        getActivityInfo({id:eventId}).then(res=>{
          this.name=res.Name
          this.name1=res.Name1
          this.time=res.StartTime.slice(0,10)
        })
        
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
       routerL(){
         var eventId = this.$store.state.activityMessage.eventId;
         var campaignChannelId = this.$store.state.activityMessage.campaignChannelId;
         this.$router.push('/register?'+ 'eventId='+eventId+'&campaignChannelId='+campaignChannelId)
       },
       routerLt(){
         var eventId = this.$store.state.activityMessage.eventId;
         var campaignChannelId = this.$store.state.activityMessage.campaignChannelId;
         this.$router.push('/redirect?'+ 'eventId='+eventId+'&campaignChannelId='+campaignChannelId)
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

  .HomePage
    min-height:100vh
  .img-bj{
    width :100%;
    // height :100%; 
    min-height:1380px;
    position :absolute;
    left :0;
    top :0;
    z-index :-3;
  }
  .logo{
    margin-left :4rem;
    margin-top :3rem;
  }
  .title{
    font-size: 4.5rem;
    font-weight: bold;
    color: #FFFFFF;
    line-height :6rem;
    margin-top: 21rem;
    text-align :center;
  }
  .time{
    font-size:3.2rem;
    color: #FFFFFF;
    text-align :center;
  }
  .apply{
    height: 5rem;
    width: 28.5rem;
    box-sizing: border-box;
    border: 0.1rem solid #FFFFFF;
    border-radius: 3rem;
    background-color: rgb(38,154,255);
    font-size: 2.5rem;
    color: #FFFFFF;
    line-height: 4.8rem;
    text-align: center;
    position: absolute;
    left: 8rem;
    top: 45rem;
  }
  .schedule{
    height: 5rem;
    width: 28.5rem;
    box-sizing: border-box;
    border: 0.1rem solid #FFFFFF;
    border-radius: 3rem;
    background-color: rgb(38,154,255);
    font-size: 2.5rem;
    color: #FFFFFF;
    line-height: 4.8rem;
    text-align: center;
    position: absolute;
    left: 8rem;
    top: 53rem;
  }
</style>
