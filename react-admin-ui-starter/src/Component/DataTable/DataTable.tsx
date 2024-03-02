
import './DataTable.css';
import {Link} from "react-router-dom";
import { DataGrid, GridColDef,GridToolbar } from '@mui/x-data-grid';




type Props=
    {
        columns:GridColDef[],
        rows:object[],
        slug:string,
    }


const DataTable = (props:Props) =>
{
    {/*
        const infoWithIds = info.map((row, index) => ({
            ...row,
            id: index + 1 // Adding 1 to index to start ids from 1
        }));*/}


    const actionColumn:GridColDef=
        {
        field:"action",
        headerName:"action",
        width:200,
        renderCell:(params)=>{
            return(
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.cellname}`}>
                        <img src="./view.svg" alt=""/>
                    </Link>
                    <div className="delete"  >
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
                        slots={{toolbar:GridToolbar}}
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