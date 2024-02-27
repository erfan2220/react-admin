
import "./Siteinformation.css"
import Rate from "../rateup and ratedown/rate.tsx";


const Siteinformation = () => {
    return (
        <div className="Siteinformation_container">
            <h2>More Information</h2>
            <div className="Siteinformation_container_box">
                <div className="item_1_Info">
                    <div className="logo_Item_info">
                        <img src="./Sites_logo.svg" alt=""/>
                        <h3>Site counts</h3>
                    </div>

                    <p>187,340</p>

                    <Rate calculation={"positive"}/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">
                        <img src="./Nokia_logo.svg" alt=""/>
                        <h3>Nokia Site counts</h3>
                    </div>

                    <p>187,340</p>

                    <Rate calculation={"negative"}/>
                </div>

                <div className="item_1_Info">
                    <div className="logo_Item_info">
                        <img src="./Huawei_Logo.svg" alt=""/>
                        <h3>Huawei Sites  counts</h3>
                    </div>

                    <p>187,340</p>

                    <Rate calculation={"positive"}/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">
                        <img src="./Ericsson_logo.svg" alt=""/>
                        <h3>Ericsson Sites counts</h3>
                    </div>

                    <p>187,340</p>

                    <Rate calculation={"negative"}/>
                </div>


            </div>


        </div>
    );
};

export default Siteinformation;