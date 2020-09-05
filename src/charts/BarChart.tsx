import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeriesPoint
} from 'react-vis';

// const data = this.props.data;
// Label is a required property regardless if you want to use it or not.
// const data: LabelSeriesPoint[] =
//   [
//     { x: 10, y: 10, label: '' },
//     { x: 20, y: 5, label: '' },
//     { x: 30, y: 15, label: '' },
//     { x: 40, y: 10, label: '' },
//     { x: 50, y: 5, label: '' },
//     { x: 60, y: 15, label: '' },
//   ];

export default class BarChart extends React.Component<{data: LabelSeriesPoint[]}> {
  state = {
    useCanvas: false
  };
  
  render() {
    const data = this.props.data; 
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot xType="ordinal" width={50 * data.length} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries barWidth={0.5} data={data} />
        </XYPlot>
      </div>
    );
  }
}
