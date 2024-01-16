import React from 'react';
import "./PieChartBox.css";
import {PieChart, ResponsiveContainer, BarChart, Tooltip, Pie, Cell} from "recharts";

const data =
    [
        {name:"2G devices",value:400,color:"#007BFF"},
        {name:"3G devices",value:300,color:"#99CAFF"},
        {name:"4G devices",value:300,color:"#18D3CC"}

    ]
const PieChartBox =(props)=>
{
        return (

                <div className="pieChartBox">
                        <h1>{props.title}</h1>
                    <div className="chart">
                        <ResponsiveContainer width="99%" height={300}>
                            <PieChart>
                                <Tooltip
                                    contentStyle={{background:"white",borderRadius:"5px"}}
                                />
                                <Pie
                                    data={data}

                                    innerRadius={"70%"}
                                    outerRadius={"90%"}

                                    dataKey="value" >

                                    {data.map((item) => (
                                        <Cell key={item.name} fill={item.color} />
                                    ))}

                                </Pie>

                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="options">
                        {
                            data.map((item)=>
                                    (
                                        <div className="option" key={item.name}>
                                            <div className="rectangle" style={{backgroundColor: item.color}}></div>
                                            <span>{item.name}</span>
                                        </div>
                                    )
                            )
                        }
                    </div>
                </div>


        );

}

export default PieChartBox;