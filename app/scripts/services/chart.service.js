(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name chartsTestApp.services:ChartService
     * @description
     * # ChartService
     * Service to emulate a rest consumption
     */

    angular
        .module('chartsTestApp.services')
        .factory('ChartService', ChartService);

    ChartService.$inject = [];

    function ChartService() {

        var service = {
            getBaseData: getBaseData,
            getDoughnutData: getDoughnutData,
            getBarData: getBarData,
            getLineData: getLineData
        };

        return service;

        function getBaseData() {
            return [
                { "zoneId": "Calle 85", "data": { "count": 1, "speed": 10, "time": 1466781876681 } },
                { "zoneId": "Salitre plaza", "data": { "count": 2, "speed": 8.5, "time": 1466781876681 } },
                { "zoneId": "Parque 93", "data": { "count": 4, "speed": 15, "time": 1466781876681 } },
                { "zoneId": "Calle 80", "data": { "count": 3, "speed": 13.5, "time": 1466781876681 } },
                { "zoneId": "Centro", "data": { "count": 1, "speed": 9, "time": 1466781876681 } }
            ]
        }

        function getDoughnutData() {
            var baseData = getBaseData(),
                doughnutData = { labels: [], data: [] };

            for (var i = 0; i < baseData.length; i++) {
                doughnutData.labels.push(baseData[i].zoneId);
                doughnutData.data.push(baseData[i].data.speed * getRandomInt(1, 10));
            }
            doughnutData.options = {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                responsive: true
            };

            return doughnutData;
        }


        function getBarData() {
            var baseData = getBaseData(),
                barData = { labels: [], data: [], series: [] };

            for (var i = 0; i < baseData.length; i++) {
                barData.series.push(baseData[i].zoneId);
                barData.labels.push(baseData[i].zoneId);
                barData.data.push(baseData[i].data.count * getRandomInt(1, 10));
            }
            barData.options = {
                legend: {
                    display: false,
                },
                responsive: true
            };

            return barData;
        }

        function getLineData() {
            var baseData = getBaseData(),
                barData = { labels: [], data: [], series: [] };

            for (var i = 0; i < baseData.length; i++) {
                barData.series.push(baseData[i].zoneId);
                barData.labels = getRandomLabelsForLineChart(baseData[i].data.time, 10);
                barData.data = getRandomDataForLineChart(10, barData.series.length);
            }
            barData.options = {
                legend: {
                    display: true,
                    position: 'right'

                },
                responsive: true
            };

            return barData;
        }

        function getRandomDataForLineChart(quantity, numberOfSeries) {
            var result = [];
            for (var i = 0; i < numberOfSeries; i++) {
                var data = [];
                for (var j = 0; j < quantity; j++) {
                    data.push(getRandomInt(1, 100));
                }
                result.push(data);
            }
            return result;
        }

        function getRandomLabelsForLineChart(start, quantity) {
            var date = moment(start),
                result = [];
            for (var i = 0; i < quantity; i++) {
                result.push(date.format('YYYY-MM-DD'));
                date.add(1, 'day');
            }
            return result;

        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
})();
