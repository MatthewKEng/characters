angular.module('charApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/char1', {
           templateUrl: 'views/char1.html'
         }).when('/char2', {
           templateUrl: 'views/char2.html'
         }).when('/char3', {
           templateUrl: 'views/char3.html'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
