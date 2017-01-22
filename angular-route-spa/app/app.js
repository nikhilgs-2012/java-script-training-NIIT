(function(){
var app = angular.module('demoApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
			.when('/',{
				controller:'CustomersController',
				templateUrl:'app/view/customersdetails.html'
			})
			.when('/orders/:customerID',{
				controller:'OrdersController',
				templateUrl:'app/view/orders.html'
			})
			.otherwise({ redirectTo :'/'});
			
	});

}());