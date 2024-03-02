
import "./Siteinformation.css"
import Rate from "../rateup and ratedown/rate.tsx";




const Siteinformation = ({data}) =>
{

    const filter_counters = (vendor) =>
    {
        // console.log("filter_counters2",data)
        const filteredItems2 = data.sites_count.filter(item => item.vendor === vendor);


        const totalCount2 =  filteredItems2.reduce((acc,curr)=>acc+curr.count,0)

        return totalCount2;
    }

    const filter_total = () =>
    {
        const totalCount3 =  data.sites_count.reduce((acc,curr)=>acc+curr.count,0)

        return totalCount3;
    }



    return (
        <div className="Siteinformation_container">
            <h2>More Information</h2>
            <div className="Siteinformation_container_box">
                <div className="item_1_Info">
                    <div className="logo_Item_info">
                        <img src="./Sites_logo.svg" alt=""/>
                        <h3>Site counts</h3>
                    </div>

                    <p>
                        {
                            filter_total()
                        }
                    </p>

                    <Rate calculation={"positive"}/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">
                        <img src="./Nokia_logo.svg" alt=""/>
                        <h3>Nokia Site counts</h3>
                    </div>

                    <p>{filter_counters("NOKIA")}</p>

                    <Rate calculation={"negative"}/>
                </div>

                <div className="item_1_Info">
                    <div className="logo_Item_info">
                        <img src="./Huawei_Logo.svg" alt=""/>
                        <h3>Huawei Sites  counts</h3>
                    </div>

                    <p>{filter_counters("HUAWEI")}</p>

                    <Rate calculation={"positive"}/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">
                        <img src="./Ericsson_logo.svg" alt=""/>
                        <h3>Ericsson Sites counts</h3>
                    </div>

                    <p>{filter_counters("ERICSSON")}</p>

                    <Rate calculation={"negative"}/>
                </div>


            </div>


        </div>
    );
};

export default Siteinformation;