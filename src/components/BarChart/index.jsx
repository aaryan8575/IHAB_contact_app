'use client';
import React from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import styles from './BarChart.module.css';

const block = {
  topLeft: 10,
  topRight: 10,
};

const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'time usage',
      data: [360, 420, 470, 390, 450, 240, 410],
      backgroundColor: '#E9ECFB',
      hoverBackgroundColor: '#000080',
      borderRadius: block,
      maxBarThickness: 34.95,
    },
  ],
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, annotationPlugin);

export default function BarChart() {
  const chartData = data;

  const maxDataValue = Math.max(...chartData.datasets[0].data);
  const minval = 0;
  const maxval = Math.ceil(maxDataValue / 60) * 60;
  const arr = [...chartData.datasets[0].data];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }
  const valed = Math.floor(total / 7);

  const chartOptions = {
    plugins: {
      legend: false,
      title: {
        display: false,
        text: 'Daily Uses',
      },
      tooltip: {
        xAlign: 'center',
        yAlign: 'top',
        callbacks: {
          title: function (tooltipItem) {
            return '';
          },
          label: function (tooltipItem) {
            const datas = tooltipItem.raw;
            const hrs = Math.floor(Number(datas) / 60);
            const min = datas - 60 * hrs;
            return `${Number(hrs)} h ${Number(min)} m`;
          },
        },
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            yMin: valed,
            yMax: valed,
            borderColor: 'rgb(75,192,192)',
            borderwidth: 4,
            borderDash: [4, 2],
            label: {
              enabled: false,
              content: 'Test label',
            },
          },
        ],
        drawTime: 'afterdraw',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: 'Time',
          font: {
            weight: 'bold',
          },
        },
        min: minval,
        max: maxval, // Round up to the nearest hour
        ticks: {
          stepSize: Math.floor((maxval - minval) / 2),
          callback: (value) => {
            const hours = Math.floor(value / 60);
            return `${hours}hr`;
          },
        },
      },
    },
  };

  const theval = function () {
    const hrsn = Math.floor(Number(valed) / 60);
    const minn = valed - 60 * hrsn;
    return `${Number(hrsn)} h ${Number(minn)} m`;
  };

  return (
    <div>
      <div className={styles.graphcard}>
        <div className={styles.Analytics}>
          <p>Analytics</p>
        </div>
        <div className={styles.graph}>
          <div className={styles.avgtime}>
            <h1>Average Time Spent</h1>
            <br />
            <h3>{theval()}⬇️</h3>
            {/* <hr className={styles.hr}/> */}
          </div>
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className={styles.Analytics}>
          <a href="#">
            See More Insight <img src="/Arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
