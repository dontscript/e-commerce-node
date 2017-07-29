(function () {
    'use strict';

    angular
        .module('myApp', [
            'ngAnimate',
            'ngSanitize',
            'ngCookies',
            //'ui.bootstrap',
            // 'ngMaterial',
            'ui.router',
            'app.controllers',
            'app.directives',
            'app.services'
        ])
        .config(mainConfig);

    /** @ngInject */
    function mainConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

        $stateProvider
            .state('blank', {
                abstract: true,
                views: {
                    'root': {
                        templateUrl: 'app/templates/blank.html',
                    }
                }
            })
            .state('structure', {
                abstract: true,
                views: {
                    'root': {
                        templateUrl: 'app/templates/structure.html',
                    }
                }
            })
            .state('structure.home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'app/templates/header.html',
                        controller: 'headerController',
                        controllerAs: 'vm'
                    },
                    'content': {
                        templateUrl: 'app/templates/home.html',
                        controller: 'mainController',
                        controllerAs: 'vm'
                    }
                }
            });
        // Send to home if the URL was not found
        $urlRouterProvider.otherwise("/");
    }

}());