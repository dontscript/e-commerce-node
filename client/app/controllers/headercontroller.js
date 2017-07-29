(function () {
    'use strict';

    angular
        .module('app.controllers.headercontroller', [])
        .controller('headerController', headerController);

    /** @ngInject */
    function headerController($scope, $window, $state) {
        var vm = this;

        init();

        function init() {}

    }

}());