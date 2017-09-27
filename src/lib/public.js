/**
 * by helti
 * date 2017-09-26
 */
export const VERSION = '1.0';
const checkHasPro = function (value, validList) {
  if (typeOf(validList) === 'array') {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true
      } else {
        return false
      }
    }
  }
  if (typeOf(validList) === 'object') {
    return checkObjPro(value, validList)
  } else {
    throw new Error('check your validListType');
  }
}

function checkObjPro(key, obj) {
  if (typeOf(obj) === 'object') {
    return Object.prototype.hasOwnProperty.call(obj, key); // true
  }
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const types = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return types[toString.call(obj)];
}

/*deppcopy*/
function deepCopy(data) {
  var t = typeOf(data);
  var o;
  if (t === 'array') {
    o = [];
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    o = {};
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  } else {
    return data;
  }
  return o;
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }

  scroll(from, to, step);
}

//向上查找组件
export function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

//向下查找组件
export function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
      }
    });

    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i];
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

export {checkHasPro, deepCopy}
