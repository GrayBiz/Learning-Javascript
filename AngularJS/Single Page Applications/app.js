var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});


myApp.service('nameService', function (){
    
    var self = this;
    
    this.name = 'John Doe';
    
    this.namelength = function() {
        
        return self.name.length;
    }
})


//myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
//    $scope.name = "Main";
//}]);

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
        
    }
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', 'nameService', '$routeParams', function ($scope, $log, nameService, $routeParams) {
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
    $scope.num = $routeParams.num || 1;
    
    $log.second = 'Second Property';
    $log.log($log);
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);


myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true
    }
});