'use strict';

angular.module('commenteerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questionsShow', {
        url: '/questions/show/:id',
        template: '<questions-show></questions-show>'
      });
  });
