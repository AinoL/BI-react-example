import React from 'react';
import demo from "reasonml-covid19/src/Demo.bs.js";
import age from '../chart-data/cases-by-age.json';
import ageChartData from '../charts/BarChart';

// Figure out how to make this typescript
class Dashboard extends React.Component {
    render() {
      return (
        <div>Dashboard be here. {demo.sayHello}</div>
      );
    }

    componentDidMount() {
        demo.helloWorld();
        // demo.modifyAgeData(ageChartData);
        // console.log(ageChartData);
      
        // demo.convertAgeData(age);

        // Decode JSON to better JSON and objects

        // var obj = JSON.parse(age);
        // console.log(obj);
    }
  }

export default Dashboard;
