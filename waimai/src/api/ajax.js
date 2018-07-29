//Ajax请求模块，返回值是promise对象,异步返回的数据是responae.data
import axios from 'axios'
export default function ajax (url,data={},type='GET') {

  return new Promise(function (resolve,reject) {
    //执行异步ajax请求
    let promise;
    if(type ==='GET'){
      //准备url query参数数据
      let dataStr ='';//数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr += key +'='+data[key] + '&'
      })
      if(dataStr !==''){
        dataStr =dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url+'?'+dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else {
      //post请求
      promise =axios.post(url,data)
    }
    //成功调用resolve
    promise.then(function (responae) {
      resolve(responae.data)
    }).catch(function (error) {
      //失败调用reject
      reject(error)

    })
  })
  //网络请求有两种方式，一种是get 一种是post
  //get方式

  return promise
}
/*const response =await ajax()
const result = response.data
const  resule =await ajax()*/
