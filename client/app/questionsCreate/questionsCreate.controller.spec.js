'use strict';

describe('Component: QuestionsCreateComponent', function () {

  // load the controller's module
  beforeEach(module('commenteerApp'));

  var QuestionsCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QuestionsCreateComponent = $componentController('QuestionsCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
