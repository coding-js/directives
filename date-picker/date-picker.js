var app = angular.module('myApp');

app.directive('datePicker', function() {
  return {
    restrict: "E",
    replace: true,
    template: "<input type='text'>",
    link: function(scope, $el, attrs) {
      $el.datepicker();
    }
  }
});