'use strict';

angular.module('commenteerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<questions-index></questions-index>'
      });
  });
