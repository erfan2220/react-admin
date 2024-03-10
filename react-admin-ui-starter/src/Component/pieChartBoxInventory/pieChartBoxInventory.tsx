
import "./pieChartBoxInventory.css";
import {PieChart, ResponsiveContainer, Tooltip, Pie, Cell} from "recharts";

const data =
    [
        {name:"Used capacity",value:800,color:"#007BFF"},
        {name:"Empty capacity",value:300,color:"#99CAFF"},

    ]
const PieChartBoxInventory =(props:any)=>
{
        return (

            <div className="pieChartBoxInventory">
                <div className="title-container-inventorchart_2">
                    <div>
                        <p>{props.number}</p>
                        <h2>{props.title}</h2>
                    </div>

                </div>
                <div className="chart-inventory">
                    <ResponsiveContainer width="99%" height={300}>
                        <PieChart>
                            <Tooltip
                                contentStyle={{background: "white", borderRadius: "5px"}}
                            />
                            <Pie
                                data={data}

                                innerRadius={"70%"}
                                outerRadius={"90%"}

                                dataKey="value">

                                {data.map((item) => (
                                    <Cell key={item.name} fill={item.color}/>
                                ))}

                            </Pie>

                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="options">
                    {
                        data.map((item) =>
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

export default PieChartBoxInventory;