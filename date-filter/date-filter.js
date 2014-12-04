var app = angular.module('myApp');

app.directive('dateFilter', function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      dateRange: "=name"
    },
    templateUrl: "date-filter.html",
    link: function(scope, $el, attrs, ngModel) {
      scope.rangeType = "today";

      var triggerChange = function() {
        if (attrs.onChange) {
          scope.$parent.$eval(attrs.onChange);
        }
      };

      var setupPicker = function($picker) {
        var $picker = $el.find('')
      };

      var onPickerClose = function() {
          scope.$apply(function() {
            updateRangeValues();
          });        
      };

      var $fromPicker = $el.find('[ng-model=customFrom]');
      $fromPicker.datepicker({
        dateFormat: "yy-mm-dd",
        onClose: onPickerClose        
      });

      var $toPicker = $el.find('[ng-model=customTo]');
      $toPicker.datepicker({
        dateFormat: "yy-mm-dd",
        onClose: onPickerClose   
      });

      var updateRangeValues = function() {
        if (!scope.dateRange) {
          scope.dateRange = {};
        }
        switch (scope.rangeType) {
          case 'today':
            scope.dateRange.from = moment().format("YYYY-MM-DD");
            scope.dateRange.to = moment().format("YYYY-MM-DD");
            break;
          case 'yesterday':
            scope.dateRange.from = moment().subtract('days', 1).format("YYYY-MM-DD");
            scope.dateRange.to = moment().format("YYYY-MM-DD");
            break;
          case 'week':
            scope.dateRange.from = moment().subtract('weeks', 1).format("YYYY-MM-DD");
            scope.dateRange.to = moment().format("YYYY-MM-DD");
            break;
          case 'month':
            scope.dateRange.from = moment().subtract('months', 1).format("YYYY-MM-DD");
            scope.dateRange.to = moment().format("YYYY-MM-DD");
            break;
          case 'custom':
            if (!scope.customFrom) {
              scope.customFrom = moment().format("YYYY-MM-DD");
              $fromPicker.datepicker('setDate', scope.customFrom);
            }
            if (!scope.customTo) {
              scope.customTo = moment().format("YYYY-MM-DD");
              $toPicker.datepicker('setDate', scope.customTo);
            }
            scope.dateRange.from = scope.customFrom;
            scope.dateRange.to = scope.customTo;

        }
        scope.dateRange.type = scope.rangeType;          
      };

      scope.$watch("rangeType", updateRangeValues);
      updateRangeValues();
    }
  }
});