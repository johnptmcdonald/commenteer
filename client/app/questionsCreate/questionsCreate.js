'use strict';

angular.module('commenteerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questionsCreate', {
        url: '/questions/create',
        template: '<questions-create></questions-create>'
      });
  });
