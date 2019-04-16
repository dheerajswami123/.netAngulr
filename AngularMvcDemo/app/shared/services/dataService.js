(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http,$q) {
            var service = {};

            service.getUsers = function () {
                var deffered = $q.defer();
                $http.get('/User/Index').then(function (result) {
                    deffered.resolve(result.data);
                }, function () {
                    deffered.reject();
                    });
                return deffered.promise;
            };

            service.getUserById = function (id) {
                var deffered = $q.defer();
                $http.get('/User/Details/' + id).then(function (result) {
                    deffered.resolve(result.data);
                }, function () {
                    deffered.reject();
                });
                return deffered.promise;
            };

            service.addUser = function (user) {
                var deffered = $q.defer();
                $http.post('/User/Create/',user).then(function (result) {
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });
                return deffered.promise;
            };

            service.updatedUser = function (user) {
                var deffered = $q.defer();
                $http.post('/User/Update/', user).then(function (result) {
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });
                return deffered.promise;
            };

            service.deleteUser = function (id) {
                var deffered = $q.defer();
                $http.post('/User/Delete/', { id:id }).then(function (result) {
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });
                return deffered.promise;
            };

            return service;
        }]);

  
})();