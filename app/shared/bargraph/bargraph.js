angular.module('myApp.visualisation').component('bargraph', {
    bindings: { value: "=" },
    controllerAs: "vm",
    templateUrl: 'shared/bargraph/bargraph.html',
    controller: ['$scope', '$rootScope', function($scope, $rootScope){

        var vm = this;

        // EVENT BINDING OVER GLOBAL SCOPE CAPTURES WHEN OUR PROMISE HAS RETURNED WITH DATA OVER API CALL
        $rootScope.$on('new-author-pushed', function () {

            function getSeries(){

                var series = [];
                angular.forEach(vm.value, function(val){
                    series.push({
                        name: val.author,
                        data: [val.comment_karma, val.link_karma]
                    })
                }, vm);

                return series;
            }

            Highcharts.chart('bargraph-container', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Stacked bar chart'
                },
                xAxis: {
                    categories: ['comment_karma', 'link_karma']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: getSeries()
            });

        })
    }]
});