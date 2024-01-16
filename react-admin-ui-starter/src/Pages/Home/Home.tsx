
import './Home.css'
import TopBox from "../../Component/TopBox/TopBox";
import Chartbox from "../../Component/ChartBox/Chartbox";
import {
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
    barChartBoxRevenue,
    barChartBoxVisit
} from "../../data";
import BarChartbox from "../../Component/barChartbox/barChartbox";
import PieChartBox from "../../Component/pieChartbox/PieChartBox";
import BigChartBox from "../../Component/bigChartBox/BigChartBox";


const Home = () =>
    (
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
            <div className="box box2">
                <Chartbox {...chartBoxUser}/>
            </div>
            <div className="box box3">
                <Chartbox {...chartBoxProduct}/>
            </div>
            <div className="box box4">
                <PieChartBox/>
            </div>
            <div className="box box5">
                <Chartbox {...chartBoxRevenue}/>
            </div>
            <div className="box box6"> <Chartbox {...chartBoxConversion}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartbox {...barChartBoxRevenue}/></div>
            <div className="box box9"> <BarChartbox {...barChartBoxVisit}/></div>
        </div>


);

export default Home;