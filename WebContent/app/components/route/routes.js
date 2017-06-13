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

        .when("/score", {
            templateUrl: "score.html",
            controller: "scoreController"
        })

});
