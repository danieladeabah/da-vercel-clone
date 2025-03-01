export const chartOptions = computed(() => ({
  chart: { type: "line", toolbar: { show: false } },
  stroke: { curve: "smooth" },
  tooltip: { enabled: true },
}));

export const chartSeries = [
  {
    name: "Views",
    data: [
      1000, 1500, 5000, 1000, 4000, 4031, 3200, 2700, 3800, 2500, 4200, 3900,
      4500, 4700, 4300,
    ],
  },
  {
    name: "Clicks",
    data: [
      900, 1400, 1800, 1500, 2300, 2335, 2100, 1900, 2600, 2200, 3100, 2900,
      3300, 3500, 3100,
    ],
  },
];
