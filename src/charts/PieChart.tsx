import React from 'react';
import {
    RadialChart
} from 'react-vis';

export default class PieChart extends React.Component {

    render() {
        const myData = [{ angle: 1, label: 'yes' }, { angle: 5, label: 'no' }, { angle: 2, label: 'maybe' }]
        return (
            <div>
                <RadialChart
                    data={myData}
                    showLabels={true}
                    width={300}
                    height={300} />
            </div>

        )
    }
}