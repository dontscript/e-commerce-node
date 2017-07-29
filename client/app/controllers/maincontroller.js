(function(){
    'use strict';

    angular
        .module('app.controllers.maincontroller', [])
        .controller('mainController', mainController);

    /** @ngInject */
    function mainController($scope, $cookies) {
        var vm = this;
        
        init();

        function init() {
        }
        
    }

}());