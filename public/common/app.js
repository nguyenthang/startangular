
var todoList = angular.module('todoListApp', []).
               controller('CtrlTodoList', ['$scope', function($scope){
                 $scope.todoItem = 'New';
               }]);
