var app = angular.module('myApp');
/*
* Configuration des routes
*/
app.config(function($routeProvider) {
    $routeProvider
        .when("/partie", {
            templateUrl: "partie.html",
            controller: "partieController"
        })

        .when("/tetrimino", {
            templateUrl: "tetrimino.html",
            controller: "tetriminoController"
        })
        
        .when("/account", {
            templateUrl: "account.html",
            controller: "accountController"
        })
        
});
