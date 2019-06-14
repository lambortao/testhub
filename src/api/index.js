import axios from 'axios'
import qs from 'qs'

/**
 * 后台接口函数
 * 
 * @param {string} url 接口的具体地址 - 必须
 * @param {obj} data 需要传到后台的文件 - 可选
 */
const __port = (url, param) => {
  return axios({
    url: `http://testhub.zytao.cc/server/admin.php/${url}`,
    method: 'post',
    data: qs.stringify(param)
  }).then(res => {
    if (res.status === 200) {
      return res.data
    }
  })
}

export default __port