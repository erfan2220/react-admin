
//@ts-nocheck
import './DataTable.css';
import { DataGrid, GridColDef,GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';




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



    return(

        <div className="dataTable">

            <DataGrid
                className="dataGrid"
                rows={props.rows}
                columns={[...props.columns]}
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