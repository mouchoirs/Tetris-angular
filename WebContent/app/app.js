var app = angular.module("tpAngular", [ 'ngRoute', 'ngResource' ]);

app.constant("API_URL", "http://192.168.1.98:8080/tp-tetris-spring-mvc/api");

app.config(function(tetrisProvider){
	tetrisProvider.setLargeur(10);
	tetrisProvider.setHauteur(20);
	tetrisProvider.setSizeOfTetriminos(25);
})