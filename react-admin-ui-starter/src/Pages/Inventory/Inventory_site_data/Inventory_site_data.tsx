//@ts-nocheck
import "./Inventory_site_data.css"
import {useState} from "react";
import Paginate from "../../../Component/Paginate/Paginate.tsx";
import { CSVLink } from "react-csv";









/*data and columns from inventory*/
const columns =[
    {
        key:1,
        header:"NE"
    },
    {
        key:2,
        header:"Interface Type"
    },
    {
        key:3,
        header:"Administrative Status"
    },
    {
        key:4,
        header:"IP address"
    },
    {
        key:5,
        header:"Interface Description"
    },

]

const data =[
    {
        key: 1,
        "NE": "BAAFSA_TH001",
        "Interface Type": "Eth-Trunk",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 2,
        "NE": "BAAFSA_TH001",
        "Interface Type": "English",
        "Administrative Status": "down",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 3,
        "NE": "BAAFSA_TH001",
        "Interface Type": "English",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 4,
        "NE": "",
        "Interface Type": "English",
        "Administrative Status": "Up",
        "IP address": "10.32.225.65",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 5,
        "NE": "BAAFSA_TH001",
        "Interface Type": "English",
        "Administrative Status": "down",
        "IP address": "10.32.225.65",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 6,
        "NE": "",
        "Interface Type": "English",
        "Administrative Status": "Up",
        "IP address": "",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 7,
        "NE": "BAAFSA_TH001",
        "Interface Type": "",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 8,
        "NE": "baafsa_th0001",
        "Interface Type": "English",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 9,
        "NE": "baafsa_th0001",
        "Interface Type": "Eth-Trunk",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 10,
        "NE": "baafsa_th0001",
        "Interface Type": "Eth-Trunk",
        "Administrative Status": "down",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },
    {
        key: 11,
        "NE": "baafsa_th0001",
        "Interface Type": "Eth-Trunk",
        "Administrative Status": "Up",
        "IP address": "--",
        "Interface Description": "To-TH2788-5G"
    },



]











const InventorySiteData = () =>
{
    const [currentPage, setCurrentPage] = useState(1);


    const postsPerPage = 7;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const csvData = [
        columns.map((column) => column.header), // First row as headers
        ...currentPosts.map((row) => columns.map((column) => row[column.header])) // Rows of data
    ];


    const formattedCsvData = csvData.map((row, rowIndex) =>
        row.map((col, colIndex) => (rowIndex === 0 ? col : `"${col}"`)).join(",") // Enclose non-header rows in quotes
    ).join("\n");

    return (
        <div className="InventorySiteData_container">

            <div className="table_header_Inventory">
                <h2>RAN/Huawei/IPBB</h2>

                <div className="show_pages_export">

                    {
                    /*<div className="show_pages">
                        <span>Show</span>
                        <div className="increase_decrease_pages">
                            <span>10</span>
                            <div className="">
                                <img src="./CaretDownBlack.svg" alt="" style={{rotate: "180deg"}}/>
                                <img src="./CaretDownBlack.svg" alt=""/>
                            </div>
                        </div>
                    </div>*/
                    }

                    <CSVLink  data={formattedCsvData} filename={"inventory_data.csv"}>
                        <div className="export_button">

                                <img src="./Export.svg" alt="" />
                                <span>Export report</span>
                        </div>
                    </CSVLink>
                </div>
            </div>
            <div className="table_container_sites">
                <table className="table_class">
                    <thead>
                    {columns.map(column => (
                        <th key={column.key}>{column.header}</th>
                    ))}
                    </thead>
                    <tbody>
                    {currentPosts.map((row, rowIndex) => ( // Iterate over currentPosts instead of data
                        <tr key={rowIndex}>
                            {columns.map(column => (
                                <td key={column.key}>
                                        <span className={row[column.header] === "Up" ? "up-text" : row[column.header] === "down" ? "down-text" : ""}>
                                            {row[column.header]}
                                        </span>
                                </td>
                            ))}
                        </tr>
                    ))}

                    </tbody>
                </table>

            </div>

                {data ? (
                        <Paginate
                            postsPerPage={postsPerPage}
                            totalPosts={data.length}
                            paginate={paginate}
                        />
                ) : (
                    <div className="loading">Loading...</div>
                )}

        </div>
    );
};

export default InventorySiteData