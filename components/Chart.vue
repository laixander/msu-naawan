<template>
    <ClientOnly>
        <apexchart width="100%" height="350" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>

<script setup lang="ts">
const chartOptions = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    colors: ["#87E8DE", "#95DE64", "#FFD666"],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        labels: {
            style: {
                fontSize: '12px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
            },
        },
    },
    yaxis: {
        // title: {
        //     text: '$ (thousands)'
        // }
        labels: {
            style: {
                fontSize: '12px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
            },
        },
    },
    legend: {
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        markers: {
            radius: 50,
        }
    },
    fill: {
        opacity: 1
    }
};
const series = [
    {
        name: 'Teaching Load',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
        name: 'Administrative Load',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
        name: 'Research and Development Load',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    },
];
</script>