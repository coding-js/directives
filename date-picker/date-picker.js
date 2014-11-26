var app = angular.module('myApp');

app.controller('MyController', function($scope) {
  $scope.doSomethingCool = function() {
    alert('kaboom!');
  };
});

app.directive('datePicker', function() {
  return {
    restrict: "E",
    require: "ngModel",
    replace: true,
    template: "<input type='text'>",
    link: function(scope, $el, attrs, ngModel) {
      var pickerOptions = {};

      if (attrs.dayNamesMin) {
        pickerOptions.dayNamesMin = attrs.dayNamesMin.split(",");
      }

      if (attrs.onClose) {
        pickerOptions.onClose = function(newValue) {
          scope.$eval(callbackExpression);
          scope.$apply(function() {
            ngModel.$setViewValue(newValue);
          });
        };        
      }
      $el.datepicker(pickerOptions);

      ngModel.$render = function() {
        $el.datepicker( "setDate", ngModel.$modelValue )
      };
    }
  }
});