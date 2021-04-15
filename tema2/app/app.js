var myApp = angular.module('myApp', []);

myApp.controller('Tasks', function($scope) {

    $scope.removeTask = function (task) {
      var removeTask = $scope.todoList.indexOf(task);
      $scope.todoList.splice(removeTask, 1);
    };

    $scope.todoList = [{
      todoText: "Add a new task",
      done: false
    }];

    $scope.todoInput = "";

    $scope.todoAdd = function() {
      if ($scope.todoInput !== "") {
          $scope.todoList.push({
            todoText: $scope.todoInput,
            done: false
          });
        }
        $scope.todoInput = "";
    };
});
