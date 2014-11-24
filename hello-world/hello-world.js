var app = angular.module('myApp', []);

app.directive('helloWorld', function() {
  return {
    restrict: "E",
    template: "<h1>Hello world!</h1>"
  }
});