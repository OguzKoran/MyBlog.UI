var app = angular.module('LoginApp', []);

app.controller("LoginController", function ($scope, $http) {
    $scope.Login = function () {
        $http({
            method: "POST",
            url: "https://localhost:7019/api/User/Login",
            data: $scope.login
        }).then(function (response) {
            if (response.data.webtoken == null) {
                alert("Kullanıcı adınızı veya şifrenizi yanlış girdiniz.")
            }
            else {
                localStorage.setItem("webtoken", response.data.webtoken);
                window.location.href="/Admin/Home/Index";
            }
        });
    }
});