import React, { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import area from '../chart-data/cases-by-area.json'

import {
    RadialChart
} from 'react-vis';

export default function PieChart2() {

    useEffect(() => {
        console.log('component mounted!')
    }, []) //notice the empty array here

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
        chartData.push({ angle: a.cases, label: a.area});
    })

    const [state, setState] = React.useState({
        index: true,
        1: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
        setState({ ...state, [event.target.name]: event.target.checked });
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
                        <Switch
                            checked={state.index}
                            onChange={handleChange}
                            name={index.toString()}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <li >{value.label}</li>
                    </div>
                })}
            </ul>
        </div>)
}