app.controller("ArticleController", function ($scope, $http) {

    $scope.GetArticleList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Article/GetAll"
        }).then(function (response) {
            $scope.articleList = response.data;
        });
    }

    $scope.GetArticleList();

    $scope.ArticleDelete = function (id) {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Article/Delete?articleId=" + id
        }).then(function (response) {
            alert("Makale silindi.");
            $scope.GetArticleList();
        });
    }

    $scope.ArticleActive = function (id) {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Article/SetActive?articleId=" + id
        }).then(function (response) {
            alert("Makale aktifleştirildi.");
            $scope.GetArticleList();
        });
    }

});