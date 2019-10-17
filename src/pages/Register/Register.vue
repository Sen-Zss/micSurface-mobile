<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;" v-wechat-title="$route.meta.title">
       <!-- 报名页 -->
       <div class="con-top">
         <Banner></Banner>
        </div>
        <div class="con-bottom">
          <img src="../../assets/images/personal-2.png" alt="" class="bottom">
          <div class="border">
            <div class="round">
              <img src="../../assets/images/messageTitle.jpg" class="roundimg"/>
            </div>

            <div class="number">
              <div class="hang">
                <div class="bit">*</div>
                <div class="name-bor">
                  <img src="../../assets/images/name.png" class="nameimg"/>
                </div>
                <div class="name">姓名：</div>
              </div>
              <div class="input-1">
                <input type="text" name="name" id="name" value="" v-model="name" placeholder="请输入姓名" class="inputa"/>
              </div>
            </div>

            <div class="number">
              <div class="hang">
                <div class="bit">*</div>
                <div class="name-bor">
                  <img src="../../assets/images/hospital.png" class="hospitalimg"/>
                </div>
                <div class="name">医院</div>
              </div>
              <div class="input-1">
                <input type="text" name="hospital" id="hospital" value="" v-model="hospital" placeholder="请输入" class="inputa"/>
              </div>
            </div>

            <div class="number">
              <div class="hang">
                <div class="bit">*</div>
                <div class="name-bor">
                  <img src="../../assets/images/email.png" class="emailimg"/>
                </div>
                <div class="name">邮箱：</div>
              </div>
              <div class="input-1">
                <input type="email" name="email" id="email" value="" v-model="email" placeholder="请输入" class="inputa"/>
              </div>
            </div>

            <div class="number">
              <div class="hang">
                <div class="bit">*</div>
                <div class="name-bor">
                  <img src="../../assets/images/phone.png" class="phoneimg"/>
                </div>
                <div class="name">手机：</div>
              </div>
              <div class="input-1">
                <input type="number" name="phone" id="phone" value="" v-model="phone" placeholder="请输入" class="inputa"/>
              </div>
            </div>

            <div class="number" v-for="(item,indexa) in mydate.listQuestionArray" :key="indexa">
              <div class="hang">
                <div class="bit" v-if="item.IsRequired==1">*</div>
                <div class="name-bor">
                  <img :src=item.icon class="phoneimg"/>
                </div>
                <div class="name">{{item.QuestionTitle}}：</div>
              </div>

              <!-- text -->
               <div class="input-1" v-if="item.QuestionType=='text'" >
                  <input type=item.QuestionType name="text"  value=""  placeholder="请输入" class="inputa input" :id="item.QuestionId" />
              </div>
              <!-- textarea -->
               <div class="input-1" v-else-if="item.QuestionType=='textarea'">
                 <textarea type=item.QuestionType name="text"   placeholder="请输入" class="inputa textarea" :id="item.QuestionId"></textarea>
              </div>
              <!-- radio -->
               <div class="input-1 js-radio"  v-else-if="item.QuestionType=='radio'" :id="item.QuestionId">
                 <div  v-for="(itemt,index) in item.listAnswer" :key="index" :id="index" class="input-radio">
                  <input type="radio" :name="[indexa]" :value='itemt.AnswerTitle'  class="inputa radio " :v-bind="checked">{{itemt.AnswerTitle}}
                </div>
              </div>
              <!-- checkbox -->
               <div class="input-1" v-else-if="item.QuestionType=='checkbox'" :id="item.QuestionId">
                 <div  v-for="(itemt,index) in item.listAnswer" :key="itemt.AnswerId" class="input-radio">
                  <input type="checkbox" name="b" :id="index" :value="itemt.AnswerTitle"  class="inputa radio" >{{itemt.AnswerTitle}}
                </div>
              </div>
              <!-- select -->
               <div class="input-1" v-else-if="item.QuestionType=='select'" :id="item.QuestionId">
                <select  class="select" >
                  <option :value ="itemt.AnswerTitle" v-for="itemt in item.listAnswer" :key="itemt.AnswerId" class="select-option">{{itemt.AnswerTitle}}</option>
                </select>
              </div>
              <!-- datetime -->
               <div class="input-1" v-if="item.QuestionType=='datetime'" :id="item.QuestionId">
                  <input type="datetime-local" value="text"  placeholder="请输入" class="inputa input" />
              </div>

              <!-- <div class="input-1"></div> -->
            </div>

            <div class="apply" @click="btn">提交</div>
          </div>
      </div>
    </div>
