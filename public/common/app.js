
var todoList = angular.module('todoListApp', []);

function indexController($scope, $http){
  $scope.todo = {

  };

  $http.get('/api/todos')
  .success(function(data){
    $scope.todos = data;
    console.log('Data', data);
  }).error(function(data){
    console.log('Erro', data);
  });
}
