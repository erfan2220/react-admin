//@ts-nocheck
import "./Siteinformation.css"
import Rate from "../rateup and ratedown/rate.tsx";




const Siteinformation = ({data}) =>
{

    // const filter_counters = (vendor) =>
    // {
    //     // console.log("filter_counters2",data)
    //     const filteredItems2 = data.sites_count.filter(item => item.vendor === vendor);
    //
    //
    //     const totalCount2 =  filteredItems2.reduce((acc,curr)=>acc+curr.count,0)
    //
    //     return totalCount2;
    // }
    //
    // const filter_total = () =>
    // {
    //     const totalCount3 =  data.sites_count.reduce((acc,curr)=>acc+curr.count,0)
    //
    //     return totalCount3;
    // }

    const filter_total = () =>
    {
       const total= data.sites_count[0].count + data.sites_count[1].count + data.sites_count[2].count;

       return total;
    }

    const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',

    });

    const format = (number)=>
    {
        const formattedNumber = numberFormatter.format(number);
        return formattedNumber;
    }





    return (
        <div className="Siteinformation_container">
            <h2>More Information</h2>
            <div className="Siteinformation_container_box">
                <div className="item_1_Info">
                    <div className="logo_Item_info">

                        <h3>Site counts</h3>
                    </div>


                    <p>
                        {format(filter_total())}</p>

                    <img src="./Sites_logo.svg" alt=""/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">

                        <h3>Nokia Site counts</h3>
                    </div>

                    <p>{format(data.sites_count[2].count)}</p>
                    <img src="./Nokia_logo.svg" alt=""/>
                </div>

                <div className="item_1_Info">
                    <div className="logo_Item_info">

                        <h3>Huawei Sites  counts</h3>
                    </div>

                    {/*
                    <p>{filter_counters("HUAWEI")}</p>
                    */}
                    <p>{data.sites_count[1].count}</p>
                    <img src="./Huawei_Logo.svg" alt=""/>
                </div>

                <div className="item_2_Info">
                    <div className="logo_Item_info">

                        <h3>Ericsson Sites counts</h3>
                    </div>


                        <p>{format(data.sites_count[0].count)}</p>


                    <img src="./Ericsson_logo.svg" alt=""/>
                </div>


            </div>


        </div>
    );
};

export default Siteinformation;