var app = angular.module("tpAngular");


app.factory("TetriminoResource", function(API_URL, $resource) {
    return $resource(API_URL + '/tetrimino', null, {
        'afficher': { method: 'POST' }
    });
});



app.controller("tetriminoController", function($scope, TetriminoResource) {
    $scope.newTetrimino = {};
    $scope.tetrimino = TetriminoResource.query();
    TetriminoResource.afficher(tetrimino)
});