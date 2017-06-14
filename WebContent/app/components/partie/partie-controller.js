var app = angular.module("tpAngular");


app.factory("PartieResource", function(API_URL, $resource) {
    return $resource(API_URL + '/score', null, {
        'afficher': { method: 'GET' }
    });
});


app.controller("partieController", function($scope, Page,PartieResource) {
	Page.setTitle("Parties");
    $scope.newPartie = {};
    $scope.parties = PartieResource.query();
});