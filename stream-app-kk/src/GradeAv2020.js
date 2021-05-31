//
//Kimone Kuppasamy 2021
//Creating table from my API for Average 2020 Grades
//
import './App.css';
import Axios from 'axios'
import React, { useState, useEffect } from 'react';

const GradeAv2020 = () => {
  const [grades, setGrades] = useState([])
  useEffect(() => {
    fetchGradeAv2020();
  }, [])
  useEffect(() => {
    console.log(grades)
  }, [grades])
  const fetchGradeAv2020 = async () => {
    const response = await Axios('https://kk-streamtestapi.herokuapp.com/grades/av2020');
    setGrades(response.data)
  }
  return (
    <div>

      <div id='gradeAv' className="App">
        <h2>2020 Average</h2>
        <table >
          {
            grades && grades.map(grade => {
              return (

                <tr>

                  <th id="avgTab">{grade.Avg2020}%</th>

                </tr>
              )

            })
          }
        </table>
      </div>
    </div>

  );
}

export default GradeAv2020;