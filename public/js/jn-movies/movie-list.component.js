(function() {
    "use strict";

    angular
        .module("jnMovies")
        .component("movieList", {
            templateUrl: "/js/jn-movies/movie-list.component.html",
            controllerAs: "model",
            controller: ['$http', controller]
        });

    function fetchMovies($http) {
        return $http.get("/json/movie.json")
            .then(function(response) {
                return response.data;
            });
    }

    function controller($http) {
        var model = this;
        model.movies = [];

        model.$onInit = function() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;
            })
        };

        model.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }
})();