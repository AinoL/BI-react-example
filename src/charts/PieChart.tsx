import React, { useState } from 'react';
import area from '../chart-data/cases-by-area.json'
import Switch from '@material-ui/core/Switch';

import {
    RadialChart
} from 'react-vis';

export default class PieChart extends React.Component {
    chartData: any[] = [];
    /**
     * 
     * TODO: Find out why constructor is run twice.
     *  Shouldn't probably put any parsing there in that case,
     *  but without hooks there seems to be no other way.
     */
    constructor(props: any) {
        super(props)
        const areaJsonAsString = JSON.stringify(area);
        const areaJsonAsObject = JSON.parse(areaJsonAsString);
        const areasObject = areaJsonAsObject.dataset.dimension.hcdmunicipality2020.category.label;
        const areaArray = Object.entries(areasObject);
        const areaCaseValues = areaJsonAsObject.dataset.dimension.hcdmunicipality2020.category.index;
        const areaCaseValuesArray = Object.entries(areaCaseValues);

        let finalArray: { area: string, cases: number }[] = [];
        areaArray.map((a) => {
            let matchedCase = areaCaseValuesArray.filter(c => c[0] === a[0]);
            finalArray.push({ area: a[1] as string, cases: matchedCase[0][1] as number })
        })

        let chartData: any[] = [];
        finalArray.map((a) => {
            this.chartData.push({ angle: a.cases, label: a.area, display: true });
        })


        // areaArray.filter(a => a[0] === )
    }


  handleChange = (index: number, event: any, checked: boolean) => {

    // @ts-ignore
    const list = Object.assign({}, this.state.switchState);

    list['switch-' + index] = checked;

    this.setState({
      switchState: list
    })
  }

  setDynamicSwitchState = (list: any) => {

    if (!list) {
      return
    }

    const switchState = {};

    list.forEach((item: any, index: number) => {
    // @ts-ignore
      switchState['switch-' + index] = false;
    });

    this.setState({
      switchState: switchState
    })
  }

    render() {
        const chartData = this.chartData
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target);
            // change state of being checked to false

        };

        return (
            <div>
                <div className="pie-chart">
                    <RadialChart
                        data={chartData}
                        showLabels={true}
                        labelsRadiusMultiplier={1.1}
                        width={400}
                        height={400} />
                </div>
                <ul>

                    {chartData.map((value, index) => {
                        return <div key={index}>
                            <Switch checked={true}
                                onChange={(event, checked) => this.handleChange(index, event, checked)}
                                value="checkedB"
                                color="primary"/>
                                <li >{value.label}</li>
                        </div>
                            })}
                </ul>
            </div>
        
                )
            }
}