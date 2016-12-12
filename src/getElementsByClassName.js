// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementList = [];

  var searchTree = function(element) {
    var classList = element.classList;
    if (classList !== undefined && classList.contains(className)) {
      elementList.push(element);
    }

    if (element.hasChildNodes() && element !== undefined) {
      element.childNodes.forEach(searchTree);
    }
  }
  searchTree(document.body);
  return elementList;
};
