'use strict';

describe('Component: QuestionsIndexComponent', function () {

  // load the controller's module
  beforeEach(module('commenteerApp'));

  var QuestionsIndexComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QuestionsIndexComponent = $componentController('QuestionsIndexComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
