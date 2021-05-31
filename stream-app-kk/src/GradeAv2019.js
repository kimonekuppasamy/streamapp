//
//Kimone Kuppasamy 2021
//Creating table from my API for average 2019 Grades
//
import './App.css';
import Axios from 'axios'
import React, { useState, useEffect } from 'react';

const GradeAv2019 = () => {
    const [grades, setGrades] = useState([])
    useEffect(() => {
        fetchGradeAv2019();
    }, [])
    useEffect(() => {
        console.log(grades)
    }, [grades])
    const fetchGradeAv2019 = async () => {
        const response = await Axios('https://kk-streamtestapi.herokuapp.com/grades/av2019');
        setGrades(response.data)
    }
    return (
        <div>

            <div id='gradeAv' className="App">
                <h2>2019 Averages</h2>
                <table>
                    {
                        grades && grades.map(grade => {
                            return (

                                <tr>

                                    <th id="avgTab" >{grade.Avg2019}%</th>

                                </tr>
                            )

                        })
                    }
                </table>
            </div>
        </div>

    );
}

export default GradeAv2019;