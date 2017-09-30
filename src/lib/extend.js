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

var objA = {
  a: 'aa',
  b: 'bb',
  o: {
    a: 'oa'
  }
};
var objB = {
  a: 'Baa',
  c: 'cc',
  d: 'dd'
};
var objC = {
  e: 'eee',
  f: 'fff'
};

/*console.log(Object.assign(objA, objB))*/

function extend(target) {
  let target_type = typeOf(target);
  let source = Array.prototype.slice.call(arguments, 1);
  let source_length = source.length;
  console.log(source)
  if (target_type === 'array') {
    for (i = 0; i < source_length; i++) {

    }
  }
  if (target_type === 'object') {

  }
  return false;
}

function copy(data, isDeep = false) {
  let targetType = typeOf(data);
  let newData = typeOf(data) === 'array' ? [] : {};
  //浅拷贝
  if (!isDeep) {
    if (targetType === 'array') {
      for (let i = 0; i < data.length; i++) {
        newData.push(data)
      }
    } else if (targetType === 'object') {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          newData[key] = data[key];
        }
      }
    } else {
      return data;
    }

    return newData;
  }
  //深拷贝
  if (isDeep) {
    if (targetType === 'array') {
      for (let i = 0; i < data.length; i++) {
        newData.push(copy(data, isDeep))
      }
    } else if (targetType === 'object') {
      for (let i in data) {
        newData[i] = copy(data[i], isDeep)
      }
    } else {
      return data;
    }
    return newData;
  }
}

/*let shallowD = copy(objA);

shallowD.o.a = 'aaaaa'
console.log(shallowD)
console.log(objA)

let deepD = copy(objA, true);
console.log(deepD);
deepD.o.a='ddddaaa'
console.log(deepD);
console.log(objA)*/
