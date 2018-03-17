(function() {
    "use strict";

    angular.module("jnMovies")
        .component("movieDetails", {
            templateUrl: "/js/jn-movies/movie-details.component.html",
            // $canActivate: function($timeout) {
            //     return $timeout(function() {
            //         return true;
            //     }, 2000);
            // },
            $routeConfig: [
                { path: "/overview", component: "movieOverview", name: "Overview" },
                { path: "/cast", component: "movieCast", name: "Cast" },
                { path: "/director", component: "movieDirector", name: "Director" },
            ],
            controllerAs: "model",
            controller: function() {
                var model = this;

                model.$routerOnActivate = function(next, previous) {
                    model.id = next.params.id;
                }
            }
        })


})();