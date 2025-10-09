import { Contact } from 'lucide-react'
import React, { use } from 'react'
import {  Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes=use(marksPromise)
    // console.log(marksData)
    const marksData= marksDataRes.data;

    // Data Processing for the chart

    const marksChartData= marksData.map(studentData=>{
        const student= {
            id: studentData.student_id,
            name: studentData.name,
            math: studentData.marks.math,
            science: studentData.marks.science,
            english:studentData.marks.math
        }
        const avg=(student.math + student.science + student.english)/3;
        student.avg=avg.toFixed(2)

        return student;
    })
    console.log(marksChartData);

  return (
    <div>
        <BarChart width={500} height={300} data={marksChartData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey='avg' fill='red'></Bar>
            <Bar dataKey='math' fill='green'></Bar>

        </BarChart>

    </div>
  )
}

export default MarksChart