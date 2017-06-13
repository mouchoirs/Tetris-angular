var app = angular.module("tpAngular");


app.controller("homeController", function($scope, Page, utilisateurResource) {
	Page.setTitle("Accueil");
	
	$scope.connexion=function(){
		var user={
				username:$scope.username,
				password:$scope.password
		}
		utilisateurResource.connexion(user)
	}
});

app.factory("utilisateurResource", function(API_URL, $resource) {
    return $resource(API_URL + '/account/auth', null, {
        'connexion': { method: 'POST' }
    });
});
