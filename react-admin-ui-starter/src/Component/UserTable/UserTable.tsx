//@ts-nocheck
import "./UserTable.css"
import {useState} from "react";
import Paginate from "../../Component/Paginate/Paginate.tsx";
import User from "../../database/User.ts"










/*data and columns from inventory*/
const columns =[
    {
        key:1,
        header:"User"
    },
    {
        key:2,
        header:"Last_Active"
    },
    {
        key:3,
        header:"Role"
    },
    {
        key:4,
        header:"Edit"
    },


]










const UserTable = (props) =>
{
    const [currentPage, setCurrentPage] = useState(1);
    const [importOpen,setImportOpen]=useState(false)


    const postsPerPage = 7;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = User.slice(indexOfFirstPost, indexOfLastPost);


// Inside your component function
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState(new Array(currentPosts.length).fill(false));



    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        const newSelectedRows = selectedRows.map(() => !selectAll);
        setSelectedRows(newSelectedRows);
    };

    const handleCheckboxChange = (index) => {
        const newSelectedRows = [...selectedRows];
        newSelectedRows[index] = !selectedRows[index];
        setSelectedRows(newSelectedRows);
    };


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

            </div>
            <div className="table_container_sites">
                <table className="table_class2">

                    <thead>
                    <th>
                        <input type="checkbox" onChange={handleSelectAll} checked={selectAll}/>
                    </th>
                    {columns.map(column => (
                        <th key={column.key}>{column.header}</th>
                    ))}
                    </thead>
                    <tbody>
                    {currentPosts.map((row, rowIndex) => ( // Iterate over currentPosts instead of data
                        <tr key={rowIndex}>

                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(rowIndex)}
                                    checked={selectedRows[rowIndex]}
                                    width={20}
                                    height={20}
                                />
                            </td>

                            {columns.map(column => (
                                <td key={column.key}>
                                    {
                                        column.header === "User" ? (
                                            <div className="user_icon_row">
                                                <img src="./User_Icon.svg" alt=""/>
                                                <span
                                                    className={row[column.header] === "Up" ? "up-text" : row[column.header] === "down" ? "down-text" : ""}>
                                                {row[column.header]}
                                            </span>

                                            </div>
                                        ) : column.header === "Edit" ? (
                                            <div className="Edit_User_section">
                                                <img src="./edit_2.svg" alt=""/>
                                                <img src="./delete_2.svg" alt=""/>
                                            </div>
                                        ) : (
                                            <span
                                                className={row[column.header] === "Up" ? "up-text" : row[column.header] === "down" ? "down-text" : ""}>
                                         {row[column.header]}
                                         </span>
                                        )}
                                </td>
                            ))}
                        </tr>
                    ))}

                    </tbody>
                </table>

            </div>

            {User ? (
                <Paginate
                    postsPerPage={postsPerPage}
                    totalPosts={User.length}
                    paginate={paginate}
                />
            ) : (
                <div className="loading">Loading...</div>
            )}

        </div>
    );
};

export default UserTable