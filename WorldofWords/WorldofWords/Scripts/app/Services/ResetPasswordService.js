﻿app.service('ResetPasswordService', function ($http, $q, HttpRequest) {

    this.sendPasswordReset = function (userInfo) {
        var deferred = $q.defer();
        HttpRequest.post('api/register/ForgotPassword', userInfo, deferred);
        return deferred.promise;
    };
})