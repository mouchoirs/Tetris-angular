var app = angular.module("tpAngular");


app.factory("TetriminoResource", function(API_URL, $resource) {
    return $resource(API_URL + '/tetrimino', null, {
        'afficher': { method: 'GET' }
    });
});


app.controller("tetriminoController", function($scope, Page, TetriminoResource) {
	Page.setTitle("Tetriminos");
    $scope.newTetrimino = {};
    $scope.tetriminos = TetriminoResource.query();
});

