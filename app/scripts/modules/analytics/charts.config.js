(function() {
    'use strict';
    angular
        .module('chartsTestApp.modules.analytics')
        .config(ChartsConfig);

    ChartsConfig.$inject = ['ChartJsProvider'];

    function ChartsConfig(ChartJsProvider) {
        ChartJsProvider.setOptions({
            legend: {
                display: true
            },
            colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        });
    }
})();
