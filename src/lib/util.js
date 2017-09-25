/**
 * Created by helti on 2017/9/24.
 */

export const Storage = {
  add: function (name, content) {
    if (!name) throw new Error('need localstorage name');
    if (content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },
  get: function (name) {
    if (!name) return;
    return window.localStorage.getItem(name)
  },
  remove: function (name) {
    if (!name) throw new Error('need localStorage name');
    window.localStorage.removeItem(name)
  },
  clear: function () {
    window.localStorage.clear();
  }
}

export const Cookie = {
  set: function (name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = name + "=" + encodeURI(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
  },
  get: function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  },
  has: function (name) {
    if (!name) return;
    var has_c = this.get(name);
    return (has_c !== undefined ? true : false)
  },
  delete: function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.get(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  }
}
