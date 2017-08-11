/**
 * Created by nick on 15-Mar-17.
 */

angular.module('todoService',[])

// each function returns a promise object
    .factory('Todos', function ($http) {
        return {
            get: function () {
                return $http.get('/api/todos');
            },
            create: function (todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete: function (id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });