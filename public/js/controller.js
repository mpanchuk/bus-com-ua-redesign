angular.module('MainApp', ['ngMaterial'])

  .controller('SearchController', function($scope) {
    $scope.route = {
       from: "",
       to:  ""
    };
  });