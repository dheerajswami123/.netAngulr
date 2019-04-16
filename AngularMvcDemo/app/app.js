(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/', {
                controller: 'userCtrl',
                templateUrl: 'app/templates/user.html'
            })
                .when('/createUser', {
                    controller: 'createUserCtrl',
                    templateUrl: 'app/templates/createUser.html'
                })
                .when('/updateUser/:id', {
                    controller: 'updateUserCtrl',
                    templateUrl: 'app/templates/updateUser.html'
                })
                .otherwise({ redirectTo: '/' });
        }])

})();