angular.module('myApp').directive('onScrollEnd', function() {

  var isAtBottom = function(element) {
    var maxScrollTop = element[0].scrollHeight - element.outerHeight();
    return element.scrollTop() > maxScrollTop;
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {}
  };
});
