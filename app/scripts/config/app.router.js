(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name chartsTestApp:RouterConfig
     * @description
     * # RouterConfig
     * Main router for chartsTestApp
     */

    angular
        .module('chartsTestApp')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/analytics');
    }
})();
