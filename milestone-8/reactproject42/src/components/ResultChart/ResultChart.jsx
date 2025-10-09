import React from 'react'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
const resultDate = [
    {
        "id": 1,
        "name": "Aminul Islam",
        "math": 85,
        "science": 78,
        "english": 90
    },
    {
        "id": 2,
        "name": "Nusrat Jahan",
        "math": 92,
        "science": 88,
        "english": 81
    },
    {
        "id": 3,
        "name": "Rakib Hasan",
        "math": 76,
        "science": 69,
        "english": 72
    },
    {
        "id": 4,
        "name": "Farhana Akter",
        "math": 89,
        "science": 94,
        "english": 86
    },
    {
        "id": 5,
        "name": "Shakil Ahmed",
        "math": 64,
        "science": 72,
        "english": 70
    },
    {
        "id": 6,
        "name": "Sadia Karim",
        "math": 95,
        "science": 91,
        "english": 88
    },
    {
        "id": 7,
        "name": "Tareq Hossain",
        "math": 81,
        "science": 77,
        "english": 85
    },
    {
        "id": 8,
        "name": "Mitu Rahman",
        "math": 73,
        "science": 80,
        "english": 79
    },
    {
        "id": 9,
        "name": "Zahidul Islam",
        "math": 68,
        "science": 74,
        "english": 71
    },
    {
        "id": 10,
        "name": "Sumaiya Akter",
        "math": 90,
        "science": 89,
        "english": 93
    }
]



const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultDate}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey={'english'} stroke='red'></Line>
                <Line dataKey={'math'} stroke='green'></Line>
                <Line dataKey={'science'} stroke='pink'></Line>
            </LineChart>
            
           
        </div>
    )
}

export default ResultChart