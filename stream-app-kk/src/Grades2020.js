//
//Kimone Kuppasamy 2021
//Creating table from my API for 2020 Grades
//

import './App.css';
import Axios from 'axios'
import React, { useState, useEffect } from 'react';

const Grades2020 = () => {
  const [grades, setGrades] = useState([])
  useEffect(() => {
    fetchGrades2020();
  }, [])
  useEffect(() => {
    console.log(grades)
  }, [grades])
  const fetchGrades2020 = async () => {
    const response = await Axios('https://kk-streamtestapi.herokuapp.com/grades/2020');
    setGrades(response.data)
  }
  return (
    <div>

      <div id='gradeAv' className="App">
        <h1>2020 Class Averages</h1>
        <table>
          <tr>
            <th>Grade</th>
            <th>Class</th>
            <th>Average</th>
            <th>No. Students</th>
            <th>No. Passed</th>
            <th>No. Failed</th>
          </tr>

          {
            grades && grades.map(grade => {
              return (

                <tr>

                  <td>{grade.grade}</td>
                  <td>{grade.class}</td>
                  <td>{grade.average}%</td>
                  <td>{grade.students}</td>
                  <td>{grade.passed}</td>
                  <td>{grade.failed}</td>

                </tr>
              )

            })
          }
        </table>
      </div>
    </div>

  );
}

export default Grades2020;