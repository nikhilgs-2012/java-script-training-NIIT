
(function(){

  var CustomersController =function($scope){
       $scope.sortBy='name';
       $scope.reverse=false;
       
       $scope.customers = [
       {
          id:101,
          name:'dinesh',
          city:'vadodara',
          joinDate:'1976-12-12',
          amount:'1200.25256',
          orders: [{
                id:'1001',
                Products:'laptop',
                total:'100'
          }]
        },
       {
          id:102,
          name:'manish',
          city:'delhi',
          joinDate:'2011-12-01',
          amount:'3200.3453',
          orders:[{
              id:'1002',
              Products:'mouse',
              total:'1200'
          },
          {
              id:'1003',
              Products:'desktop',
              total:'12000'
          },
          {
              id:'1004',
              Products:'keyboard',
              total:'12000'
          }]
        },
       {
          id:103,
          name:'vishal',
          city:'vadodara',
          joinDate:'2005-03-05',
          amount:'3500.35',
          orders: [{
                id:'1001',
                Products:'laptop',
                total:'100'  
          }]
        },
       {
          id:104,        
          name:'rikesh',
          city:'bharuch',
          joinDate:'2005-05-04',
          amount:'350.350350',
          orders:[{
              id:'1002',
              Products:'mouse',
              total:'1200'
          }]
        },
       {
          id:105,
          name:'samir',
          city:'Anand',
          joinDate:'2005-05-05',
          amount:'350.80',
          orders:[{
              id:'1001',
              Products:'laptop',
              total:'1200'
          }]
        }

  ];
   
       $scope.doSort= function(propName){
          $scope.sortBy=propName;
          $scope.reverse=!$scope.reverse;
       };
   };

  //This is use for avoid the issue while minification of code ...
  CustomersController.$inject=['$scope'] 


	angular.module('demoApp').controller('CustomersController', CustomersController);
}());

 