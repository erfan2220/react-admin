import PieChartBoxInventory from "../pieChartBoxInventory/pieChartBoxInventory.tsx";

const InventoryFirstPage = (props) => {
    return (
        <div>
            {
                props.cLoseReports &&(
                <div className="Inventory-container-get-reports">
                    <div className="Reports-container   " >
                        <img src="./close.svg" width={20} alt="" onClick={()=>
                            props.setCLoseReports(false)}/>
                        <h2>Get Reports</h2>
                        <span>please choose an option from left side menu to view report</span>
                    </div>
                    <div>
                        <img src="./get_reports.svg" alt=""/>
                    </div>
                </div>)
            }
            <div className="charts-inventory-container">
                <div className="Inv-title-container">
                    <div className="Inv-chart-titr">
                        <img src="./ChartLine.svg" alt="" width={24}/>
                        <h2>Overview</h2>
                    </div>
                    <div className="duration-container">
                        <h2>All Time</h2>
                        <img src="./CaretDownBlack.svg" alt=""/>
                    </div>
                </div>
                <div className="charts-container">
                    <div className="PieChartBox-container"><PieChartBoxInventory title={"Number of cells"} number={"2,234"}/></div>
                    <div className="PieChartBox-container"><PieChartBoxInventory title={"Number of cells"} number={"2,234"}/></div>
                    <div className="PieChartBox-container"><PieChartBoxInventory title={"Number of cells"} number={"2,234"}/></div>
                    <div className="PieChartBox-container"><PieChartBoxInventory title={"Number of cells"} number={"2,234"}/></div>
                </div>
            </div>
        </div>
    );
};

export default InventoryFirstPage;