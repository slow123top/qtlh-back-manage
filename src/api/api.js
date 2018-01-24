import axios from 'axios';
import qs from 'qs'

function toQs(param) {
  return qs.stringify(param);
}

Date.prototype.format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

let base = '';
let axiosInstance = axios.create({
  baseURL: 'https://www.qiantoulianghua.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*"
  },
  withCredentials: true
});

export const postRemoteReqTodo = (url, params) => {
  return axiosInstance.post(url, toQs(params));
};
//测试远程调用 异步请求 get方法
export const getRemoteReqTodo = (url, params, values) => {
  if (params.length !== 0) {
    let a;
    for (let i = 0; i < params.length; i++) {
      a = '&' + params[i] + '=' + values[i];
    }
    return axiosInstance.get(url + '?' + a.substring(1));
  }
  return axiosInstance.get(url);
};
export const getDays = () => {
//          返回天数
  let date = [];
  let start = '2017-07-30';
  let days = (new Date(new Date().format('yyyy-MM-dd')).getTime() - new Date(start).getTime()) / 86400000 + 1;
  for (let i = 0; i < days; i++) {
    date.push(new Date(new Date(start).setDate(new Date(start).getDate() + i)).format('yyyy-MM-dd'));
  }
  return date;
}
