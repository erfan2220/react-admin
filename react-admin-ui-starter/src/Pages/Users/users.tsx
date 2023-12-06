import React, {useState} from 'react';
import './users.css'
import DataTable from "../../Component/DataTable/DataTable";
import { DataGrid, GridColDef,GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import {userRows} from "../../data";
import Add from "../../Component/Adduser/Add";
import Filter from "../../Component/Filter/Filter";
import {Label} from "recharts";


const Users = () =>
{

    const [filteredRows,setFilteredRows]=useState(userRows)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'img', headerName: 'Avatar', width: 100,
            renderCell:(params)=>
            {
                return <img src={params.row.img || "/noavatar.png"} alt=""/>
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'string',
            width: 200,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 100,
            type: "string",
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 80,
            type: "boolean",
        },
    ];



    const [open,setOpen]=useState(false)
    const [filter,setFilter]=useState(false)

    return (
        <div className="users">
            <div className="info">
                <h2>Users</h2>
                <button onClick={()=>setOpen(true)}>add New User</button>
                <div className="filter" >
                    <div className="filterButton" onClick={()=>setFilter(!filter)}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M7 12H17M9 18H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Filters</span>
                    </div>
                    {filter && <Filter setFilter={setFilter} columns={columns} rows={userRows} setFilteredRows={setFilteredRows} />}
                </div>
            </div>
            <DataTable slug="users" columns={columns} rows={filteredRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>


    );
}

export default Users;