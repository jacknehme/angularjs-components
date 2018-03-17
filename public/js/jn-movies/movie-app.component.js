(function() {
    "use strict";

    angular.module("jnMovies")
        .component("movieApp", {
            templateUrl: "/js/jn-movies/movie-app.component.html",
            $routeConfig: [{
                path: "/list",
                component: "movieList",
                name: "List"
            }, {
                path: "/about",
                component: "appAbout",
                name: "About"
            }, {
                path: "/detail/:id/...", // ... for parent of nested component
                component: "movieDetails",
                name: "Details"
            }, {
                path: "/**",
                redirectTo: ["List"],
            }]
        })
})();