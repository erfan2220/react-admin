
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
    const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if data for each API call is cached and not expired
                const cachedData = JSON.parse(localStorage.getItem('cachedData')) || {};
                const cachedData2 = JSON.parse(localStorage.getItem('cachedData2')) || {};

                const fetchData1Promise = fetchAndCacheData('cachedData', 'http://192.168.129.188:5001/api/assets/sites_count');
                const fetchData2Promise = fetchAndCacheData('cachedData2', 'http://192.168.129.188:5001/api/assets/cells_count');
                const [jsonData1, jsonData2] = await Promise.all([fetchData1Promise, fetchData2Promise]);
                console.log("fetchData2Promise",jsonData2)
                setData(jsonData1);
                setDataPerProvince(jsonData2);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();


    }, []);

    async function fetchAndCacheData(cacheKey, apiUrl) {
        const cachedData = JSON.parse(localStorage.getItem(cacheKey)) || {};

         if (cachedData.data && Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME) {
           return cachedData.data;
         } else {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            localStorage.setItem(cacheKey, JSON.stringify({ data: jsonData, timestamp: Date.now() }));
            return jsonData;
         }
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
                <Siteinformation/>
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