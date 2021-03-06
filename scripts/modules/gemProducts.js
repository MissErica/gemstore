
angular.module("gemProducts", []); //this line defines the new directive





//using angular.module with one parameter will "fetch" the defined directive from the angular runtime, and you can add new directives/controllers to it
//this will be converted to snake case: gen-write-review
angular.module("gemProducts").directive("gemWriteReview", function () {
            return {
                restrict: 'A'
                , templateUrl: '/templates/gem-write-review.html'
                , controller: function ($scope) {
                    $scope.review = {};
                    $scope.addReview = function (product) {
                        if (!product.reviews) {
                            product.reviews = [];
                        }
                        product.reviews.push($scope.review);
                        //TODO: send this review to our API so it can be saved server-side
                        $scope.review = {};
                        //This resets the form after submission so it doesn't show error 
                        $scope.reviewForm.body.$setPristine();
                        $scope.reviewForm.author.$setPrisitne();
                        $scope.reviewForm.stars.$setPristine();
                    }
                    $scope.validate = function () {
                        //Touching each of the inputs in the current form to set them to dirty
                        //If they've been left blank, this will cause the has-error class to be applied
                        $scope.reviewForm.body.$setDirty();
                        $scope.reviewForm.author.$setDirty();
                        $scope.reviewForm.stars.$setDirty();
                        return $scope.reviewForm.$valid;
                    }
                }
            }
})



 angular.module("gemProducts").directive("gemPanels", function () {
                return {
                    restrict: 'A',
                     templateUrl: 'templates/gem-panels.html',
                     controller: function ($scope) {
                        $scope.tab = 1;
                        $scope.selectTab = function (tab) {
                            if (tab == $scope.tab) {
                                $scope.tab = -1;
                            }
                            else {
                                $scope.tab = tab;
                            }
                        }
                        $scope.isSelected = function (tab) {
                            return $scope.tab === tab;
                        }
                    }
                }
 })
                