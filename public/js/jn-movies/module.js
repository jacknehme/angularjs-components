(function() {
    "use strict";

    var module = angular.module('jnMovies', ['ngComponentRouter', 'ngAnimate']);

    module.value("$routerRootComponent", "movieApp");

    module.component("appAbout", {
        template: "This is the about page."
    });

})();