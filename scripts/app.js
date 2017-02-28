var myApp = angular.module('myApp', []);


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
    ]
    
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
            canPurchase: false,
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
            canPurchase: false, 
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
             name: 'Turquoise',
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
    
    $scope.model = gems;
    
    $scope.initialize = function() {
        console.log("Initilized");
    }
    

});