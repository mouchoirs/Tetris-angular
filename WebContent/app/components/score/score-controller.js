var app = angular.module("tpAngular");


app.factory("ScoreResource", function(API_URL, $resource) {
    return $resource(API_URL + '/score', null, {
        'add' : {method: 'POST'}
    });
});

app.controller("scoreController", function($scope, Page,ScoreResource) {
	Page.setTitle("Score");
    $scope.newScore = {};
    $scope.scores = ScoreResource.query();
    
    if (tetrisScore.points !=null){
    	$scope.scores=ScoreResource.add(tetrisScore.points);
    }
    
});




