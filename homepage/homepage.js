const line_data = {
  labels: ["2022", "2023", "2024"], // Provide actual labels
  datasets: [
    {
      label: "Audience Impact",
      data: [100, 500, 100], // Insert your custom numbers here
      borderColor: "#3c9640",
    },
  ],
};

const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Gender Distribution",
      data: [649, 479],
      backgroundColor: ["#297e33", "#d3d3d3"],
      borderWidth: 0,
    },
  ],
};

const rData = {
  labels: ["Non Repeating Attendees", "Repeating Attendees"],
  datasets: [
    {
      label: "Attendees",
      data: [370, 1079 + 43],
      backgroundColor: ["#297e33", "#d3d3d3"],
      borderWidth: 0,
    },
  ],
};
const reach_data = {
  labels: [
    "Logic Building",
    "Amicode 2023",
    "Roadmap to DSA",
    "DSA Diaries 2.0",
    "Brain Busters",
  ], // Provide actual labels
  datasets: [
    {
      label: "Attendees",
      data: [400, 625, 425, 425, 375], // Insert your custom numbers here
      borderColor: "#D5D5D5",
      backgroundColor: "#12841F",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Audience Impact Over Time",
    },
  },
};

const reachOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Our Reach",
    },
  },
};

window.onload = function () {
  const ctxLine = document.getElementById("lineChart").getContext("2d");
  const ctxPie1 = document.getElementById("pieChart1").getContext("2d");
  const ctxPie2 = document.getElementById("pieChart2").getContext("2d");
  const ctxReachLine = document
    .getElementById("reachLineChart")
    .getContext("2d");

  new Chart(ctxLine, {
    type: "line",
    data: line_data,
    options: options,
  });

  new Chart(ctxPie1, {
    type: "pie",
    data: data,
  });

  new Chart(ctxPie2, {
    type: "pie",
    data: rData,
  });

  new Chart(ctxReachLine, {
    type: "bar", // Change to "bar"
    data: reach_data,
    options: reachOptions,
  });
};
