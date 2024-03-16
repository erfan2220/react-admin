//@ts-nocheck
import './DataTable.css';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

const DataTable = (props: Props) => {


    const navigate = useNavigate();

    const renderNonEditableCell = (params: GridCellParams) => {
        return <Typography>{params.value}</Typography>;
    };

    const columnsWithRenderer: GridColDef[] = props.columns.map((column) => ({
        ...column,
        renderCell: renderNonEditableCell
    }));




    const handleRowClick = (params: any) =>
    {
        // Extract site_code from the clicked row
        const siteCode = params.row.site_code;
        console.log("5454")
        // Navigate to the desired link
        navigate(`/cells/${siteCode}`);
    };



    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={props.rows}
                columns={columnsWithRenderer}
                pageSize={10}
                checkboxSelection
                disableRowSelectionOnClick
                disableDensitySelector
                disableColumnSelector
                disableColumnFilter
                disableSelectionOnClick
            />
        </div>
    );
};

export default DataTable;
