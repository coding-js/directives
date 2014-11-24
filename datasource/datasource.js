var app = angular.module('myApp', []);

app.directive('datasource', function($http) {
  return {
    restrict: "E",
    scope: {
      url: "@"
    },
    link: function(scope, $el, attrs, ngModel) {
      var datasourceName = attrs['name'];
      var datasource = {};
      scope.$parent[datasourceName] = datasource;
      scope.$watch('url', function() {
        $http.get(scope.url).success(function(results) {
          datasource.results = results;
        });
      });
    }
  }
});