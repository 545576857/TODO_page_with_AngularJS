
var todo_list = angular.module('TodoListApp', []);

// demoApp.config(function ($routeProvider) {
//   $routeProvider
//     .when('/',
//     {
//       controller: 'SimpleController',
//       templateUrl: 'view1.html'
//     })
//     .when('/part2',
//     {
//       controller: 'SimpleController',
//       templateUrl: 'view2.html'
//     })
//     .otherwise({ redirectTo: '/' });
// });



  todo_list.controller('ListController', function($scope) {

  $scope.items = [
    { detail: 'Dave Jones', stat: 'Complete'},
    { detail: 'Jamie Riley', stat: 'Active'},
    { detail: 'Heedy Wahlin', stat: 'Active'}
  ];

  $scope.addItem = function () {
    $scope.items.push(
      {
        detail: $scope.newItem.detail,
        stat: 'Active'
      });
  }

  $scope.deleteItem = function (item) {
    // var index = $scope.items.indexOf(item);
    // $scope.items.splice(index, 1);     
  }

  $scope.completeItem = function (item){
    item.stat = 'Complete';
  }

});