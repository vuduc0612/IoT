import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

//data
export const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Temperature",
      data: [30, 31, 29, 32, 30, 31, 29, 32, 30, 29, 28, 30], // Example temperature data
      borderColor: "#0075FF",
      backgroundColor: "rgba(0, 117, 255, 0.3)",
      fill: true,
      tension: 0.4
    },
    {
      label: "Humidity",
      data: [60, 62, 58, 65, 60, 63, 59, 64, 61, 60, 57, 62], // Example humidity data
      borderColor: "#00FF7F",
      backgroundColor: "rgba(0, 255, 127, 0.3)",
      fill: true,
      tension: 0.4
    },
  ],
};

export const lineChartDataLight = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Light",
      data: [500, 700, 800, 1000, 1200, 1500, 1600, 1400, 1200, 900, 600, 400], // Example realistic light data in Lux
      borderColor: "#2CD9FF",
      backgroundColor: "rgba(44, 217, 255, 0.3)",
      fill: true,
      tension: 0.4
    },
  ],
};
// chart.js

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "category",  // Changed from "datetime" to "category"
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#fff",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
};


