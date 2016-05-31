'use strict';

describe('Component: QuestionsShowComponent', function () {

  // load the controller's module
  beforeEach(module('commenteerApp'));

  var QuestionsShowComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QuestionsShowComponent = $componentController('QuestionsShowComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
