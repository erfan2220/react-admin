import { useState, useEffect } from "react";
import './Site.css'
import DataTable from "../../Component/SiteDataTable/Datatable.tsx";
import { GridColDef } from '@mui/x-data-grid';
import {siteTabs} from "../../database/SiteDAta/sitedata.ts";
import Add from "../../Component/Adduser/Add";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
 import info from "../../database/Cities_info/Sites.ts"
import { useParams } from 'react-router-dom';




type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

const Site = () => {
    const [filteredRows, setFilteredRows] = useState(info);
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [selectedTab, setSelectedTab] = useState<string | null>("Site Information");  // Track the selected tab
    const [open,setOpen]=useState(false)
    const [filter,setFilter]=useState(false)

    const { cityName } = useParams();

    useEffect(() => {
        // Initial setup
        updateColumns();

        // Fetch data every 24 hours
        const fetchData = () => {
            fetchSiteData();
        };

        fetchData(); // Fetch data immediately when component mounts

        const interval = setInterval(fetchData, 24 * 60 * 60 * 1000); // Fetch data every 24 hours

        // Clean-up function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const fetchSiteData = () => {
        // Fetch data from the API
        fetch(`http://192.168.129.188:5001/api/assets/sites_detail_per_city/${cityName}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with fetched data
                setFilteredRows(data.site_detail);
            })
            .catch(error => console.error('Error fetching data:', error));
    };




    const updateColumns = () => {
        const screenSize = window.innerWidth;
        const newColumns = (screenSize < 900) ? getMobileColumns() : getDefaultColumns();
        setColumns(newColumns);
    };

    const getMobileColumns = (): GridColDef[] => {
        return [
            {
                field: 'siteName',
                headerName: 'نام سایت',
                width: 150,
                editable: true,
            },
            {
                field: 'activity_Performed_Number',
                headerName: 'فعالیت های انجام شده',
                width: 150,
                editable: true,
            },
        ];
    };

    const getDefaultColumns = (): GridColDef[] => {
        return [

            {
                field: 'site_code',
                headerName: 'site_code',
                width: 100,
                editable: true,
            },
            {
                field: 'cell_count',
                headerName: 'cell_count',
                width: 120,
                editable: true,
            },
            {
                field: 'node_name',
                headerName: 'node_name',
                width: 120,
                editable: true,
            },


            {
                field: "site_band",
                headerName: "site_band",
                width: 100,
                type: "number",
            },
            {
                field: "vendor",
                headerName: "vendor",
                width: 100,
                type: "string",
            },

            {
                field: "design_location_dependency",
                headerName: "design_location_dependency",
                width: 150,
                type: "number",
            },
            {
                field: 'latitude',
                headerName: 'latitude',
                type: 'string',
                width:100,
            },
            {
                field: 'longitude',
                headerName: 'longitude',
                type: 'string',
                width: 100,
            },
            {
                field: "address",
                headerName: "address",
                width: 100,
                type: "string",
            },
        ];
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
        console.log(selectedTab)

    };





    return (
        <div className="users">

            <div className="site_container">
                <div className="Site_header_button">



                    <div className="Site_header_button_items3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.875 8.74952V16.2495C16.875 16.581 16.7433 16.899 16.5089 17.1334C16.2745 17.3678 15.9565 17.4995 15.625 17.4995H4.375C4.04348 17.4995 3.72554 17.3678 3.49112 17.1334C3.2567 16.899 3.125 16.581 3.125 16.2495V8.74952C3.125 8.418 3.2567 8.10005 3.49112 7.86563C3.72554 7.63121 4.04348 7.49952 4.375 7.49952H6.25C6.41576 7.49952 6.57473 7.56536 6.69194 7.68257C6.80915 7.79978 6.875 7.95876 6.875 8.12452C6.875 8.29028 6.80915 8.44925 6.69194 8.56646C6.57473 8.68367 6.41576 8.74952 6.25 8.74952H4.375V16.2495H15.625V8.74952H13.75C13.5842 8.74952 13.4253 8.68367 13.3081 8.56646C13.1908 8.44925 13.125 8.29028 13.125 8.12452C13.125 7.95876 13.1908 7.79978 13.3081 7.68257C13.4253 7.56536 13.5842 7.49952 13.75 7.49952H15.625C15.9565 7.49952 16.2745 7.63121 16.5089 7.86563C16.7433 8.10005 16.875 8.418 16.875 8.74952ZM7.31719 5.4417L9.375 3.38311V10.6245C9.375 10.7903 9.44085 10.9492 9.55806 11.0665C9.67527 11.1837 9.83424 11.2495 10 11.2495C10.1658 11.2495 10.3247 11.1837 10.4419 11.0665C10.5592 10.9492 10.625 10.7903 10.625 10.6245V3.38311L12.6828 5.4417C12.8001 5.55898 12.9591 5.62486 13.125 5.62486C13.2909 5.62486 13.4499 5.55898 13.5672 5.4417C13.6845 5.32443 13.7503 5.16537 13.7503 4.99952C13.7503 4.83366 13.6845 4.6746 13.5672 4.55733L10.4422 1.43233C10.3841 1.37422 10.3152 1.32812 10.2393 1.29667C10.1635 1.26521 10.0821 1.24902 10 1.24902C9.91787 1.24902 9.83654 1.26521 9.76066 1.29667C9.68479 1.32812 9.61586 1.37422 9.55781 1.43233L6.43281 4.55733C6.31554 4.6746 6.24965 4.83366 6.24965 4.99952C6.24965 5.16537 6.31554 5.32443 6.43281 5.4417C6.55009 5.55898 6.70915 5.62486 6.875 5.62486C7.04085 5.62486 7.19991 5.55898 7.31719 5.4417Z"
                                fill="white"/>
                        </svg>


                        <span>Export</span>
                    </div>

                    <div className="Site_header_button_items2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.75 8.25002H6.84375C7.00898 8.89533 7.38428 9.4673 7.91048 9.87575C8.43669 10.2842 9.08387 10.5059 9.75 10.5059C10.4161 10.5059 11.0633 10.2842 11.5895 9.87575C12.1157 9.4673 12.491 8.89533 12.6562 8.25002H20.25C20.4489 8.25002 20.6397 8.17101 20.7803 8.03035C20.921 7.8897 21 7.69894 21 7.50002C21 7.30111 20.921 7.11035 20.7803 6.96969C20.6397 6.82904 20.4489 6.75002 20.25 6.75002H12.6562C12.491 6.10471 12.1157 5.53274 11.5895 5.12429C11.0633 4.71584 10.4161 4.49414 9.75 4.49414C9.08387 4.49414 8.43669 4.71584 7.91048 5.12429C7.38428 5.53274 7.00898 6.10471 6.84375 6.75002H3.75C3.55109 6.75002 3.36032 6.82904 3.21967 6.96969C3.07902 7.11035 3 7.30111 3 7.50002C3 7.69894 3.07902 7.8897 3.21967 8.03035C3.36032 8.17101 3.55109 8.25002 3.75 8.25002ZM9.75 6.00002C10.0467 6.00002 10.3367 6.088 10.5834 6.25282C10.83 6.41764 11.0223 6.65191 11.1358 6.926C11.2494 7.20009 11.2791 7.50169 11.2212 7.79266C11.1633 8.08363 11.0204 8.3509 10.8107 8.56068C10.6009 8.77046 10.3336 8.91332 10.0426 8.9712C9.75166 9.02908 9.45006 8.99937 9.17597 8.88584C8.90189 8.77231 8.66762 8.58005 8.5028 8.33338C8.33797 8.0867 8.25 7.7967 8.25 7.50002C8.25 7.1022 8.40804 6.72067 8.68934 6.43936C8.97064 6.15806 9.35218 6.00002 9.75 6.00002ZM20.25 15.75H18.6562C18.491 15.1047 18.1157 14.5327 17.5895 14.1243C17.0633 13.7158 16.4161 13.4941 15.75 13.4941C15.0839 13.4941 14.4367 13.7158 13.9105 14.1243C13.3843 14.5327 13.009 15.1047 12.8438 15.75H3.75C3.55109 15.75 3.36032 15.829 3.21967 15.9697C3.07902 16.1103 3 16.3011 3 16.5C3 16.6989 3.07902 16.8897 3.21967 17.0304C3.36032 17.171 3.55109 17.25 3.75 17.25H12.8438C13.009 17.8953 13.3843 18.4673 13.9105 18.8758C14.4367 19.2842 15.0839 19.5059 15.75 19.5059C16.4161 19.5059 17.0633 19.2842 17.5895 18.8758C18.1157 18.4673 18.491 17.8953 18.6562 17.25H20.25C20.4489 17.25 20.6397 17.171 20.7803 17.0304C20.921 16.8897 21 16.6989 21 16.5C21 16.3011 20.921 16.1103 20.7803 15.9697C20.6397 15.829 20.4489 15.75 20.25 15.75ZM15.75 18C15.4533 18 15.1633 17.912 14.9166 17.7472C14.67 17.5824 14.4777 17.3481 14.3642 17.074C14.2506 16.8 14.2209 16.4984 14.2788 16.2074C14.3367 15.9164 14.4796 15.6491 14.6893 15.4394C14.8991 15.2296 15.1664 15.0867 15.4574 15.0288C15.7483 14.971 16.0499 15.0007 16.324 15.1142C16.5981 15.2277 16.8324 15.42 16.9972 15.6667C17.162 15.9133 17.25 16.2034 17.25 16.5C17.25 16.8978 17.092 17.2794 16.8107 17.5607C16.5294 17.842 16.1478 18 15.75 18Z"
                                fill="#616161"/>
                        </svg>

                        <span>Filter & Sort</span>
                    </div>


                    <div className="Site_header_button_items">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19" stroke="#007BFF" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke="#007BFF" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <span>New Site</span>
                    </div>


                    <div>

                </div>




                </div>
                <div className="tabs-container">
                    <Tabs value={selectedTab} onChange={handleTabChange} >
                        {siteTabs.map((site) => (
                            <Tab key={site.siteName} label={site.siteName} value={site.siteName}
                            />
                        ))}
                    </Tabs>
                </div>

                {(selectedTab === "Site Information") && (
                    <div>
                        <div className="tab-content">
                        </div>

                        <DataTable slug="users" columns={columns} rows={filteredRows}/>
                        {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
                    </div>
                )}


                {
                    (selectedTab === "Site location") &&
                    (
                    <div className="Site_Location">

                    </div>
                )
                }

                {
                    (selectedTab === "Radio Equipments") &&
                    (
                      <div></div>
                    )
                }

                {
                    (selectedTab === "Spare Equipments") &&
                    (
                        <div>

                        </div>
                    )
                }

                {
                    (selectedTab === "CR Number") &&
                    (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
}

export default Site;
