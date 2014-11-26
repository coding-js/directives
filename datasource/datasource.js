var app = angular.module('myApp');

app.directive('datasource', function($http) {
  return {
    restrict: "E",
    link: function(scope, $el, attrs) {      
      $http.get(attrs['url'])
        .success(function(results) {
          scope[attrs['name']] = results;
        })      
    }
  }
});