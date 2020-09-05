import React from 'react';
import demo from "reasonml-covid19/src/Demo.bs.js";
import age from '../chart-data/cases-by-age.json'

// Figure out how to make this typescript
class Dashboard extends React.Component {
    render() {
      return (
        <div>Dashboard be here. {demo.sayHello}</div>
      );
    }

    componentDidMount() {
        demo.helloWorld();
        demo.convertAgeData(age);
    }
  }

export default Dashboard;
