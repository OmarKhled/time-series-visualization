import { Chart } from "react-google-charts";
import ChartHead from "./components/chartHead";
import rawData from "./data.json";
import formatData from "./lib/formatData";

const chart = formatData(rawData);

const options = {
  vAxis: { title: "anamoly" },
  chartArea: { width: "67%", height: "80%" },
  colors: chart.colors,
  series: {
    0: { areaOpacity: 0.7 },
    1: { areaOpacity: 0.7 },
    2: { areaOpacity: 0.7 },
  },
  legend: "top",
};

const App = () => {
  return (
    <div className="App">
      <div className="chart">
        <ChartHead />
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={chart.data}
          options={options}
        />
      </div>
    </div>
  );
};

export default App;
