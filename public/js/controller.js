angular.module('MainApp', ['ngMaterial'])

  .controller('SearchController', function($scope, $timeout, $mdBottomSheet) {
    $scope.route = {
       from: "",
       to:  ""
    };

    $scope.showSearchResults = function($event) {
      $mdBottomSheet.show({
        templateUrl: 'bottom-sheet-list-template.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })
  .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

    $scope.items = [
      {
        kr: 100,
        voyage: '7129К ПРАГА - КАМЯНЕЦЬ ПОДІЛЬСЬКИЙ',
        departure: '04:40',
        arrival: '09:55',
        bus: 'НЕОПЛАН_49',
        km: 295.0,
        onlinePurchase: false
      },
      {
        kr: 100,
        voyage: '122 ЛЬВІВ - КАМ.ПОДІЛЬСЬКИЙ',
        departure: '10:00 ',
        arrival: '17:48',
        bus: 'БАЗ АО79-29',
        km: 298.0,
        onlinePurchase: false
      },
      {
        kr: 100,
        voyage: '122 ЛЬВІВ - КАМЯНЕЦЬ ПОДІЛЬСЬКИЙ',
        departure: '10:15',
        arrival: '17:48',
        bus: 'ЕТАЛОН_30',
        km: 295.0,
        onlinePurchase: true
      },
      {
        kr: 100,
        voyage: '256 ЛЬВІВ - КАМЯНЕЦЬ ПОДІЛЬСЬКИЙ',
        departure: '15:50',
        arrival: '21:50',
        bus: 'ЕТАЛОН_30',
        km: 295.0,
        onlinePurchase: true
      },
      {
        kr: 95,
        voyage: '782 ЛЬВІВ - МОГ.ПОДІЛЬСЬКИЙ',
        departure: '08:00',
        arrival: '13:30',
        bus: 'ОТАКАР',
        km: 295.0,
        onlinePurchase: false
      }
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })