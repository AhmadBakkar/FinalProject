import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Axios from "axios";

const VisualData = () => {
    const [chartData, setChartData] = useState({});




    const chartG = () => {
        let bmiA = [];
        let timeA = [];

        Axios.get("http://localhost:3001/Data", {
            
        }).then((res) => {
            console.log(res);

            for (const dataObj of res.data) {
                bmiA.push(parseInt(dataObj.Price));
                timeA.push(dataObj.Description);
            }
            console.log(bmiA);
            console.log(timeA);

            setChartData({
                labels: timeA,

                datasets: [
                    {
                        label: 'Prices in $',
                        data: bmiA,
                        backgroundColor: ['rgb(255,0,0)'],
                        borderWidth: 4
                    }]
            }
            )

        });
        


    };

    useEffect(() => {
        chartG();
    }, []);

    return (
        <div>
            <h1>Price Graph</h1>
            <div style={{ height: "750px", width: "750px"}}>
            <Line data={chartData} options={{
                    responsive: true,
                    title: { text: 'BMI value' },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    maxTickLimits: 20,
                                    beginAtZero: true
                                }
                            }
                        ],
                        xAxes: [
                            {
                                ticks: {
                                    maxTickLimits: 10,
                                    beginAtZero: true
                                }
                            }
                        ]

                    }
                }} />

            </div>
                
            
        </div>
    );
};

export default VisualData;