</template>

<script>
    import banner from '../../components/Banner/Banner'
    import {getRegisterExtend,EventH5Register} from '../../api/index'
    import {emailReg,phoneReg} from '../../assets/js/config'
    export default {
      components:{
        Banner:banner
      },
      data(){
        return {
            banner:'',
            name:'',
            hospital:'',
            email:'',
            phone:'',
            checked:true,
            mydate:{},
        }
      },
      beforeCreate(){
        getRegisterExtend(this.$store.state.activityMessage.eventId).then(res=>{
          if(res.code==200){
            this.mydate=res.data
            // console.log(this.mydate)
          }else{
            console.log(res)
          }
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


        btn(){
            // 默认字段的判断
            if(this.name.length<=0){
              alert("姓名不能为空")
              return
             }else if(this.hospital.length<=0){
              alert("医院不能为空")
              return
             }else if(!(emailReg.test(this.email))){
              alert("邮箱格式错误")
              return
             }else if(!(phoneReg.test(this.phone))){
              alert("手机号格式错误")
              return
            }

            // 自定义字段的判断
            if(this.mydate.listQuestionArray){
              for(var i=0;i<this.mydate.listQuestionArray.length;i++){
                  let item = this.mydate.listQuestionArray[i]
                  var info;
                  var questionListInfo = []; //传参info对应值
                  var question_Field = {}; //code:result 对象模式存入info参数
                  var add_result; //存储result参数值

                  let elem = '#'+item.QuestionId

                  if(this.mydate.listQuestionArray.length!=0){
                    if(item.QuestionType=='text' || item.QuestionType=='textarea'){

                      if(!($(elem).val() && item.IsRequired===1) ){
                        alert("请填写完整 文本");
                        return
                      }else{
                        add_result = $(elem).val()
                      }
                    }else if(item.QuestionType=='radio' ){
                    
                      if(!$(elem).find("input[type='radio']:checked").val() && item.IsRequired===1){
                        alert("请填写完整 单选")
                        return
                      }else{
                        add_result = $(elem).find("input[type='radio']:checked").val()
                      }
                    }else if(item.QuestionType=='checkbox'){
                    
                      for(var c=0;c<$(elem).find("input[type='checkbox']:checked").length;c++){
                        if($(elem).find("input[type='checkbox']:checked").length==0 && item.IsRequired===1){
                          alert("请填写完整  多选")
                          return
                        }else{
                          add_result = $(elem).find("input[type='checkbox']:checked")[c].value
                        }
                      }
                    }else if(item.QuestionType=='select'){
                      // console.log($(elem).find("option:selected").attr("value"));
                      if( ($(elem).find("option:selected").attr("value")=="请选择" || !$(elem).find("option:selected").attr("value"))   &&  item.IsRequired===1  ){
                        alert("请填写完整  下拉框")
                        return
                      }else{
                        add_result = $(elem).find("option:selected").attr("value")
                      }
                    }else if(item.QuestionType=='datetime'){
                      // console.log($(elem).find("input[type='datetime-local']").val())
                      if(!$(elem).find("input[type='datetime-local']").val() && item.IsRequired===1){
                        alert("请填写完整  日期")
                        return
                      }else{
                        add_result = $(elem).find("input[type='datetime-local']").val()
                      }
                    }
                    question_Field = {'result': add_result};
                    questionListInfo.push(question_Field);
                    info = JSON.stringify(questionListInfo);
                  }else{
                    info = "";
                  }

              }
            }

            var data = { 
              platform: "WeChat",
              Title:'',
              WeChatUserId: '7547F1E6-C853-43DC-8415-836FCF85D99A', //weChatUserId, 
              UserId: '', //regUserId, 
              ActivityName: 'dd', //activityName, 
              CampaignChannelId: this.$store.state.activityMessage.campaignChannelId, //CampaignChannelId, 
              eventId: this.$store.state.activityMessage.eventId, 
              Name: this.name, 
              Gender:0, //gender, 
              Company:'cc', // company, 
              CellPhone: this.phone, //cellPhone, 
              Email: this.email, 
              Other: 'ewr', //other, 
              Session: 'hn', //sessions, 
              info: 'mjy'
            }
            EventH5Register(data).then(res=>{
              // 判断提交是否成功
              // if(){
                // 判断用户是否已经登录注册过
                // if(){
                  // 跳转提交成功
                  var eventId = this.$store.state.activityMessage.eventId;
                  var campaignChannelId = this.$store.state.activityMessage.campaignChannelId;
                  this.$router.push('/review?'+ 'eventId='+eventId+'&campaignChannelId='+campaignChannelId)
                // }else{
                  // 跳转报名成功
                  // var eventId = this.$store.state.activityMessage.eventId;
                  // var campaignChannelId = this.$store.state.activityMessage.campaignChannelId;
                  // this.$router.push('/seccess?'+ 'eventId='+eventId+'&campaignChannelId='+campaignChannelId)
                // }
              // }else{
              //   alert("信息提交失败！");
              // }
            })


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
    min-width:100%;
  .con-top{
    position: relative;
  }
  .con-bottom{
    min-height :60rem;
    width: 100%;
    border: 1px solid transparent;
    position: relative;
  }

  /*.con-top*/
  .top{
    width :100%;
    height :320px;
    position :absolute;
    left :0;
    top:0;
    z-index :-1;
  }
  .logo{
    width: 169px;
    height: 50px;
    position: absolute;
    left: 60px;
    top: 57px;
  }
  .logoimg{
	  display: block;
  }

  
  /*.con-bottom*/
  .bottom{
    width :100%;
    height :100%;
    position :absolute;
    left :0;
    top:0;
    z-index :-1;
  }
  .round{
    position: absolute;
    left: 3rem;
    top: 2.5rem;
  }
  .name-bor{
    height: 2rem;
    width: 2.7rem;
  }
  .nameimg{
    height: 1.5rem;
    width: 2rem;
    display: block;
    margin-top :3px;
  }
  .name{
    font-size: 2rem;
    color: #FFFFFF;
  }
  .input-1{
    width: 37rem;
    margin-top :10px;
  }
  .inputa{
    height: 5rem;
    width: 34rem;
    padding-left: 1.7rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #FFFFFF;
    font-size: 2rem;
  }
  .textarea{
    height: 8rem;
    padding :10px 1.7rem;
  }
  .radio{
    height: 25px;
    width: 25px;
    margin-left :43px;
    margin-right :20px;
  }
  .input-radio{
    width :300px;
    height :30px;
    color :#000;
    font-size:25px;
    display :flex;
    margin-top :10px;
  }
  .select{
    height :60px;
    width :300px;
    margin-left 43px;
    padding-left :20px;
    font-size:30px;
  }
  option{
    height :60px;
    width :300px;
    padding-left :20px;
    font-size:30px;
    line-height :30px;
  }

  .hospitalimg{
    width: 1.7rem;
    height: 1.7rem;
    display :block;
  }
  .emailimg{
    width: 1.9rem;
	  height: 1.3rem;
  }
  .phoneimg{
    width: 1.55rem;
	  height: 2.1rem;
  }

  .border{
    width :100%;
    box-sizing :border-box;
    margin-top :185px;
  }
  .number{
    width :620px;
    margin-left :80px;
    margin-top :10px;
  }
  .hang{
    display :flex;
    margin-bottom :5px;
  }
  .bit{
    color :red;
    margin :0 10px 0 -20px;
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
    margin-left: 8rem;
    margin-top: 20px;
    margin-bottom :30px;
  }
</style>
