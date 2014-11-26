angular.module('myApp')
  .directive('helloWorld', function() {
    return {
      restrict: "E",
      templateUrl: "hello.html",
      transclude: true,
      scope: {
        name: "@"
      }
    }
  });