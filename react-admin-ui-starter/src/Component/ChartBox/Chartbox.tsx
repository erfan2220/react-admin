
import './Chartbox.css';
import {LineChart, Line, ResponsiveContainer, Tooltip} from 'recharts';
import {Link} from "react-router-dom";

type Props=
{
    color:string;
    icon:string;
    title:string;
    dataKey:string;
    number:number|string;
    percentage:number|string;
    chartData:object[];
}


const Chartbox = (props:Props) =>
{
return(
    <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <img src={props.icon} alt=""/>
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="/" style={{color:props.color}}>
                View All
            </Link>

        </div>
        <div className="chartInfo">
            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={props.chartData}>\
                        <Tooltip
                        contentStyle={{background:"transparent",border:"none"}}
                        labelStyle={{display:"none"}}
                        position={{x:10, y:70}}
                        />
                        <Line type="monotone" dataKey={props.dataKey}
                              stroke={props.color} strokeWidth={2}  dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <div className="percentage" style={{color:props.percentage <0 ?"tomato":"limegreen"}}>{props.percentage}%</div>
                <div className="duration">
                    This month
                </div>
            </div>
        </div>
    </div>
)
};

export default Chartbox;