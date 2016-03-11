
var demoApp = angular.module('demoApp', []);

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



  demoApp.controller('SimpleController', function($scope) {

  $scope.customers = [
    { name: 'Dave Jones', city: 'Phoenix'},
    { name: 'Jamie Riley', city: 'Atlanta'},
    { name: 'Heedy Wahlin', city: 'Chandler'}
  ];

  $scope.addCustomer = function () {
    $scope.customers.push(
      {
        name: $scope.newCustomer.name,
        city: $scope.newCustomer.city
      });
  }


});