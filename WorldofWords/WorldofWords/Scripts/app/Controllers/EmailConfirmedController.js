﻿app.controller('EmailConfirmedController',
    function ($scope,
        $routeParams,
        $http,
        ConstService) {
    var code = $routeParams.code;
    var id = $routeParams.id;
    $http.get('/api/register/ConfirmEmail', {
        params: {
            code: code,
            userId: id
        }
    })
        .success(function () {
            $scope.stateMessage = ConstService.successMessage;
            $scope.actionMessage = ConstService.mayLoginMessage;
        })
        .error(function () {
            $scope.stateMessage = ConstService.failureMessage;
            $scope.actionMessage = ConstService.tryAgainMessage;
        });
});