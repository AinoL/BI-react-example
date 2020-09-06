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

// export let ageChartData: any[] = [];
export default class BarChart extends React.Component<{ data: LabelSeriesPoint[] }> {
  chartData: any[] = [];
  badData: any[] = [];
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

    let finalArray: { ageInterval: string, cases: string }[] = []
    // Export data to be modified elsewhere for a test. 
    // ageChartData = [...finalArray];
    ageIntervalsArray.map((a, i) => {
      finalArray.push({ ageInterval: a as string, cases: caseValuesArray[i] as string })
    });

    /**
     * TODO: Move last part of parsing to ReasonML library
     * Move first part of parsing to a service?
     * Define array + props types
     */
    // let chartData: { x: string, y: number, label: string }[] = []
    finalArray.map((a) => {
      this.chartData.push({ x: a.ageInterval as string, y: parseInt(a.cases) as number, label: '' })
    });
    this.badData = [
      ...this.chartData
    ];
    this.chartData.pop();
  }

  /**
   * TODO: Move datas to parent component and give them as parametres. This component should not return multiple charts. 
   */

  render() {
    const data = this.props.data;
    const chartData = this.chartData
    const badData = this.badData
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <h2>Todetut koronatapaukset ikäryhmittäin</h2>
        <div>
          <XYPlot xType="ordinal" width={100 * data.length} height={300} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries barWidth={0.5} data={chartData} />
          </XYPlot>
        </div>
        <h2>Esimerkki huonosti kuvatusta datasta, jossa poikkeava kolumni heikentää tiedon luettavuutta.</h2>
        <div>
          <XYPlot xType="ordinal" width={100 * data.length} height={300} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries barWidth={0.5} data={badData} />
          </XYPlot>
        </div>
      </div>
    );
  }
}
