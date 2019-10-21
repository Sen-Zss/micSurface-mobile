import {
  getUserToken,
  getChannelId,
  getSignUpStatus,
  getUserStatus,
  getActivityInfo,
  WechatLoginHtmlApi,
  getUserCheckIn
} from '../../api/index'

export const getUrlParam = function (name){
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

export const getActivityMessage = function(store){
  let state = store
  // 判断 store 中是否有该活动的数据
  let res= !store.state.activityMessage.activityDataStatus ?  getBasicInfoActivity() :''
  return res
}

// todo 获取渠道 id ，是否开启渠道报名、是否开启报名审核
async function getBasicInfoActivity(){
  /*
    获取活动信息，eventId？|| CampaignChannelId？=> CampaignChannelId
   */
  var eventId = GetQueryString('eventId')
  var campaignChannelId = GetQueryString('campaignChannelId')

  let actvityMessage = {} //
  // 无 campaignChannelId 获取 默认 campaignChannelId
  if(!campaignChannelId) {
    let result_getChannelId =await getChannelId({eventId})
    actvityMessage.actStatus = result_getChannelId
  }

  // 通过渠道 campaignChannelId 获取该渠道活动的状态
  let result_getSignUpStatus =await getSignUpStatus({id:campaignChannelId})
  actvityMessage.actStatus = result_getSignUpStatus

  // 活动的相关信息
  let result_getActivityInfo =await getActivityInfo({id:eventId})
  actvityMessage.actContent = result_getActivityInfo

  // 判断用户是否已经登录注册过
  let result_getUserStatus =await getUserStatus({eventId})
  if(result_getUserStatus.Code == '200'){
    alert(result_getUserStatus.Message)
  }else if(result_getUserStatus.Code=='61308'){
    const baurl = 'https://micstage.arcdmi.com'
    WechatLoginHtmlApi(eventId,(baurl+'/home?eventId='+eventId)).then(res=>{
      window.location.replace(res.Result);
    })
  }else if(result_getUserStatus.Code == '500'){
    alert(result_getUserStatus.Message)
  }

  return actvityMessage
}

export const GetQueryString = function(name){
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
  {
      return decodeURI(r[2]);
  } else
  {
      return null;
  }
}
