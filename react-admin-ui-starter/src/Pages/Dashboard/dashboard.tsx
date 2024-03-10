
import './dashboard.css'
import Linechart from "../../Component/LineChart/linechart.tsx";

import Siteinformation from "../../Component/Siteinformations/Siteinformation.tsx";
import {useEffect, useState} from "react";
import BarChartMaterialCells from "../../Component/BarChartMaterialCellCount/BarChartMaterialCells.tsx";
import BarChartMaterial from "../../Component/BarChartMaterialUi/Barchartmaterial.tsx";



const Dashboard = () => {
    const [data, setData] = useState(null);
    const [dataPerProvince, setDataPerProvince] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalSitesCount,setTotalSitesCount]=useState(null)
    const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds


    useEffect(() => {

        const promises = [];


        const promise1 = fetchAndCacheData("sites_count_sssdkkdkjsjk", "http://192.168.129.188:5001/api/assets/sites_count_per_tech")
            .then(data => {
                // Handle the data as needed
                console.log("ofkiorfkjmfrmkjfk", data);
                setData(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching sites count per province data:", error);
            });

        promises.push(promise1);



        const promise2 = fetchAndCacheData("cells-ldfvsklfk", "http://192.168.129.188:5001/api/assets/cells_count")
            .then(data => {
                // Handle the data as needed
                console.log("ofkiorfkjmfrmkjfk2", data);

                setDataPerProvince(data)
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching sites count per province data:", error);
            });

        promises.push(promise2);

        const promise3 = fetchAndCacheData("sites_total_count_cache", "http://192.168.129.188:5001/api/assets/sites_count_total")
            .then(data => {
                // Handle the data as needed
                console.log("ofkiorfkjmfrmkjfk3", data);
                setTotalSitesCount(data);
            })
            .catch(error => {
                // Handle errors
                console.error("Error fetching sites count per province data:", error);
            });

        promises.push(promise3);


        Promise.all(promises)
            .then(() => {

                setLoading(false); // Set loading to false once all data is fetched
            });


    }, []);




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



    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard_content_container_top_2">
                <div className="box1_1">
                <BarChartMaterial data={data}/>
                </div>
                <div className="box1_2">
                    <Siteinformation data={totalSitesCount}/>
                </div>


            </div>
            <div className="dashboard_content_container_down">
                <div className="box2_1">
                    <Linechart/>
                </div>
                <div className="box2_2">
                    <BarChartMaterialCells dataPerProvince={dataPerProvince}/>
                </div>

            </div>
        </div>
                )}
        </div>

    );
};

export default Dashboard;