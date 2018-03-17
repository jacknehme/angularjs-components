(function() {
    'use strict';

    angular
        .module("jnMovies")
        .component("movieRating", {
            templateUrl: "/js/jn-movies/movie-rating.component.html",
            bindings: { // like scope for directives but binds to the controller
                value: '<',
                max: '<',
                setRating: '&'
            },
            controllerAs: "model",
            controller: function() {
                var model = this;

                model.$onInit = function() {
                    model.entries = buildEntries(model.value, model.max);
                }

                model.$onChanges = function() {
                    model.entries = buildEntries(model.value, model.max);
                }
            }
        });

    function buildEntries(value, max) {
        var entries = [];
        for (let i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }
})();