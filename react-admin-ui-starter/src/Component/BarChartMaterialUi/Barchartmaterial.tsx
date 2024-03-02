import "./Barchartmaterial.css"
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";




const RoundedBar = (props) => {
    const { x, y, height } = props;
    return (
        <g>
            <rect x={x} y={y} width={30} height={height} rx={4} ry={4} fill={props.fill} />
        </g>
    );
};




const BarChartMaterial = ({data}) => {

    const seriesColors = ['#007BFF', '#18D3CC', '#99CAFF'];


    const filter_counters = (vendor, type) =>
    {
        // console.log("filter_counters2",data)
        const filteredItems2 = data.sites_count.filter(item => item.vendor === vendor && item.type === type);


        // console.log("MMMMMMM", filteredItems2[0].count)
        const totalCount2 = filteredItems2.length > 0 ? filteredItems2[0].count : 0;

        // console.log("filter_counters_2",vendor,type,totalCount2)
        return totalCount2;
        // return filteredItems2.length > 0 ? filteredItems2[0].count : 0;
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const {  type, count } = payload[0].payload;

            return (
                <div className="custom-tooltip">
                    <h2>{`${payload[0].payload.name}`}</h2>
                    <div className="custom-tooltip_Item1">
                        <p>{`${payload[0].payload.uv}`}</p>
                        <div className="circle_uv">
                        </div>


                    </div>

                    <div className="custom-tooltip_Item2">
                        <p>{`${payload[1].payload.pv}`}</p>
                        <div className="circle_pv">
                        </div>


                    </div>

                    <div className="custom-tooltip_Item3">
                        <p>{`${payload[2].payload.cv}`}</p>
                        <div className="circle_cv">
                        </div>

                    </div>


                </div>
            );
        }

        return null;
    };


    const dataSet = [
        {
            name: 'Nokia',
            uv: filter_counters("NOKIA", "2G"),
            pv: filter_counters("NOKIA", "3G"),
            cv: filter_counters("NOKIA", "4G") },
        { name: 'Ericsson',
            uv: filter_counters("ERICSSON", "2G"),
            pv: filter_counters("ERICSSON", "3G"),
            cv: filter_counters("ERICSSON", "4G") },
        { name: 'Huawei',
            uv: filter_counters("HUAWEI", "2G"),
            pv: filter_counters("HUAWEI", "3G"),
            cv: filter_counters("HUAWEI", "4G") },
    ];

    const customYAxisTicks = ['0' ,'2000','4000','6000','8000','10000','12000','14000'];
    const customXAxisTicks = ['Nokia', 'Ericsson', 'Huawei'];
    const formatYAxisTick = (tick) => {
        // Customize the tick labels as needed
        return tick > 999 ? `${(tick / 1000)}K` : `${tick}`;
    };

    const CustomYAxisTick = ({ x, y, payload }) => (
        <text
            x={x}
            y={y}
            dy={7}
            textAnchor="end"
            fill="#666"
           className="label_border"
        >
            {payload.value > 999 ? `${(payload.value / 1000)}K` : `${payload.value}`}

        </text>
    );



    return (
        <div>
            <div className="Barchartmat_header">
                <h2>Site Status</h2>
                <div className="View_report">
                    <span>View Report</span>
                    <img src="./CaretRight (1).svg" alt=""/>

                </div>
            </div>
            <div className="Barchart_container_2">
                <div className="test_barchart_container">
                <ResponsiveContainer width="80%" height="100%" >
                    <BarChart
                        width={500}
                        height={300}
                        data={dataSet}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap={0}
                    >

                        <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                        <XAxis stroke="#757575" dataKey="name" ticks={customXAxisTicks}
                               tickMargin={10} tickCount={7} padding={{left:40}} fontWeight={600} />

                        {/*<YAxis  stroke="#757575" ticks={customYAxisTicks} tickFormatter={formatYAxisTick}  interval={0}  tickMargin={30}    className="custom-y-axis" />
                       */}

                        <YAxis
                            stroke="#757575"
                            ticks={customYAxisTicks}
                            tickFormatter={formatYAxisTick}
                            interval={0}
                            tickMargin={30}
                            tick={<CustomYAxisTick />} // Custom YAxis Tick component
                        />
                        <Tooltip cursor={false} content={<CustomTooltip  data={data}/>} />

                        <Bar
                            dataKey="uv"
                            fill="#007BFF"
                            shape={<RoundedBar radius={4}/>}
                        />
                        <Bar
                            dataKey="pv"
                            fill="#18D3CC"
                            shape={<RoundedBar radius={4}/>}
                        />
                        <Bar
                            dataKey="cv"
                            fill="#99CAFF"
                            shape={<RoundedBar radius={4}/>}

                        />
                    </BarChart>
                </ResponsiveContainer>
                </div>



                <div className="data_symbols">
                    <div className="data_symbols_items">
                        <img src="./Rectangle_2G.svg" alt=""/>
                        <span>2G Sites</span>
                    </div>

                    <div className="data_symbols_items">
                        <img src="./Rectangle_3G.svg" alt=""/>
                        <span>3G Sites</span>
                    </div>

                    <div className="data_symbols_items">
                        <img src="./Rectangle_4G.svg" alt=""/>
                        <span>4G Sites</span>
                    </div>


                </div>


            </div>


        </div>
    );
};

export default BarChartMaterial;