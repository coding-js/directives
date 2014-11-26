var app = angular.module('myApp');

app.directive('datasource', function($http) {
  return {
    restrict: "E",
    scope: {
      url: "@"
    },
    link: function(scope, $el, attrs) {      
      var datasourceName = attrs['name'];
      var datasource = {};
      scope.$parent[datasourceName] = datasource;
      scope.$watch('url', function() {
        datasource.loading = true;
        setTimeout(function() {
          $http.get(scope.url)
            .success(function(results) {
              datasource.results = results;
              datasource.loading = false;
              datasource.error = false;
              if (attrs.onLoad) {
                scope.$parent.$eval(attrs.onLoad);
              }
            })
            .error(function(err) {
              datasource.error = err;
              datasource.loading = false;
            })
        }, 1000);
      });
    }
  }
});