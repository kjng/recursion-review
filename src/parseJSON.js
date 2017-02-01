// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(obj) {
  var index = 0;
  var c = obj.charAt(index);

  var currChar = function() {
    return c;
  };

  var nextChar = function() {
    if (index < obj.length - 1) {
      index++;
      c = obj.charAt(index);
    } else {
      index = false;
      c = undefined;
    }
    return c;
  };

  var getValue = function() {
    var x = currChar();
    if (x.match(/[tf]/)) {
      // handle boolean
    }
  };

  getValue();
};
