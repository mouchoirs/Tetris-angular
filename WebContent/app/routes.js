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

		.when("/score", {
         templateUrl: "./app/components/score/score.html",
         controller: "scoreController"
		})

		.when("/partie/tetris", {
	         templateUrl: "./app/components/tetris/tetris.html",
	         controller: "tetrisController"
			})

		
}); 