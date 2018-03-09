(function() {
    'use strict';

    angular
        .module("jnMovies")
        .component("movieRating", {
            templateUrl: "/js/jn-movies/movie-rating.component.html",
            bindings: { // like scope for directives but binds to the controller
                value: '<'
            },
            transclude: true,
            controllerAs: "model",
            controller: function() {
                var model = this;

                model.$onInit = function() {
                    model.entries = new Array(model.value);
                }

                model.$onChanges = function() {
                    model.entries = new Array(model.value);
                }
            }
        });
})();