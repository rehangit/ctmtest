'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('MainCtrl', function ($http, $timeout) {
    var main = this;
    main.cards = [];
    main.selected = null;
    main.selectPanel = selectPanel;
    main.getImageSrc = getImageSrc;

    // this should be moved to a service    
    $http.get('model/cards.json').success(function(data) {
      main.cards = data;
      main.selected = main.cards[0];
    });


    function selectPanel(card) {
      if(card===main.selected) {
        main.selected = null;
      } else {
        main.selected = card;
        $timeout(function() {
          var active = $(".cards-panel.active");
          $("html,body").animate({scrollTop: active.offset().top-20}, 'fast');
        }, 500);
      }
    }

    function getImageSrc(card) {
      // use the following pattern to allow
      // usemin to replace image path/names of the known images
      // with minified ones
      var namemap = {
        'CARD_274': 'images/card_274.png',
        'CARD_822': 'images/card_822.png', 
        'CARD_315': 'images/card_315.png', 
        'CARD_539': 'images/card_539.png' 
      };

      return (card.code in namemap ? 
        namemap[card.code] :
        'images/' + card.code.toLowerCase() + '.png');
    }
  
  });

