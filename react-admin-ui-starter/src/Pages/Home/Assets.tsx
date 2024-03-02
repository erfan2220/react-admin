
import './Assets.css'
import IranMap from "../../Component/IranMap/iranMap.tsx";
import React, {useEffect, useState} from "react";
import PieChartBox from "../../Component/pieChartbox/PieChartBox.tsx";
import Linechart from "../../Component/LineChart/linechart.tsx";
import SimpleBarChart from "../../Component/SimpleBarChart/simpleBarChart.tsx";
import Rate from "../../Component/rateup and ratedown/rate.tsx";




const Assets = () => {
    const [activeIndex,setActiveIndex]=useState(1)


    const [provinceName, setProvinceName] = useState("");
    const [provinceNameOnClick, setProvinceNameOnClick] = useState("");

    const [mapZoom, setMapZoom] = useState(false);
    const [provinceSelected, setProvinceSelected] = useState(false);

    const [cities, setCities] = useState(["تمام ایران"]);


    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [citySelected, setCItySelected] = useState(false)
    const [isChecked, setChecked] = useState(false);

    const [pupop,setPupop]=useState(false)

    const [dataProvince,setDataProvince]=useState(false)
    const [loading,setLoading]=useState(false)




    const [totalTraffic,setTotalTraffic]=useState(null)
    const [totalCount,setTotalCount]=useState(null)
    const [cellsCount,setCellsCount]=useState(null)
    const [cityCount,setCityCount]=useState(null)
    const [cityCountSelected,setCityCountSelected]=useState(null)


    const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000;


    async function fetchAndCacheData(cacheKey, apiUrl)
    {

        const cachedData = JSON.parse(localStorage.getItem(cacheKey)) || {};

        if (cachedData.data && Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME)
        {
            return cachedData.data;
        }

        else {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            localStorage.setItem(cacheKey, JSON.stringify({data: jsonData, timestamp: Date.now()}));
            return jsonData;
        }

        /*
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                localStorage.setItem(cacheKey, JSON.stringify({ data: jsonData, timestamp: Date.now() }));
                return jsonData;
                */


    }


    useEffect(() => {

        const promises = [];
        // Fetch sites count per province data
        /* fetchAndCacheData("sites_count_cache", "http://192.168.129.188:5001/api/assets/sites_count_per_province")
             .then(data => {
                 // Handle the data as needed
                 console.log("Sites count per province data", data);
                 setTotalCount(data)
                 console.log("lshbbdfm", totalCount);
             })
             .catch(error => {
                 // Handle errors
                 console.error("Error fetching sites count per province data:", error);
             });

         fetchAndCacheData("cells_count_cache", "http://192.168.129.188:5001/api/assets/cells_count_per_province")
             .then(data => {
                 // Handle the data as needed
                 console.log("Cells count per province data:", data);
                 setCellsCount(data)
             })
             .catch(error => {
                 // Handle errors
                 console.error("Error fetching sites count per province data:", error);
             });

         fetchAndCacheData("cities_per_province_cache", "http://192.168.129.188:5001/api/assets/cities")
             .then(data => {
                 // Handle the data as needed
                 console.log("Cities  per province :", data);
                 setCityCount(data)
             })
             .catch(error => {
                 // Handle errors
                 console.error("Error fetching sites count per province data:", error);
             });



         // Fetch traffic per province data
         fetchAndCacheData("traffic_per_province_cache", "http://192.168.129.188:5001/api/assets/traffic_per_province")
             .then(data => {
                 // Handle the data as needed
                 console.log("Traffic per province data:", data);
                 setTotalTraffic(data)
             })
             .catch(error => {
                 // Handle errors
                 console.error("Error fetching traffic per province data:", error);
             });*/


        const promise1 = fetchAndCacheData("sites_count_cache", "http://192.168.198.201:5001/api/assets/sites_count_per_province")
            .then(data => {
                // Handle the data as needed
                console.log("Sites count per province data", data);
                setTotalCount(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching sites count per province data:", error);
            });

        promises.push(promise1);

        // Fetch cells count per province data
        const promise2 = fetchAndCacheData("cells_count_cache", "http://192.168.198.201:5001/api/assets/cells_count_per_province")
            .then(data => {
                // Handle the data as needed
                console.log("Cells count per province data:", data);
                setCellsCount(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching cells count per province data:", error);
            });

        promises.push(promise2);

        // Fetch cities per province data
        const promise3 = fetchAndCacheData("cities_per_province_cache", "http://192.168.198.201:5001/api/assets/cities")
            .then(data => {
                // Handle the data as needed
                console.log("Cities per province data:", data);
                setCityCount(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching cities per province data:", error);
            });

        promises.push(promise3);

        // Fetch traffic per province data
        const promise4 = fetchAndCacheData("traffic_per_province_cache", "http://192.168.198.201:5001/api/assets/traffic_per_province")
            .then(data => {
                // Handle the data as needed
                console.log("Traffic per province data:", data);
                setTotalTraffic(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching traffic per province data:", error);
            });

        promises.push(promise4);

        // Wait for all promises to resolve
        Promise.all(promises)
            .then(() => {

                setLoading(true); // Set loading to false once all data is fetched
            });


    }, []);

    const numberFormatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const format = (number)=>
    {
        const formattedNumber = numberFormatter.format(number);
        return formattedNumber;
    }
    const sum_PS = (listdata) => {
        let total_PS = 0;

        let div=1024
        if (listdata.length > 0) {
            listdata.forEach(item => {
                // Iterate over the properties of each item
                Object.keys(item).forEach(key => {
                    // Check if the key contains "PS"
                    if (key.includes('PS') && typeof item[key] === 'number') {
                        // Add the value to the total_PS
                        total_PS += item[key];
                    }
                });
            });
        }
        div= (total_PS/1024)

        return div.toFixed(2);
    };


    const sum_CS = (listdata) => {
        let total_CS = 0;

        let div=1024
        if (listdata.length > 0) {
            listdata.forEach(item => {
                // Iterate over the properties of each item
                Object.keys(item).forEach(key => {
                    // Check if the key contains "CS"
                    if (key.includes('CS') && typeof item[key] === 'number') {
                        // Add the value to the total_CS
                        total_CS += item[key];
                    }
                });
            });
        }
        div= (total_CS/1024)

        return div.toFixed(2);
    };


    const calculate_revenue = (province) => {
        let total = 0;

        const filterItems = totalTraffic.traffic.filter(item => item.province === province)

        if (filterItems.length > 0) {
            filterItems.forEach(item => {
                // Add the revenue of each item to the total
                total += item.revenue;
            });
        }

        return total;
    }


    const filter_traffic_CS= (province)=>
    {


        const filterItems = totalTraffic.traffic.filter(item => item.province === province)



        const totalcount = sum_CS(filterItems)



        return totalcount;
    }

    const filter_traffic_PS= (province)=>
    {
        const filterItems = totalTraffic.traffic.filter(item => item.province === province)

        const totalcount = sum_PS(filterItems)

        return totalcount;
    }

    const filter_cells= (province)=>
    {

        console.log("kdjdfklsj",cellsCount)
        const filterItems= cellsCount.cells_count.filter(item => item.province === province)

        return filterItems.length > 0 ? filterItems[0].count : 0;
    }



    const filter_siteCounts_CS = (province) => {
        if (provinceName === "West Azerbaijan") {
            return filter_traffic_CS("West Azarbaijan");
        } else if (provinceName === "Sistan va Baluchestan") {
            return filter_traffic_CS("Sistan Va Baluchestan");
        } else if (provinceName === "Chaharmahal Bakhtiari") {
            return filter_traffic_CS("Chahar Mahal Va Bakhtiari");
        } else if (provinceName === "Kohgiluyeh and Boyer Ahmad") {
            return filter_traffic_CS("Kohgiluyeh Va Boyer Ahmad");
        } else if (provinceName === "East Azerbaijan") {
            return filter_traffic_CS("East Azarbaijan");
        } else if (provinceName === "Ardabil") {
            return filter_traffic_CS("Ardebil");
        } else {
            return filter_traffic_CS(provinceName);
        }
    };


    const filter_siteCounts_PS = (province) => {
        if (provinceName === "West Azerbaijan") {
            return filter_traffic_CS("West Azarbaijan");
        } else if (provinceName === "Sistan va Baluchestan") {
            return filter_traffic_CS("Sistan Va Baluchestan");
        } else if (provinceName === "Chaharmahal Bakhtiari") {
            return filter_traffic_CS("Chahar Mahal Va Bakhtiari");
        } else if (provinceName === "Kohgiluyeh and Boyer Ahmad") {
            return filter_traffic_CS("Kohgiluyeh Va Boyer Ahmad");
        } else if (provinceName === "East Azerbaijan") {
            return filter_traffic_CS("East Azarbaijan");
        } else if (provinceName === "Ardabil") {
            return filter_traffic_CS("Ardebil");
        } else {
            return filter_traffic_CS(provinceName);
        }
    };
    const filter_siteCount= (province)=>
    {

        const filterItems = totalCount.sites_count.filter(item => item.province === province)

        const totalcount = filterItems.reduce((acc, curr) => acc + curr.count, 0)

        return totalcount;
    }

    const filter_cities= (province)=>
    {
        const filterItems= cityCount.sites_count.filter(item => item.province === province)

        setCityCountSelected(filterItems)
    }















    return(
        loading ?
            (

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
                        Network
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
                                <div className="dashboard_content_container_top_3">
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
                            <h2>Assets/Network</h2>
                        </div>
                        <div className="home">

                            <div className="box box1">
                                <h2>Call Traffic</h2>

                                <div className="Assets_sites_items">
                                    <p>720M</p>
                                    <div className="rate_container_Assets">
                                        <img src="./rateup.svg" alt=""/>
                                        <span>2.1%</span>
                                    </div>
                                </div>

                            </div>

                            <div className="box box2">
                                <h2>Data Traffic</h2>


                                <div className="Assets_sites_items">
                                    <p>22M</p>
                                    <div className="rate_container_Assets_even">
                                        <img src="./ratedown.svg" alt=""/>
                                        <span>1.1%</span>
                                    </div>
                                </div>

                            </div>

                            <div className="box box3">
                                <h2>Total Revenue</h2>


                                <div className="Assets_sites_items">
                                    <p>1,231,193M</p>
                                    <div className="rate_container_Assets">
                                        <img src="./rateup.svg" alt=""/>
                                        <span>3.4%</span>
                                    </div>
                                </div>

                            </div>


                            <div className="box box5">

                                <div className="Map_intilizer_container">


                                    <div className="Total_information_map_details">



                                        { pupop &&(
                                             <div>
                                                {/*Total data left direction of map */}
                                                    <div className="total_map_data">
                                                        <div className="header_total_map_data">
                                                            <img src="./Province.svg" alt=""/>
                                                            <h2>{provinceName} </h2>
                                                        </div>

                                                        <div className="total_map_data_item">
                                                            <h3>Site Counts</h3>
                                                            <p>
                                                                {
                                                                    format(
                                                                        provinceName === "Khuzestan" ? (
                                                                    filter_siteCount("Khouzestan")
                                                                ) : (
                                                                    filter_siteCount(provinceName)
                                                                )
                                                                )
                                                            }
                                                            </p>
                                                        </div>

                                                        <div className="total_map_data_item">
                                                            <h3>Cell Counts</h3>
                                                            <p>{
                                                                format(
                                                                    provinceName === "Khuzestan" ? (filter_cells("Khouzestan")) :
                                                                        filter_cells(provinceName)
                                                                )
                                                            }</p>
                                                        </div>


                                                        <div className="total_map_data_item_for_quantity">
                                                        <div className="total_map_data_item_2">
                                                            <h3>Traffic PS</h3>
                                                            <p> {
                                                                format(filter_traffic_PS(provinceName))
                                                            }</p>
                                                        </div>

                                                        <div className="total_map_data_item_3">
                                                            <Rate calculation="positive"/>
                                                            <h6>TB</h6>
                                                        </div>
                                                      </div>


                                                        <div className="total_map_data_item_for_quantity">
                                                            <div className="total_map_data_item_2">
                                                                <h3>Traffic CS</h3>
                                                                <p>{
                                                                    format(filter_traffic_CS(provinceName))
                                                                }</p>
                                                            </div>

                                                            <div className="total_map_data_item_3">
                                                                <Rate calculation="positive"/>
                                                                <h6>TB</h6>
                                                            </div>
                                                        </div>

                                                        <div className="total_map_data_item_for_quantity">
                                                            <div className="total_map_data_item_2">
                                                                <h3>Total revenue</h3>
                                                                <p>1,020</p>
                                                            </div>

                                                            <div className="total_map_data_item_3">
                                                                <Rate calculation="positive"/>
                                                                <h6>{
                                                                    format(calculate_revenue(provinceName))
                                                                }</h6>
                                                            </div>

                                                        </div>


                                                        </div>
                                             </div>
                                        )
                                        }




                                        <div className="map_fixed_positition">
                                            <IranMap setPupop={setPupop}
                                            setProvinceName={setProvinceName}/>
                                        </div>

                                        {/*Total data left direction of map */}
                                        <div className="total_map_data">
                                            <div className="header_total_map_data">
                                                <img src="./Total_svg.svg" alt=""/>
                                                <h2>Total statistics </h2>
                                            </div>

                                            <div className="total_map_data_item">
                                                <h3>Site Counts</h3>
                                                <p>1,020</p>
                                            </div>

                                            <div className="total_map_data_item">
                                                <h3>Cell Counts</h3>
                                                <p>1,020</p>
                                            </div>


                                            <div className="total_map_data_item_for_quantity">
                                                <div className="total_map_data_item_2">
                                                    <h3>Traffic PS</h3>
                                                    <p>1,020</p>
                                                </div>

                                                <div className="total_map_data_item_3">
                                                    <Rate calculation="positive"/>
                                                    <h6>TB</h6>
                                                </div>
                                            </div>


                                            <div className="total_map_data_item_for_quantity">
                                                <div className="total_map_data_item_2">
                                                    <h3>Traffic CS</h3>
                                                    <p>1,020</p>
                                                </div>

                                                <div className="total_map_data_item_3">
                                                    <Rate calculation="positive"/>
                                                    <h6>TB</h6>
                                                </div>
                                            </div>

                                            <div className="total_map_data_item_for_quantity">
                                                <div className="total_map_data_item_2">
                                                    <h3>Total revenue</h3>
                                                    <p>{
                                                        format(calculate_revenue(provinceName))
                                                    }</p>
                                                </div>

                                                <div className="total_map_data_item_3">
                                                    <Rate calculation="positive"/>
                                                    <h6>Toman</h6>
                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>

            )
            :(<div>
                loading....
            </div>)

    );
}

export default Assets;