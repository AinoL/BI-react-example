import React from 'react';
import demo from "reasonml-covid19/src/Demo.bs.js";

class Dashboard extends React.Component {
    render() {
      return (
        <div>Dashboard be here. {demo.sayHello}</div>
    );
    }

    componentDidMount() {
        demo.helloWorld();
    }
  }

export default Dashboard;
