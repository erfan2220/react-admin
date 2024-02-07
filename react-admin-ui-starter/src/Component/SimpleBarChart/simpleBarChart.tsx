import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

import "./simpleBarChart.css"

const data = [
    {
        name: 'JUN',
        uv: 800,
        pv: 1000,
        amt: 2400,
    },
    {
        name: 'JUL',
        uv: 2000,
        pv: 2500,
        amt: 2210,
    },
    {
        name: 'AUG',
        uv: 2000,
        pv: 2200,
        amt: 2290,
    },
    {
        name: 'SEP',
        uv: 2780,
        pv: 1800,
        amt: 2000,
    },
    {
        name: 'OCT',
        uv: 1890,
        pv: 1500,
        amt: 2181,
    },
    {
        name: 'NOV',
        uv: 2390,
        pv: 2020,
        amt: 2500,
    },
    {
        name: 'DEC',
        uv: 3490,
        pv: 3000,
        amt: 2100,
    },
];

const RoundedBar = (props) => {
    const { x, y, height } = props;
    return (
        <g>
            <rect x={x} y={y} width={12} height={height} rx={10} ry={10} fill={props.fill} />
        </g>
    );
};

function SimpleBarChart() {

    const customYAxisTicks = ['0', '500', '1000','1500','2000','2500','3000' ];
    const customXAxisTicks = ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const formatYAxisTick = (tick) => {
        // Customize the tick labels as needed
        return tick > 999 ? `$${(tick / 1000).toFixed(1)}K` : `$${tick}`;
    };

    const CustomTooltip =()=>
    {
        return(<>

        </>)
    }
    return (
        <div className="charts_container">
            <div className="charts_container_header">
                <h1>Cells</h1>
                <div className="charts_container_Link">
                    <Link to={"/dashboard"}>View report</Link>
                    <img src="/CaretRight.svg" alt="" />
                </div>
            </div>

            <div className="charts_container_data">
                <div className="charts_container_data_left">
                    <h6>28,000,000</h6>
                    <span>Online Cells Over Time</span>
                </div>
                <div className="charts_container_data_icons">
                    <div className="rate_container">
                        <img src="/ratedown.svg" alt="rate" />
                        <p>12.5%</p>
                    </div>
                    <span>Since last month</span>
                </div>
            </div>

            <div className="main_barChart_container" >
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="name" ticks={customXAxisTicks} tickMargin={10} tickCount={7} padding={{left:40}} />
                        <YAxis   ticks={customYAxisTicks} tickFormatter={formatYAxisTick}  interval={0}  tickMargin={50}  />
                        <Tooltip cursor={false} content={<CustomTooltip />}/>
                        <Legend />
                        <Bar
                            dataKey="pv"
                            fill="#007BFF"
                            shape={<RoundedBar radius={10}/>}

                        />
                        <Bar
                            dataKey="uv"
                            fill="#18D3CC"
                            shape={<RoundedBar radius={10}/>}

                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SimpleBarChart;
