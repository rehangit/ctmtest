'use strict';

/**
 * @ngdoc overview
 * @name cardsApp
 * @description
 * # cardsApp
 *
 * Main module of the application.
 */
angular
  .module('cardsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cards.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/vehicles', {
        templateUrl: 'views/vehicles.html',
        controller: 'VehiclesCtrl',
        controllerAs: 'vehicles'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
