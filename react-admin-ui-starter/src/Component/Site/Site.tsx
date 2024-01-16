import { useState, useEffect } from "react";
import './Site.css'
import DataTable from "../../Component/SiteDataTable/Datatable.tsx";
import { GridColDef } from '@mui/x-data-grid';
import {siteTabs, userRows} from "../../database/SiteDAta/sitedata.ts";
import Filter from "../Filter/Filter";
import Add from "../../Component/Adduser/Add";
import { useParams } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

const Site = () => {
    const [filteredRows, setFilteredRows] = useState(userRows);
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [selectedTab, setSelectedTab] = useState<string | null>(null); // Track the selected tab
    const [open,setOpen]=useState(false)
    const [filter,setFilter]=useState(false)


    useEffect(() => {
        // Initial setup
        updateColumns();
    }, []);

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
                field: 'siteName',
                headerName: 'تعداد سلول',
                width: 100,
                editable: true,
            },
            {
                field: 'activity_Performed_Number',
                headerName: 'تعداد سلکتور',
                width: 120,
                editable: true,
            },
            {
                field: 'Per_activity_performed',
                headerName: 'تعداد Trx',
                width: 100,
                editable: true,
            },

            {
                field: "Per_activity_doneWithDelay",
                headerName: "Lat",
                width: 50,
                type: "number",
            },
            {
                field: "Per_activity_doneWithDelay",
                headerName: "Long",
                width: 80,
                type: "number",
            },
            {
                field: "Per_activity_doneWithDelay",
                headerName: "باند فرکانسی",
                width: 100,
                type: "number",
            },
            {
                field: 'Per_activity_delayed',
                headerName: 'آدرس سایت',
                type: 'string',
                width: 250,
            },
        ];
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
        console.log(selectedTab)
    };

    // The rest of your component code remains unchanged
    // ...

    return (
        <div className="users">
            <div className="tabs-container">
                <Tabs value={selectedTab} onChange={handleTabChange} >
                    {siteTabs.map((site) => (
                        <Tab key={site.siteName} label={site.siteName} value={site.siteName}
                              />
                    ))}
                </Tabs>
            </div>

            {(selectedTab === "اطلاعات سایت") && (
                <div>
                <div className="tab-content">
                    <h3>{`${selectedTab}`}</h3>
                    <div className="info">
                        <button onClick={() => setOpen(true)}>اضافه کردن مکان جدید</button>
                        <div className="filter">
                            <div className="filterButton" onClick={() => setFilter(!filter)}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg" className="svg_filterbutton">
                                    <path d="M4 6H20M7 12H17M9 18H15" stroke="#000" stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                                <span>فیلتر</span>
                            </div>
                            {filter && <Filter setFilter={setFilter} columns={columns} rows={userRows}
                                               setFilteredRows={setFilteredRows}/>}
                        </div>
                    </div>

                </div>

                        <DataTable slug="users" columns={columns} rows={filteredRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
                </div>
            )}


        </div>
    );
}

export default Site;
