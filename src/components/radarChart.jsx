import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = () => {
  const data = {
    labels: [
      "React.js",
      "HTML5/CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "SQL/MySQL",
      "Python",
      "Machine Learning",
      "Git/GitHub",
    ],
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [90, 95, 95, 90, 85, 80, 85, 80, 75, 85, 80, 85],
        backgroundColor: "rgba(34, 211, 238, 0.25)",
        borderColor: "#22d3ee",
        borderWidth: 2,
        pointBackgroundColor: "#22d3ee",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#22d3ee",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)", // Color of angle lines
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Color of grid lines
        },
        pointLabels: {
          font: {
            size: 11,
          },
          color: "#e4e7ec",
        },
        ticks: {
          beginAtZero: true,
          color: "#9ca3af", // Tick mark color
          stepSize: 20, // Increment for tick values
          min: 0,
          max: 100, // Fix the radial scale to 0-100 so changing one value doesn't rescale the chart
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#22d3ee",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div
      className="flex justify-center mt-5 h-full w-full max-w-[30rem] mx-auto"
      style={{ height: "100%", width: "100%" }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};
