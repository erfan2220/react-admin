
import './Home.css'
import IranMap from "../../Component/IranMap/iranMap.tsx";













const Home = () =>
    (
        <div className="home">
            <div className="box box1">
                <h2>اطلاعات حیاتی</h2>
                <span>50</span>
            </div>
            <div className="box box2">
                <h2>تعداد سایت های داخلی</h2>
                <span>0</span>
            </div>
            <div className="box box3">
                <h2>تعداد سایت های خارجی</h2>
                <span>50</span>
            </div>
            <div className="box box4">
                <h2>تعداد سایت ها</h2>
                <span>50</span>
            </div>
            <div className="box box5">
                <div>
                    <h1> نقشه استان ها</h1>
                    <IranMap/>
                </div>
            </div>



        </div>


    );

export default Home;