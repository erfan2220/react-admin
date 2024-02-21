
import "./Paginate.css"
import {useState, useEffect} from "react";


const Paginate = ({ postsPerPage, totalPosts, paginate }) =>
{
    const pageNumbers =[];

    const [activePage, setActivePage] = useState(1);



    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handle_next_page=()=>
    {
        const nextPage = activePage + 1;
        if (nextPage <= Math.ceil(totalPosts / postsPerPage)) {
            paginate(nextPage);
            setActivePage(nextPage);
        }
    }
    const handle_prev_page=()=>
    {
        const prevPage =activePage -1;

        if (prevPage > 0) {
            paginate(prevPage);
            setActivePage(prevPage);
        }

    }


    return (
        <div className="pagination_inventory">
            <div className="prev_button" onClick={()=>handle_prev_page()}>
                <img src="./Previous_button.svg" alt=""/>
                <span>Previous</span>
            </div>


            <ul className="pagination_buttons">
                {pageNumbers.map((number) => (
                    <li key={number} onClick={() => {
                        setActivePage(number)
                        paginate(number)
                    }}
                        className={number === activePage ? "page-active" : "page-number"}>
                        {number}
                    </li>
                ))}
            </ul>

            <div className="next_button" onClick={()=>handle_next_page()}>
                <span>Next</span>
                <img src="./Next_button.svg" alt=""/>
            </div>
        </div>

    );
};

export default Paginate;