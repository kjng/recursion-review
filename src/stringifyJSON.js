// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    var newArray = [];
    if (obj[0] === undefined) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      newArray.push(stringifyJSON(obj[i]));
    }
    return '[' + newArray + ']';
  }
  else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var newObj = {};
    var newString = '';
    var keyList = Object.keys(obj);
    for (var j = 0; j < keyList.length; j++) {
      var currKey = keyList[j];
      var currVal = obj[currKey];
      if (typeof currKey === 'function' || typeof currVal === 'function' || currVal === undefined) {
        continue;
      }
      newString += stringifyJSON(currKey) + ":" + stringifyJSON(currVal) + ",";
    }
    newString = newString.slice(0, -1);
    return '{' + newString + '}';
  }
};
