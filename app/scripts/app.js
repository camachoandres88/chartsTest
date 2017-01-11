(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name chartsTestApp
     * @description
     * # chartsTestApp
     *
     * Main module of the application.
     */

    angular
        .module('chartsTestApp', [
            'ui.router',
            'chart.js',
            'chartsTestApp.modules',
            'chartsTestApp.directives',
            'chartsTestApp.services'
        ]);
})();
