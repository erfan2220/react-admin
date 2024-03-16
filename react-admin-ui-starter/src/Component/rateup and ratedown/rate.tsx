//@ts-nocheck

import "./rate.css"
const Rate = ({calculation}) =>
{
    return (
        <div className={ calculation === "positive" ? "rate_number_container_positive": "rate_number_container_nagative"}>
            {
                calculation === "positive" &&
                (
                    <div className="rate_items_container_positive">
                        <img src="./rateup.svg" alt=""/>
                        <span>12.5%</span>
                    </div>
                )
            }

            {
                calculation === "negative" &&
                (
                    <div className="rate_items_container_nagative">
                        <img src="./ratedown.svg" alt=""/>
                        <span>12.5%</span>
                    </div>
                )
            }

        </div>
    );
};

export default Rate;