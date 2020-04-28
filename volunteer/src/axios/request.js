import qs from 'qs'
import axios from 'axios'
import utils from "@/public/utils"
import  {Message} from 'element-ui'
import apienv from '@/axios/env'

const { APP_ENV } = process.env
let  env = 'pro'

axios.interceptors.request.use(config=>{
    if(sessionStorage.getItem('vuex')){
        const token = utils.getSession('vuex')
        config.headers.Authorization = 'JWT '+token
    }
    console.log(process)
    return config;
},err=>{
    Message.error({message:'请求错误'})
    return Promise.reject(err);
})
function statusCode(response) {
    switch (response.status) {
      case 400:
        Message.error({message:'密码错误'})
        break
      case 403:
        Message.error({message:'拒绝访问'})
        break
      case 404:
        Message.error({message:'请求地址出错'})
        break
      case 408:
        Message.error({message:'请求超时'})
        break
      case 500:
        Message.error({message:'服务器内部错误'})
        break
      default:
          break
    }
  }
  function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status !== 200) {
      return statusCode(res)
    } 
    return res
  }
  // 请求方式的配置
  export default {
    post(url, data) {  //  post
      return axios({
        method: 'post',
        url:apienv[env].api+url,
        data:qs.stringify(data),
        
      }).then((res)=>{
          console.log(res)
          return res
      }).catch(
          (error)=>{
            checkCode(error.response)
          }
      )
    },
    get(url, params) {  // get
      return axios({
        method: 'get',
        url:apienv[env].api+url,
        params, // get 请求时带的参数
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(
        (res)=>{
            console.log(res)
            return res
        }
      ).catch((error)=>{
          checkCode(error.response)
      })
    },
  put(url,data){
      return axios({
          method: 'put',
          url:apienv[env].api+url,
          data:qs.stringify(data),
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }).then(
          (res)=>{
              console.log(res)
              return res
          }
      ).catch((error)=>{
          checkCode(error.response)
      })
  },
  delete(url,params){  // delete
    return axios({
      method: 'delete',
      url:apienv[env].api+url,
      params, // delete 请求时带的参数
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (res)=>{
          console.log(res)
          return res
      }
    ).catch((error)=>{
        checkCode(error.response)
    })
  }}