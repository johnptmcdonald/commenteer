'use strict';

angular.module('commenteerApp.auth', ['commenteerApp.constants', 'commenteerApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
