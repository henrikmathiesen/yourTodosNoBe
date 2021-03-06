/// <reference path="../../typings/index.d.ts" />

angular
    .module('todos')
    .directive('ytTodos', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'todos/yt-todos.template.html',
            replace: true,
            controller: 'ytTodosController as vm',
            bindToController: true
        }
    })
    .controller('ytTodosController', function (todosCrudFactory, todosEffectFactory) {
        var vm = this;
        vm.todos = [];
        vm.allTodosChecked = false;
        vm.noTodosChecked = true;

        var getTodos = function () {
            todosCrudFactory.getTodos()
                .then(function (todos) {
                    vm.todos = todos;
                });
        };

        vm.isAllTodosChecked = function () {
            todosEffectFactory.isAllTodosChecked(vm);
        };

        vm.checkAllTodos = function (isChecked) {
            todosEffectFactory.checkAllTodos(vm, isChecked);
        };

        vm.addTodo = function () {
            var newTodo = { text: "" };
            todosEffectFactory.addTodo(vm, newTodo);
        };

        vm.updateCheckedTodos = function () {
            todosEffectFactory.updateCheckedTodos(vm);
        };

        vm.deleteCheckedTodos = function () {
            todosEffectFactory.deleteCheckedTodos(vm);
        };

        getTodos();
    });
