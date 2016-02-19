'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:VehiclesCtrl
 * @description
 * # VehiclesCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('VehiclesCtrl', function () {
    this.vehicles = [
      'Alfa Romeo',
      'Nissan',
      'Mazda'
    ];
  });
