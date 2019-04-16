(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.users = [];
            getUserData();

            function getUserData() {
                dataService.getUsers().then(function(result){
                    $scope.users = result;
                });
            }

            $scope.deleteUser = function (id) {
                dataService.deleteUser(id).then(function () {
                    toastr.success('User Deleted successfully!');
                    getUserData();
                }, function () {
                    toastr.error('Error while deleting user with Id:' + id);
                });
            }

        }])
        .controller('createUserCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createUser = function (user) {
                dataService.addUser(user).then(function () {
                    toastr.success('User created Successfully !');
                    $location.path('/');
                }, function () {
                    toastr.error('Error While creating user!');
                    });
            };
        }])
        .controller('updateUserCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParam, $location, dataService) {
            $scope.user = {};
            dataService.getUserById($routeParam.id).then(function (result) {
                $scope.user = result;
            }, function () {
                toastr.error('Error fetching user details ID:' + $routeParam.id);
            });


            $scope.updateUser = function (user) {
                dataService.updatedUser(user).then(function () {
                    toastr.success('User updated Successfully !');
                    $location.path('/');
                }, function () {
                    toastr.error('Error While updating user!');
                });
            };
        }]);

  
})();
