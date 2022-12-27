app.controller("CategoryController", function ($scope, $http) {

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Category/GetAll"
        }).then(function (response) {
            $scope.categoryList = response.data;
        });
    }

    $scope.GetCategoryList();
    
    $scope.CategoryDelete = function (id) {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Category/Delete?categoryId=" + id
        }).then(function (response) {
            alert("Kategori silindi.");
            $scope.GetCategoryList();
        });
    }

    $scope.CategoryActive = function (id) {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7019/api/Category/SetActive?categoryId=" + id
        }).then(function (response) {
            alert("Kategori aktifleştirildi.");
            $scope.GetCategoryList();
        });
    }
});