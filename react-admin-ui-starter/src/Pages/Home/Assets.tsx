
import './Assets.css'
import IranMap from "../../Component/IranMap/iranMap.tsx";
import {useState} from "react";
import PieChartBox from "../../Component/pieChartbox/PieChartBox.tsx";
import Linechart from "../../Component/LineChart/linechart.tsx";
import SimpleBarChart from "../../Component/SimpleBarChart/simpleBarChart.tsx";











const Assets = () => {
    const [activeIndex,setActiveIndex]=useState(1)


    return(
        <div className="Assets_container">
            <div className="Assets-menu-report">

                <div className="Assets-menu-item" onClick={() => {
                    setActiveIndex(1)
                }}>
                    <h2 className={activeIndex === 1 ? "active-site-selector" : "deactive-site-selector"}>
                        Report
                    </h2>

                    <img src="./" alt=""/>
                </div>

                <div className="Assets-menu-item" onClick={() => {
                    setActiveIndex(2)
                }}>
                    <h2 className={activeIndex === 2 ? "active-site-selector" : "deactive-site-selector"}>
                        Sites-information
                    </h2>
                    <img src="./" alt=""/>
                </div>


            </div>

            <div className="Assets-map-2">

                <div >
                    {
                        activeIndex ==1 &&(
                            <div>
                                <div className="Assets_header">
                                    <h2>Assets/Report</h2>

                                </div>

                                <div className="dashboard_asset">
                                <div className="dashboard_content_container_top">
                                        <div className="Assets_box1_1">
                                            <PieChartBox twog={8961} threeg={5121} fourg={7122} title={"Nokia Sites"}/>
                                        </div>
                                        <div className="Assets_box1_2">
                                            <PieChartBox twog={13590} threeg={11365} fourg={8961} title={"Huawei Sites"}/>
                                        </div>
                                        <div className="Assets_box1_3">
                                            <PieChartBox twog={5780} threeg={4855} fourg={5324} title={"Ericsson Sites"}/>
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
                            </div>

                        )
                    }
                    {activeIndex === 2 && (
                        <div>
                        <div className="Assets_header">
                            <h2>Assets/Sites-information</h2>
                        </div>
                        <div className="home">

                            <div className="box box1">
                                <h2>Nokia Site Numbers</h2>

                                <div className="Assets_sites_items">
                                    <p>22,349</p>
                                    <div className="rate_container_Assets">
                                        <img src="./rateup.svg" alt=""/>
                                        <span>12.5%</span>
                                    </div>
                                </div>

                            </div>

                            <div className="box box2">
                                <h2>Ericsson Site Numbers</h2>


                                <div className="Assets_sites_items">
                                    <p>15,959</p>
                                    <div className="rate_container_Assets_even">
                                        <img src="./ratedown.svg" alt=""/>
                                        <span>12.5%</span>
                                    </div>
                                </div>

                            </div>

                            <div className="box box3">
                                <h2>Huawei Site Numbers</h2>


                                <div className="Assets_sites_items">
                                    <p>33,916</p>
                                    <div className="rate_container_Assets">
                                        <img src="./rateup.svg" alt=""/>
                                        <span>12.5%</span>
                                    </div>
                                </div>

                            </div>


                            <div className="box box5">
                                <div>
                                    <h2 id="maptitr">Provinces Map</h2>
                                    <IranMap/>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>


    );
}

export default Assets;