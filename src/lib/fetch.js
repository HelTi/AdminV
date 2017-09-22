import axios from 'axios'

/**
 *
 * @param url 请求地址
 * @param data 发送数据
 * @param type 请求类型
 */
export default async (url = '', data = {}, type = 'get') => {
  type = type.toLowerCase();
  /**
   * get请求
   */
  if (type == 'get') {
    let getUrl = '';
    Object.keys(data).forEach(key => {
      getUrl += key + '=' + data[key] + '&';
    });
    if (getUrl !== '') {
      getUrl = getUrl.substr(0, getUrl.lastIndexOf('&'));
      url = url + '?' + getUrl;
    }
    console.log(url)
    return new Promise((resolve, reject) => {
      axios.get(url, data).then(response => {
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  /**
   * post请求
   */
  if (type === 'post') {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
