'use strict';

angular.module('commenteerApp', ['commenteerApp.auth', 'commenteerApp.admin',
    'commenteerApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match', 'ui.pagedown', 'ngTagsInput'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
