
(function(){

  var CustomersController =function($scope){
       $scope.sortBy='name';
       $scope.reverse=false;
       $scope.customers = [{name:'dinesh',city:'vadodara',joinDate:'1976-12-12',amount:'1200.25256'},{name:'manish',city:'delhi',joinDate:'2011-12-01',amount:'3200.3453'},{name:'vishal',city:'vadodara',joinDate:'2005-03-05',amount:'3500.35'},{name:'rikesh',city:'bharuch',joinDate:'2005-05-04',amount:'350.350350'},{name:'samir',city:'Anand',joinDate:'2005-05-05',amount:'350.80'}];
   
       $scope.doSort= function(propName){
          $scope.sortBy=propName;
          $scope.reverse=!$scope.reverse;
       };
   };

  //This is use for avoid the issue while minification of code ...
  CustomersController.$inject=['$scope'] 


	angular.module('demoApp').controller('CustomersController', CustomersController);
}());

 