var app = angular.module('tpAngular');


app.filter("formatDate", function() {
    return function(input) {
        return parseDate(input).toLocaleString();
    }
});