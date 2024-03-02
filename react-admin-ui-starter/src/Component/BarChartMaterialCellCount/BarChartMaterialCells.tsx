import "./BarChartMaterialCells.css"
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";









const RoundedBar_2 = (props) => {
    const { x, y, height } = props;
    return (
        <g id="d2">
            <rect x={x} y={y} width={30} height={height} rx={4} ry={4} fill={props.fill} />
        </g>
    );
};



const BarChartMaterialCells = ({dataPerProvince}) => {

    const seriesColors = ['#007BFF', '#18D3CC', '#99CAFF'];


    const filter_counters_2 = (vendor, type) =>
    {
        // console.log("MMMMMMMMMMMM",dataPerProvince)
        const filteredItems = dataPerProvince.cells_count.filter( item => item.vendor === vendor
            && item.type === type);

        return filteredItems.length > 0 ? filteredItems[0].count : 0;


    }

    const CustomTooltip = ({ active, payload, label }) =>
    {
        if (active && payload && payload.length)
        {
            const {  type, count } = payload[0].payload;


            return (
                <div className="custom-tooltip">
                    <h2>{`${payload[0].payload.name}`}</h2>
                    <div className="custom-tooltip_Item1">
                        <div className="circle_uv">
                        </div>


                        <p>{`${payload[0].payload.uv2}`}</p>

                    </div>

                    <div className="custom-tooltip_Item2">
                        <div className="circle_pv">
                        </div>
                        <p>{`${payload[1].payload.pv2}`}</p>

                    </div>

                    <div className="custom-tooltip_Item3">
                        <div className="circle_cv">
                        </div>
                        <p>{`${payload[2].payload.cv2}`}</p>
                    </div>


                </div>
            );
        }

        return null;
    };


    const dataSet2 = [
        {
            name: 'Nokia',
            uv2: filter_counters_2("NOKIA", "2G"),
            pv2: filter_counters_2("NOKIA", "3G"),
            cv2: filter_counters_2("NOKIA", "4G") },
        { name: 'Ericsson',
            uv2: filter_counters_2("ERICSSON", "2G"),
            pv2: filter_counters_2("ERICSSON", "3G"),
            cv2: filter_counters_2("ERICSSON", "4G") },
        { name: 'Huawei',
            uv2: filter_counters_2("HUAWEI", "2G"),
            pv2: filter_counters_2("HUAWEI", "3G"),
            cv2: filter_counters_2("HUAWEI", "4G") },
    ];

    const customYAxisTicks = ['0' ,'20000','40000','60000','80000','100000'];
    const customXAxisTicks = ['Nokia', 'Ericsson', 'Huawei'];
    const formatYAxisTick = (tick) => {
        // Customize the tick labels as needed
        return tick > 999 ? `${(tick / 1000)}K` : `${tick}`;
    };




    return (
        <div>
            <div className="Barchartmat_header">
                <h2>Cells Status</h2>
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
                            data={dataSet2}
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
                                   tickMargin={10} tickCount={7} padding={{left:40}} />
                            <YAxis  stroke="#757575" ticks={customYAxisTicks} tickFormatter={formatYAxisTick}  interval={0}  tickMargin={50}  />
                            <Tooltip cursor={false}
                                     content={<CustomTooltip  data={dataPerProvince}/>} />

                            <Bar
                                dataKey="uv2"
                                fill="#007BFF"
                                shape={<RoundedBar_2 radius={4}/>}
                            />
                            <Bar
                                dataKey="pv2"
                                fill="#18D3CC"
                                shape={<RoundedBar_2 radius={4}/>}
                            />
                            <Bar
                                dataKey="cv2"
                                fill="#99CAFF"
                                shape={<RoundedBar_2 radius={4}/>}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>



                <div className="data_symbols_2">
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

export default BarChartMaterialCells;