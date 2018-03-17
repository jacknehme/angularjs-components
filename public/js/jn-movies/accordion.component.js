(function() {
    "use strict";

    angular.module("jnMovies")
        .component("accordion", {
            transclude: true,
            template: '<div class="panel-group" ng-transclude></div>',
        })
        .component('accordionPanel', {
            transclude: true,
            bindings: {
                "heading": "@",
            },
            controllerAs: "model",
            template: '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                '<h4 class="panel-title">{{model.heading}}</h4>' +
                '</div>' +
                '<div class="panel-body" ng-transclude>' +
                '</div>' +
                '</div>'
        })
})();