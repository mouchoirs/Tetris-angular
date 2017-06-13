var app = angular.module("tpAngular"); 


app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./app/components/home/home.html",
			controller: "homeController"
		})
		
		.when("/partie", {
         templateUrl: "./app/components/partie/partie.html",
         controller: "partieController"
		})

		.when("/tetrimino", {
         templateUrl: "./app/components/tetrimino/tetrimino.html",
         controller: "tetriminoController"
		})
     
		.when("/account", {
         templateUrl: "./app/components/account/account.html",
         controller: "accountController"
		})
		
}); 