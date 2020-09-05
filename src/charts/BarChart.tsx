import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  LabelSeriesPoint
} from 'react-vis';

const greenData: LabelSeriesPoint[] = [{ x: 10, y: 10, label: '1' }, { x: 10, y: 5, label: '1' }, { x: 10, y: 15, label: '1' }];

// x: number;
// y: number;
// label: string;
// xOffset?: number;
// yOffset?: number;
// rotation?: number;

const blueData = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }, { x: 'C', y: 11 }];

const labelData: { x: number, y: number }[] = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

export default class BarChart extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" barWidth={1} data={greenData} />
          <BarSeries barWidth={1} data={blueData} />
          <LabelSeries data={greenData} />
        </XYPlot>
      </div>
    );
  }
}

// allowOffsetToBeReversed?: boolean;
// marginLeft?: number;
// marginTop?: number;
// rotation?: number; // default: 0
// labelAnchorX?: string;
// labelAnchorY?: string;