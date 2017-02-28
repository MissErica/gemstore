
$(function () {
  $('[data-toggle="popover"]').popover()
})

var myApp = angular.module('myApp', ['ui.bootstrap']);


var gems = [{
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lustre, beyond their shine...Dodecahedron is one of those gems',
    canPurchase: true,
    images:[
        {
            fullSize: '/images/gem-01.gif'
        },
        {
            fullSize: '/images/gem-02.gif'
        },
    ],
    reviews: [
        {
            stars: 5,
            body: "I love this product",
            author:"erica@gmail.com"
        },
        {
            stars: 3,
            body: "this was ok",
            author: "jon"
        },
        {
            stars:4,
            body:"this was lovely",
            author:"dorothy from ohio"
        },
    ],
}, 
           {
             name: 'Pentagonal',
            price: 5.95,
            description: 'Best seller!',
            canPurchase: true, 
            images:[
        {
            fullSize: '/images/gem-03.gif'
        },
        {
            fullSize: '/images/gem-04.gif'
        },
    ]
               
           },
            {
             name: 'Hexagonal',
            price: 12.95,
            description: 'Best seller!',
            canPurchase: true,  
            images:[
        {
            fullSize: '/images/gem-05.gif'
        },
        {
            fullSize: '/images/gem-06.gif'
        },
    ]    
               
           },
            {
             name: 'Azurite',
            price: 7.95,
            description: 'Best seller!',
            canPurchase: true,
                images:[
        {
            fullSize: '/images/gem-07.gif'
        },
        {
            fullSize: '/images/gem-08.gif'
        },
    ]
               
           },
            {
             name: 'Feldspar',
            price: 2.95,
            description: 'Best seller!',
            canPurchase: true, 
                images:[
        {
            fullSize: '/images/gem-09.gif'
        },
        {
            fullSize: '/images/gem-10.gif'
        },
    ]
               
           },
            {
             name: 'Ruby',
            price: 8.95,
            description: 'Best seller!',
            canPurchase: true,  
                images:[
        {
            fullSize: '/images/gem-01.gif'
        },
        {
            fullSize: '/images/gem-02.gif'
        },
    ]
               
           }
        
          ]



myApp.controller('myController', function($scope) {
    $scope.cart=[];
    $scope.model = gems;
    
    $scope.initialize = function() {
        console.log("Initilized");
    }
    
    $scope.addProduct = function(product){
        $scope.cart.push(product);
        console.log("product added")
    }

});



myApp.controller('panelController', function($scope){
    $scope.tab = 1;
    $scope.selectTab = function(tab){
        if(tab == $scope.tab){
            $scope.tab = -1
        } else {
            $scope.tab = tab;
        }
        console.log("tab changed to "+ tab)
    };
    
    $scope.isSelected = function(tab){
        return $scope.tab === tab;
    };
});


myApp.controller("reviewController",function($scope){
    $scope.review={};
    
    $scope.addReview= function(product){
        if(!product.reviews) {
            product.reviews = [];
        }
        product.reviews.push($scope.review);
        //TODO: send this review to our API so it can be saved server-side
        $scope.review = {};
    };
});

