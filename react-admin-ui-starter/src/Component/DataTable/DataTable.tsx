import React from 'react';
import Box from '@mui/material/Box';
import './DataTable.css';
import {Link} from "react-router-dom";
import { DataGrid, GridColDef,GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import Filter from "../../Component/Filter/Filter.jsx"



type Props=
    {
        columns:GridColDef[],
        rows:object[],
        slug:string,
    }

const DataTable = (props:Props) =>
{

    const handleDelete=(id:number)=>
    {
        //axios.delete(`/api/${slug}/id`)
    }

    const actionColumn:GridColDef=
        {
        field:"action",
        headerName:"action",
        width:200,
        renderCell:(params)=>{
            return(
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="./view.svg" alt=""/>
                    </Link>
                    <div className="delete" onClick={()=> handleDelete(params.row.id)} >
                        <img src="/delete.svg" alt=""/>
                    </div>
                </div>
            )
        }
    }

    return(

            <div className="dataTable">

                    <DataGrid
                        className="dataGrid"
                        rows={props.rows}
                        columns={[...props.columns, actionColumn]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        slots={{toolbar:GridToolbar,}}
                        slotProps={{
                            toolbar:{
                                showQuickFilter:true,
                                quickFilterProps:{debounceMs:500},

                            }
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        disableDensitySelector
                        disableColumnSelector
                        disableColumnFilter
                    />

            </div>
    )
};

export default DataTable;