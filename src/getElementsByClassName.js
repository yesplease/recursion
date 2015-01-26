// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
    var resultsArray = [];
    var bodyNodeWithAllKids = document.body;

    var moveDownPage = function (node) {
        if (node.nodeType === 1) {
            if (node.classList.contains(className) && node.className.indexOf(className) >= 0) {
            resultsArray.push(node);
            }
        }

        var childNodeLength = node.childNodes.length;
        for (var i = 0; i < childNodeLength; i++) {
         moveDownPage(node.childNodes[i]);
        }
    };
    moveDownPage(bodyNodeWithAllKids);
    return resultsArray;
};
