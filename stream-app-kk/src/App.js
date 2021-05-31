import './App.css';
import React, { Component } from 'react';
import Grades2019 from './Grades2019';
import Grades2020 from './Grades2020';
import GradeAv2019 from './GradeAv2019';
import GradeAv2020 from './GradeAv2020';
class App extends Component {
  render() {
    return (

      <body>
        <h1 id="mainHeading">Mr McStream School Test Scores</h1>
        <div class="grid-container">
          <div><GradeAv2019 /></div>
          <div><GradeAv2020 /></div>
          <div><Grades2019 /></div>
          <div><Grades2020 /></div>
        </div>
      </body>
    );

  }
}

export default App;
//this script is to import and display the js files that call the api