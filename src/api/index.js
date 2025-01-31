import ajax from './ajax'
const BASE_URL =''       //'/api'

// todo 获取用户token 信息
export const getUserToken = ({eventId,campaignChannelId,platform,debug}) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/Wechat/LoginHtml',{eventId,campaignChannelId,platform,debug})





// todo 通过 eventId 获取渠道 id
export const getChannelId = ({eventId}) =>ajax(BASE_URL+'https://micstage.arcdmi.com/MICCore/CampaignChannels/FindDefaultCampaignChannel',{eventId},"POST")

// todo 通过渠道 id 获取活动报名与审核状态
export const getSignUpStatus = ({id}) =>ajax(BASE_URL+'https://micstage.arcdmi.com//MICCore/CampaignChannels/Get',{id})

// todo 判断用户是否登录、注册   ？无法获取用户是否注册，返回参数有问题
export const getUserStatus = (eventId) =>ajax(BASE_URL+'https://micstage.arcdmi.com//Event/EventH5/GetSingle',{eventId},"POST")

// todo 获取活动相关信息
export const getActivityInfo= ({id}) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/Events/Get',{id})







// todo 判断用户是否通过审核，判断是否显示票号及二维码
export const getUserCheckIn= (eventId) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/EventH5/GetSingle',{eventId},"POST")

export const getRegisterExtend= (eventId) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/Examination/GetRegisterExtend',{eventId},"POST")


export const EventH5Register= (data) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/EventH5/Register',{data},"POST")

export const WechatLoginHtmlApi= (eventId,callbackUrl) =>ajax(BASE_URL+'https://micstage.arcdmi.com/Event/WeChat/WechatLoginHtmlApi',{eventId,callbackUrl},"POST")
