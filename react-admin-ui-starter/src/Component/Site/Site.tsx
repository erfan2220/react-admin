import { useState, useEffect } from "react";
import './Site.css'
import DataTable from "../../Component/SiteDataTable/Datatable.tsx";
import { GridColDef } from '@mui/x-data-grid';
import { userRows } from "../../SiteDAta/sitedata.ts";
import Filter from "../Filter/Filter";
import Add from "../../Component/Adduser/Add";

type Props=
    {
        columns:GridColDef[],
        rows:object[],
        slug:string,
    }

const Site = () => {

    const [filteredRows, setFilteredRows] = useState(userRows)
    const [columns, setColumns] = useState<GridColDef[]>([]);


    useEffect(() => {
        // Initial setup
        updateColumns();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const handleResize = () => {
        // Update columns when the window is resized
        updateColumns();
    };

    const updateColumns = () => {
        // Define your columns based on the current screen size
        const screenSize = window.innerWidth;
        const newColumns = (screenSize < 950) ? getMobileColumns() : getDefaultColumns();

        setColumns(newColumns);
    };

    const getMobileColumns = (): GridColDef[] => {
        // Define columns for mobile view
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
            {
                field: 'Per_activity_performed',
                headerName: 'در صد فعالیت های انجام شده',
                width: 160,
                editable: true,
            },
            {
                field: 'Per_activity_delayed',
                headerName: 'در صد فعالیت های معوق شده',
                type: 'string',
                width: 200,
            },
            {
                field: "Per_activity_doneWithDelay",
                headerName: "در صد فعالیت های با تاخیر انجام شده",
                width: 200,
                type: "string",
            },
        ];
    }


    const usersHeader = [
    {
        activity_Performed_Number:"1",
        Per_activity_performed:"1%",
        Per_activity_delayed:"1%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activity_Performed_Number:"5",
        Per_activity_performed:"4%",
        Per_activity_delayed:"5%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activity_Performed_Number:"4",
        Per_activity_performed:"2%",
        Per_activity_delayed:"5%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activity_Performed_Number:"10",
        Per_activity_performed:"6%",
        Per_activity_delayed:"8%",
        Per_activity_doneWithDelay:"1%",
    },

];




    const [open,setOpen]=useState(false)
    const [filter,setFilter]=useState(false)

    return (

        <div className="users">
            <div className="users-header-container">
                <img src="/favicon.svg" alt="" width={30}/>
                <h2>اطلاعات سایت</h2>
            </div>
            <div className="info">
                <button onClick={() => setOpen(true)}>اضافه کردن مکان جدید</button>
                <div className="filter">
                    <div className="filterButton" onClick={() => setFilter(!filter)}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" className="svg_filterbutton">
                            <path d="M4 6H20M7 12H17M9 18H15" stroke="#000" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <span>فیلتر</span>
                    </div>
                    {filter && <Filter setFilter={setFilter} columns={columns} rows={userRows}
                                       setFilteredRows={setFilteredRows}/>}
                </div>
            </div>
            <DataTable slug="users" columns={columns} rows={filteredRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>


    );
}

export default Site;