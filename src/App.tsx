import React from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import BarChart from './charts/BarChart'
import { XYPlot, LineSeries, LabelSeriesPoint } from 'react-vis';

function App() {

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

// Label is a required property regardless if you want to use it or not.
const barChartData: LabelSeriesPoint[] =
[
  { x: 10, y: 10, label: '' },
  { x: 20, y: 5, label: '' },
  { x: 30, y: 15, label: '' },
  { x: 40, y: 10, label: '' },
  { x: 50, y: 5, label: '' },
  { x: 60, y: 15, label: '' },
];

  return (
    <div>
      <div className="App">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
      </div>,
      <BarChart data={barChartData} />
      <div>testi</div>
    </div>
  );
}

export default App;
