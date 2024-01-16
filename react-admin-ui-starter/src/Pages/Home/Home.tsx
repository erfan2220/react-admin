
import './Home.css'
import IranMap from "../../Component/IranMap/iranMap.tsx";













const Home = () =>
    (
        <div className="home">
            <div className="box box1">
                <h2>تعداد سایت ها</h2>
                <p>1,020</p>
            </div>
            <div className="box box2">
                <h2>تعداد سایت های   Huawei</h2>
                <p>400</p>
            </div>
            <div className="box box3">
                <h2>تعداد سایت های   Ericsson</h2>
                <p>300</p>
            </div>
            <div className="box box4">
                <h2> تعداد سایت های   Nokia</h2>
                <p>320</p>
            </div>
            <div className="box box5">
                <div >
                    <h2 id="maptitr"> نقشه استان ها</h2>
                    <IranMap/>
                </div>
            </div>



        </div>


    );

export default Home;