(function() {
    "use strict";

    angular.module("jnMovies")
        .component("movieCast", {
            template: "this is info about the cast"
                //templateUrl: "/js/jn-movies/movie-cast.component.html",
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