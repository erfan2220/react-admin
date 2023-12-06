
import './Add.css'
import {GridColDef} from "@mui/x-data-grid";

import React from "react";


type Props=
    {
        slug:string,
        columns:GridColDef[],
        setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    }


const Add = (props:Props) =>
{

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>
    {
        e.preventDefault();
        //axios.post(`/api/${slug}s`,{any data here})
    }

    return(
            <div className="Add">
                <div className="modal">
                    <span className="close" onClick={()=>props.setOpen(false)}>X</span>
                    <h1>Add new {props.slug}</h1>
                    <form onSubmit={handleSubmit}>
                        {
                         props.columns.filter(item=>item.field !=="id" && item.field !== "img")
                             .map((column)=>
                             (
                                 <div className="item" id="item" key={column.headerName}>
                                    <label id="label">{column.headerName}</label>
                                    <input type={column.type} placeholder={column.field}/>
                                 </div>
                         )
                            )
                        }
                        <button>Send</button>
                    </form>
                </div>
            </div>
    )
};

export default Add;