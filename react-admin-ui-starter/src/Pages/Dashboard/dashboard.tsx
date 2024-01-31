
import './dashboard.css'
import PieChartBox from "../../Component/pieChartbox/PieChartBox.tsx";
import Linechart from "../../Component/LineChart/linechart.tsx";
import BarChartbox from "../../Component/barChartbox/barChartbox.tsx";
import {barChartBoxRevenue} from "../../data.ts";
import SimpleBarChart from "../../Component/SimpleBarChart/simpleBarChart.tsx";



const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard_content_container_top">
                <div className="box1_1">
                    <PieChartBox title={"Nokia Sites"}/>
                </div>
                <div className="box1_2">
                    <PieChartBox title={"Huawei Sites"}/>
                </div>
                <div className="box1_3">
                    <PieChartBox title={"Ericsson Sites"}/>
                </div>
            </div>
            <div className="dashboard_content_container_down">
                <div className="box2_1">
                    <Linechart/>
                </div>
                <div className="box2_2">
                    <SimpleBarChart/>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;