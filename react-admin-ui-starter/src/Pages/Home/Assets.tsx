
import './Assets.css'
import IranMap from "../../Component/IranMap/iranMap.tsx";













const Assets = () =>
    (
        <div className="Assets_container">
            <div className="Assets_header">
            <h2>Assets</h2>
            </div>
            <div className="home">

                <div className="box box1">
                    <h2>Nokia Site Numbers</h2>

                    <div className="Assets_sites_items">
                        <p>1,020</p>
                        <div className="rate_container_Assets">
                            <img src="./rateup.svg" alt=""/>
                            <span>12.5%</span>
                        </div>
                    </div>

                </div>

                <div className="box box2">
                    <h2>Ericsson Site Numbers</h2>


                    <div className="Assets_sites_items">
                        <p>1,020</p>
                        <div className="rate_container_Assets_even">
                        <img src="./ratedown.svg" alt=""/>
                            <span>12.5%</span>
                        </div>
                    </div>

                </div>

                <div className="box box3">
                    <h2>Huawei Site Numbers</h2>


                    <div className="Assets_sites_items">
                        <p>1,020</p>
                        <div className="rate_container_Assets">
                        <img src="./rateup.svg" alt=""/>
                            <span>12.5%</span>
                        </div>
                    </div>

                </div>

                <div className="box box4">
                    <h2> Site Numbers</h2>

                    <div className="Assets_sites_items">
                        <p>1,020</p>
                        <div className="rate_container_Assets_even">
                            <img src="./ratedown.svg" alt=""/>
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


    );

export default Assets;