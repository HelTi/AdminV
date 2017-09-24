/**
 * Created by helti on 2017/9/24.
 */

export const Storage = {
  add: function (name, content) {
    if (!name) throw new Error('请设置storage的name');
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
