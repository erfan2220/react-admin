import "./Linechart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {Link} from "react-router-dom";


const data = [
    {
        name: '18th',
        uv: 60,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '20th',
        uv: 35,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '22th',
        nameY: '4000',
        uv: 50,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '24th',
        uv: 40,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '26th',
        uv: 65,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '28th',
        uv: 40,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '30th',
        uv: 30,
        pv: 4300,
        amt: 2100,
    },
];


function lineChart()
{

    const customYAxisTicks = [0, 10, 20, 30, 40,50,60,70,80,90,100]; // Customize this array with your desired Y-axis tick values

    const formatYAxisTick = (tick:any) => {
        // Customize the tick labels as needed
        return `${tick}`;
    };

    return (
        <div className="charts_container">
            <div className="charts_container_header">
                <h1>Cells</h1>
                <div className="charts_container_Link">
                    <Link to={"/dashboard"}>View report</Link>
                    <img src="/CaretRight.svg" alt=""/>
                </div>

            </div>

            <div className="charts_container_data">
                <div className="charts_container_data_left">
                    <h2>820</h2>
                    <span>Active over nodes</span>
                </div>
                <div className="charts_container_data_icons">
                    <div className="rate_container_2">
                        <img src="/rateup.svg" alt="rate"/>
                        <p>12.5%</p>
                    </div>
                    <span>Since last month</span>
                </div>
            </div>

            <div className="main_barChart_container">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 10,
                            bottom: 10,
                        }}
                    >

                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#9bc9fb"  stopOpacity={0.8}/>
                                <stop offset="95%"  stopColor="#9AC7F8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid horizontal={false} strokeDasharray="0"/>
                        <XAxis dataKey="name" tickMargin={20} />
                        <YAxis ticks={customYAxisTicks} tickFormatter={formatYAxisTick} tickMargin={30} />
                        <Tooltip/>
                        <Area type="linear" dataKey="uv" stroke="#66B0FF" fill="url(#colorUv)"  strokeWidth={4} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default lineChart;