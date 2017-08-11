/**
 * Created by nick on 12-Mar-17.
 */

angular.module('sadikApp', [
    'ui.router',
    //'swangular',
    'modalsController',
    'todoController',
    'todoService'
])
    .config(
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('about');
            $stateProvider
                .state('home', {
                    url: '/asd',
                    templateUrl: 'templates/home.html',
                    //controller: 'mainController'//,
                    // title: 'qwer'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: 'AboutController',
                    title: 'about qwer2'
                })
        })

    .run(function ($rootScope, $location/*, $transitions*/) {
        // $transitions.onSuccess({}, function ($state, $transition$) {
        //     $rootScope.title = $state.current.title;
        // });
    });


// .config(['$stateProvider', '$urlRouterProvider',
//     function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/');
//
//     $stateProvider
//         .state('home', {
//             url:'/',
//             templateUrl: 'templates/home.html',
//             controller: 'HomeController'
//         })
//         .state('about', {
//             url:'/about',
//             templateUrl: 'templates/about.html',
//             controller: 'AboutController'
//         })
//
// }])
// inject the Todo service factory into our controller
//     .controller('mainController', function ($scope, $http, Todos) {
//         $scope.formData = {};
//
//         // GET =====================================================================
//         // when landing on the page, get all todos and show them
//         // use the service to get all the todos
//         Todos.get()
//             .then(function (res) {
//                 $scope.todos = res.data;
//             });
//
//         // CREATE ==================================================================
//         // when submitting the add form, send the text to the node API
//         $scope.createTodo = function () {
//
//             // validate the formData to make sure that something is there
//             // if form is empty, nothing will happen
//             // people can't just hold enter to keep adding the same to-do anymore
//             if (!$.isEmptyObject($scope.formData)) {
//
//                 // call the create function from our service (returns a promise object)
//                 // Todos.create($scope.formData)
//                 //
//                 // // if successful creation, call our get function to get all the new todos
//                 //     .then(function(data) {
//                 //         $scope.formData = {}; // clear the form so our user is ready to enter another
//                 //         $scope.todos = data; // assign our new list of todos
//                 //     });
//             }
//         };
//
//         // DELETE ==================================================================
//         // delete a todo after checking it
//         $scope.deleteTodo = function (id) {
//             // Todos.delete(id)
//             // // if successful creation, call our get function to get all the new todos
//             //     .then(function(data) {
//             //         $scope.todos = data; // assign our new list of todos
//             //     });
//         };
//     })
//     .controller('modalController',
//         function ($scope, ModalService) {
//
//             $scope.show = function () {
//                 ModalService.showModal({
//                     templateUrl: 'modal.html',
//                     controller: "ModalController"
//                 }).then(function (modal) {
//                     modal.element.modal();
//                     modal.close.then(function (result) {
//                         $scope.message = "You said " + result;
//                     });
//                 });
//             };
//         })
//     .controller('ModalController', function ($scope, close) {
//
//         $scope.close = function (result) {
//             close(result, 500); // close, but give 500ms for bootstrap to animate
//         };
//     });