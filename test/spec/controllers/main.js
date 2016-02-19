'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cardsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of cards to the scope', function () {
    expect(MainCtrl.cards.length).toBe(0);
  });

  it('should map image names to card codes', function () {
    expect(MainCtrl.getImageSrc({code:'CARD_274'})).toBe('images/card_274.png');
    expect(MainCtrl.getImageSrc({code:'CARD_822'})).toBe('images/card_822.png');
    expect(MainCtrl.getImageSrc({code:'CARD_315'})).toBe('images/card_315.png');
    expect(MainCtrl.getImageSrc({code:'CARD_539'})).toBe('images/card_539.png');
    expect(MainCtrl.getImageSrc({code:'CaRd_12345'})).toBe('images/card_12345.png');
  });

  // //After Initialize it should have 4 cards
  // it('After Initialize it should have 4 cards', function () {
  //   MainCtrl();
  //   expect(MainCtrl.cards.length).toBe(4);
  // });


});
