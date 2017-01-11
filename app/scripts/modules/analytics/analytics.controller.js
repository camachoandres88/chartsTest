(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name chartsTestApp.modules.analytics:AnalyticsController
     * @description
     * # AnalyticsController
     * Controller that supports all the logic to display the charts
     */

    angular
        .module('chartsTestApp.modules.analytics')
        .controller('AnalyticsController', AnalyticsController);

    AnalyticsController.$inject = ['ChartService'];

    function AnalyticsController(ChartService) {
        var vm = this;
        vm.doughnutData = ChartService.getDoughnutData();
        vm.barData = ChartService.getBarData();
        vm.lineData = ChartService.getLineData();
    }
})();
