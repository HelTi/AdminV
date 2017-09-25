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
/*cookie*/
var pluses = /\+/g;

function isFunction(fn) {
  return typeof fn === "function"
}

function encode(value) {
  return Cookies.config.raw ? value : encodeURIComponent(value);
}

function decode(value) {
  return Cookies.config.raw ? value : decodeURIComponent(value);
}

function stringifyCookieValue(value) {
  return encode(Cookies.config.json ? JSON.stringify(value) : String(value));
}

function parseCookieValue(s) {
  if (s.indexOf('"') === 0) {
    // This is a quoted cookie as according to RFC2068, unescape...
    s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }

  try {
    // Replace server-side written pluses with spaces.
    // If we can't decode the cookie, ignore it, it's unusable.
    // If we can't parse the cookie, ignore it, it's unusable.
    s = decodeURIComponent(s.replace(pluses, ' '));
    return config.json ? JSON.parse(s) : s;
  } catch (e) {
  }
}

function read(s, converter) {
  var value = Cookies.config.raw ? s : parseCookieValue(s);
  return isFunction(converter) ? converter(value) : value;
}

/**
 *
 * @param key
 * @param value
 * @param options
 * @constructor
 */
const Cookies = function (key, value, options) {
  // Write

  if (arguments.length > 1 && !isFunction(value)) {

    if (typeof options.expires === 'number') {
      var days = options.expires, t = options.expires = new Date();
      t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
    }

    return (document.cookie = [
      encode(key), '=', stringifyCookieValue(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join(''));
  }

  //read
  var result = key ? undefined : {},
    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    cookies = document.cookie ? document.cookie.split('; ') : [],
    i = 0,
    l = cookies.length;

  for (; i < l; i++) {
    var parts = cookies[i].split('='),
      name = decode(parts.shift()),
      cookie = parts.join('=');

    if (key === name) {
      // If second argument (value) is a function it's a converter...
      result = read(cookie, value);
      break;
    }

    // Prevent storing a cookie that we couldn't decode.
    if (!key && (cookie = read(cookie)) !== undefined) {
      result[name] = cookie;
    }
  }

  return result;
}
Cookies.config = {
  raw: false,
  json: false
}
Cookies.defaults = {};

// debounce
var run_now = true;
var debounce = function(func,wait){
  var timeout;
  if(run_now){
    func();
    run_now=false;
  }else{
    return function(){
      clearTimeout(timeout);
      timeout = setTimeout(func,wait);
    }
  }
}
export {Cookies};

