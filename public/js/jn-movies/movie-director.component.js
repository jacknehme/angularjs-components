(function() {
    "use strict";

    angular.module("jnMovies")
        .component("movieDirector", {
            template: "this is info about the director"
                //templateUrl: "/js/jn-movies/movie-director.component.html",
                // $routeConfig: [
                //     { path: "/overview", component: "movieOverview", name: "Overview" },
                //     { path: "/cast", component: "movieCast", name: "Cast" },
                //     { path: "/director", component: "movieDirector", name: "Director" },
                // ],
                // controllerAs: "model",
                // controller: function() {
                //     var model = this;

            //     model.$routerOnActivate = function(next, previous) {
            //         model.id = next.params.id;
            //     }
            // }
        });
})();