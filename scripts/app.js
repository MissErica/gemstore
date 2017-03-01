$(function () {
    $('[data-toggle="popover"]').popover()
})









angular.module('myApp', ['ui.bootstrap', 'gemProducts']);

angular.module("myApp").controller("myController", ['$scope', '$http', function ($scope,$http) 
     {
    $http.get("/data/products.json").then(function(result){
        $scope.model = result.data;
    })
    
    $scope.cart = [];
    
    $scope.initialize = function () {
        console.log("Initilized");
    }
    $scope.addProduct = function (product) {
        $scope.cart.push(product);
        console.log("product added")
    }
}]
                
                
                );

            