import {useState} from "react";
import './Site.css'
import DataTable from "../../Component/SiteDataTable/Datatable.tsx";
import {  GridColDef,  } from '@mui/x-data-grid';
import {userRows} from "../../SiteDAta/sitedata.ts";

import Add from "../../Component/Adduser/Add";
import {useParams} from "react-router-dom";

type Props=
    {
        columns:GridColDef[],
        rows:object[],
        slug:string,
    }

const Site = () =>
{

    const id  = useParams();
    const [filteredRows,setFilteredRows]=useState(userRows)

    const columns: GridColDef[] = [

        {
            field: 'siteNAme',
            headerName: 'نام سایت',
            width: 150,
            editable: true,
        },
        {
            field: 'activityPerformedNumber',
            headerName: 'فعالیت های انجام شده',
            width: 150,
            editable: true,
        },
        {
            field: 'Per_activity_performed',
            headerName: 'در صد فعالیت های انجام شده',
            width: 200,
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
            width: 100,
            type: "string",
        },
    ];

    const usersHeader = [
    {
        activityPerformedNumber:"10",
        Per_activity_performed:"1%",
        Per_activity_delayed:"1%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activityPerformedNumber:"2",
        Per_activity_performed:"4%",
        Per_activity_delayed:"5%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activityPerformedNumber:"10",
        Per_activity_performed:"2%",
        Per_activity_delayed:"5%",
        Per_activity_doneWithDelay:"2%",
    },
    {

        activityPerformedNumber:"10",
        Per_activity_performed:"6%",
        Per_activity_delayed:"8%",
        Per_activity_doneWithDelay:"1%",
    },

];




    const [open,setOpen]=useState(false)
    const [filter,setFilter]=useState(false)

    return (

        <div className="users">
            <div>

                <div className="shapes-container">
                    <div className="imagecontainer">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"
                             xmlns="http://www.w3.org/2000/svg" fill="#000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <circle className="cls-1" cx="9.61" cy="7.73" r="4.3"/>
                            <path className="cls-1"
                                      d="M1.5,21.57l.69-3.46A7.58,7.58,0,0,1,9.61,12h0A7.56,7.56,0,0,1,17,18.11l.7,3.46"/>
                            <path className="cls-1" d="M12,11.3a4.3,4.3,0,1,0,0-7.14"/>
                            <path className="cls-1" d="M22.5,21.57l-.7-3.47A7.55,7.55,0,0,0,12,12.41"/>
                            </g>
                        </svg>
                    </div>
                    <span>total Scores</span>
                    <h1>2.456</h1>
                </div>

            </div>
            <div className="info">
                <h2>Users</h2>
                <button onClick={() => setOpen(true)}>add New User</button>
                {/*<div className="filter" >*/}
                {/*    <div className="filterButton" onClick={()=>setFilter(!filter)}>*/}
                {/*        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path d="M4 6H20M7 12H17M9 18H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
                {/*        </svg>*/}
                {/*       */}
                {/*    </div>*/}
                {/*    {filter && <Filter setFilter={setFilter} columns={columns} rows={userRows} setFilteredRows={setFilteredRows} />}*/}
                {/*</div>*/}
            </div>
            <DataTable  slug="users" columns={columns} rows={userRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>


    );
}

export default Site;