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
import age from '../chart-data/cases-by-age.json'

export default class BarChart extends React.Component<{ data: LabelSeriesPoint[] }> {
  chartData: any[] = [];
  state = {
    useCanvas: false
  };

  constructor(props: any) {
    super(props);
    const ageJsonAsString = JSON.stringify(age);
    const ageJsonAsObject = JSON.parse(ageJsonAsString)
    const ageIntervalsObject = ageJsonAsObject.dataset.dimension.ttr10yage.category.label;
    const ageIntervalsArray = Object.values(ageIntervalsObject).sort();

    const caseValuesObject = ageJsonAsObject.dataset.value;
    const caseValuesArray = Object.values(caseValuesObject);
    
    let finalArray: { ageInterval: string, cases: string}[] = []
    ageIntervalsArray.map((a, i) => {
      finalArray.push({ ageInterval: a as string, cases: caseValuesArray[i] as string})
    });

    // This can be moved to ReasonML library
    // let chartData: { x: string, y: number, label: string }[] = []
    finalArray.map((a) => {
      this.chartData.push({x: a.ageInterval as string, y: parseInt(a.cases) as number, label: ''})
    });
  }

  render() {
    const data = this.props.data;
    const chartData = this.chartData;
    console.log(chartData.length);
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot xType="ordinal" width={100 * data.length} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries barWidth={0.5} data={chartData} />
        </XYPlot>
      </div>
    );
  }
}
