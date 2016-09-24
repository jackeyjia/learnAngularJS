angular.module('myAppModule1', []);
// configure the module with a controller

angular.module('myAppModule1').controller('myProductDetailCtrl', function ($scope) {
    // Hide colors by default
    $scope.isHidden = true;
    // a function, placed into the scope, which
    // can toggle the value of the isHidden variable
    $scope.showHideColors = function () {
        $scope.isHidden = !$scope.isHidden;
    }
} );
