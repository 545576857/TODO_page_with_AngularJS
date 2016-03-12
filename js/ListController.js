
var todo_list = angular.module('TodoListApp', []);

  todo_list.controller('ListController', function($scope) {

  $scope.items = [
    { detail: 'Get up', stat: 'Complete'},
    { detail: 'Wash face', stat: 'Active'},
    { detail: 'Eat breakfast', stat: 'Active'}
  ];

  $scope.addItem = function () {
    $scope.items.push(
      {
        detail: $scope.newItem.detail,
        stat: 'Active'
      });
  }

  $scope.deleteItem = function (item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);     
  }

  $scope.completeItem = function (item){
    item.stat = 'Complete';
  }
  
});


function changeTab(index)
{
  switch(index)
  {
  case 1:
    document.getElementById("all_list_wrapper").style.zIndex = 10;
    document.getElementById("active_list_wrapper").style.zIndex = 0;
    document.getElementById("complete_list_wrapper").style.zIndex = 0;
    break;
  case 2:
    document.getElementById("all_list_wrapper").style.zIndex = 0;
    document.getElementById("active_list_wrapper").style.zIndex = 10;
    document.getElementById("complete_list_wrapper").style.zIndex = 0;
    break;
  case 3:
    document.getElementById("all_list_wrapper").style.zIndex = 0;
    document.getElementById("active_list_wrapper").style.zIndex = 0;
    document.getElementById("complete_list_wrapper").style.zIndex = 10;
    break;
  default:;
  }
}

