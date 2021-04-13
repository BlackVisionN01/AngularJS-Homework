var myNinjaApp = angular.module('numeleMeu', []);

myNinjaApp.controller('TextModifier', ['$scope' , function($scope) {

  $scope.AddText = function () {
    $scope.vector.push ( {
      newtext: $scope.newtext
    });

    $scope.newtext = "";

  };

  $scope.vector = [];

}]);
