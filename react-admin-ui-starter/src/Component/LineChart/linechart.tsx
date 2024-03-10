import "./Linechart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {Link} from "react-router-dom";


const data = [
    {
        name: '0',
        uv: 4069253847.625,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '4h',
        uv: 3505720061.625,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '8h',
        nameY: '4000',
        uv: 848010137.59375,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '12h',
        uv: 398010137.625,
        pv: 1571703996.9375,
        amt: 2000,
    },
    {
        name: '16h',
        uv: 3769253847.625,
        pv: 1040330248.59375,
        amt: 2181,
    },
    {
        name: '20h',
        uv: 2505720061.5,
        pv: 2505720061.5,
        amt: 2500,
    },
    {
        name: '24h',
        uv: 6132740174.375,
        pv: 6132740174.375,
        amt: 2100,
    },
];

const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',

});

const format = (number)=>
{
    const formattedNumber = numberFormatter.format(number);
    return formattedNumber;
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].payload.uv}`}</p>
            </div>
        );
    }
    return null;
};

function lineChart()
{

    const customYAxisTicks = [0,1000000000, 2000000000, 3000000000, 4000000000,5000000000]; // Customize this array with your desired Y-axis tick values

    const formatYAxisTick = (tick:any) =>
    {
        return (tick > 999999) ? `${(tick / 1000000)}M` : `${tick}`;
    };

    return (
        <div className="charts_container">
            <div className="charts_container_header">
                <h1>Traffic PS</h1>
                <div className="charts_container_Link">
                    <Link to={"/dashboard"}>View report</Link>
                    <img src="/CaretRight.svg" alt=""/>
                </div>

            </div>
            {/*
            <div className="charts_container_data">


            </div>
            */}

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
                        <YAxis ticks={customYAxisTicks} tickFormatter={formatYAxisTick} tickMargin={50} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="linear"
                              dataKey="uv"
                              stroke="#66B0FF"
                              fill="url(#colorUv)"
                              strokeWidth={4} />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default lineChart;