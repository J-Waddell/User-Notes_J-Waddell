console.log('hey boo-boo');

let app = angular.module('userNotesApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/notes', {
            controller:'noteCtrl',
            templateUrl:'partials/newNote.html'
        })
        .when('/list', {
            controller:'listCtrl',
            templateUrl:'partials/noteList.html'
        })
        .when('/login', {
            controller:'loginCtrl',
            templateUrl:'partials/login.html'
        })
        .when('/registration', {
            controller:'registerCtrl',
            templateUrl:'partials/registration.html'
        })

})

app.controller('noteCtrl', function($scope) {
    $scope.notes='notes'
    console.log('list')

})

app.controller('listCtrl', function($scope) {
    $scope.list='list'
})

app.controller('loginCtrl', function($scope) {
    $scope.login='login'
})

app.controller('registerCtrl', function($scope) {
    $scope.register='register'
})