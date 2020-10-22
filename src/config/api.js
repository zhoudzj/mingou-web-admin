import axios from "./request"
//用户登录
export const getLogin = (param) => {
    const url = '/user/login';
    return axios.post(url,param)
}