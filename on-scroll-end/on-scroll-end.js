angular.module('myApp').directive('onScrollEnd', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var callbackExpression = attrs.onScrollEnd;
      if (callbackExpression) {
        element.scroll(function(e) {
          var maxScrollTop = element[0].scrollHeight - element.outerHeight();
          if (element.scrollTop() > maxScrollTop) {
            scope.$apply(function() {
              scope.$eval(callbackExpression);
            });
          }
        });
      }
    }
  };
});