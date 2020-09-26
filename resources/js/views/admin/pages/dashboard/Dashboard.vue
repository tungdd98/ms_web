<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="row mb-4">
                <div class="mb-2 col-xl-3 col-md-6">
                    <stats-card
                        title="Total traffic"
                        type="gradient-red"
                        sub-title="350,897"
                        icon="icon icon-star"
                        class="mb-4 h-100"
                    >
                        <template slot="footer">
                            <span class="text-success mr-2">3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="mb-2 col-xl-3 col-md-6">
                    <stats-card
                        title="Total traffic"
                        type="gradient-orange"
                        sub-title="2,356"
                        icon="icon icon-key"
                        class="mb-4 h-100"
                    >
                        <template slot="footer">
                            <span class="text-success mr-2">12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="mb-2 col-xl-3 col-md-6">
                    <stats-card
                        title="Sales"
                        type="gradient-green"
                        sub-title="924"
                        icon="icon icon-heart"
                        class="mb-4 h-100"
                    >
                        <template slot="footer">
                            <span class="text-danger mr-2">5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="mb-2 col-xl-3 col-md-6">
                    <stats-card
                        title="Performance"
                        type="gradient-info"
                        sub-title="49,65%"
                        icon="icon icon-share-2"
                        class="mb-4 h-100"
                    >
                        <template slot="footer">
                            <span class="text-success mr-2">54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <div class="bg-default p-4 shadow-sm rounded">
                        <div class="row justify-content-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">
                                    Overview
                                </h6>
                                <h5 class="h3 text-white mb-0">Sales value</h5>
                            </div>
                            <div class="col">
                                <b-nav class="nav-pills justify-content-end">
                                    <b-nav-item
                                        class="mr-2 mr-md-0"
                                        :active="bigLineChart.activeIndex === 0"
                                        link-classes="py-2 px-3"
                                        @click.prevent="initBigChart(0)"
                                    >
                                        <span class="d-none d-md-block"
                                            >Month</span
                                        >
                                        <span class="d-md-none">M</span>
                                    </b-nav-item>
                                    <b-nav-item
                                        link-classes="py-2 px-3"
                                        :active="bigLineChart.activeIndex === 1"
                                        @click.prevent="initBigChart(1)"
                                    >
                                        <span class="d-none d-md-block"
                                            >Week</span
                                        >
                                        <span class="d-md-none">W</span>
                                    </b-nav-item>
                                </b-nav>
                            </div>
                        </div>
                        <line-chart
                            :height="350"
                            ref="bigChart"
                            :chart-data="bigLineChart.chartData"
                            :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>
                    </div>
                </div>

                <div class="mb-5 mb-xl-0 col-xl-4">
                    <div class="bg-white shadow-sm rounded p-4">
                        <h6 class="text-uppercase text-muted ls-1 mb-1">
                            Performance
                        </h6>
                        <h5 class="h3 mb-0">Total orders</h5>

                        <bar-chart
                            :height="350"
                            ref="barChart"
                            :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as chartConfigs from "@/components/charts/config";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";

export default {
    components: {
        LineChart,
        BarChart
    },
    data() {
        return {
            bigLineChart: {
                allData: [
                    [0, 20, 10, 30, 15, 40, 20, 60, 60],
                    [0, 20, 5, 25, 10, 30, 15, 40, 40]
                ],
                activeIndex: 0,
                chartData: {
                    datasets: [
                        {
                            label: "Performance",
                            data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
                        }
                    ],
                    labels: [
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ]
                },
                extraOptions: chartConfigs.blueChartOptions
            },
            redBarChart: {
                chartData: {
                    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Sales",
                            data: [25, 20, 30, 22, 17, 29]
                        }
                    ]
                },
                extraOptions: chartConfigs.blueChartOptions
            }
        };
    },
    methods: {
        initBigChart(index) {
            let chartData = {
                datasets: [
                    {
                        label: "Performance",
                        data: this.bigLineChart.allData[index]
                    }
                ],
                labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            };
            this.bigLineChart.chartData = chartData;
            this.bigLineChart.activeIndex = index;
        }
    },
    mounted() {
        this.initBigChart(0);
    }
};
</script>
