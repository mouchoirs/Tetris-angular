var app = angular.module("tpAngular");


app.factory("ScoreResource", function(API_URL, $resource) {
    return $resource(API_URL + '/score', null, {
        'afficher': { method: 'GET' }
    });
});


app.controller("scoreController", function($scope, Page,ScoreResource) {
	Page.setTitle("Score");
    $scope.newScore = {};
    $scope.scores = ScoreResource.query();
});