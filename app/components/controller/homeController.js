'use strict';

angular.module('TodoApp.controllers', []).controller('HomeController', function ($log, $scope, $filter) {
    $log.debug('HomeController');

    $scope.todos = [{
        text: 'hello world',
        checked: false
    }];
    $scope.selectedTodos = [];

    $scope.$watch('todos', function (newVal, oldVal) {
        $scope.selectedTodos = $filter('filter')($scope.todos, {checked: true});
    }, true);

    $scope.add = function () {
        $scope.todos.push({text: $scope.text, checked: false});
        $scope.text = '';
    };

    $scope.selectAll = function () {

    };

    $scope.remove = function (index) {
        $scope.todos.splice(index, 1);
    };

    $scope.removeSelected = function () {
        $scope.todos = $filter('filter')($scope.todos, {checked: false});
    };

    $scope.removeAll = function () {
        $scope.todos = [];
    };

});