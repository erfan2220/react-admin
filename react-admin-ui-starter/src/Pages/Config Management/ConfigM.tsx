//@ts-nocheck
import "../Inventory/Inventory.css"
import  Inevntory_menu from "../../database/Inventory_Menu/Inventory_menu.ts"
import {useState} from "react";
import InventoryFirstPage from "../../Component/InventoryFirstPage/InventoryFirstPage.tsx";
import InventorySiteData from "../Inventory/Inventory_site_data/Inventory_site_data.tsx";



const ConfigM = () => {
    const [open,setOpen]=useState(false)
    const [cLoseReports,setCLoseReports]=useState(true)
    const [tag,setTag]=useState<string[]>([])
    const [sitedata,setSitedata]=useState(false)

    const [searchValue,setSearchValue]=useState("")


    /* this state is for checking process of  search*/
    const [searchtitle,setSearchtitle]=useState(false)



    const handleProvinceMenuClick = (itemTitle: string, provinceTitle: string) => {
        if (open && tag[0] === itemTitle && tag[1] === provinceTitle) {
            setOpen(false);
            setTag([]);
        }
        else {
            setOpen(true);
            setTag([itemTitle, provinceTitle]);
        }
    };

    const handleSiteName = (siteName: string) =>
    {
        setSitedata(true)

        if (siteName)
        {
            setTag(prevTag =>
            {
                let newTag:string[]=[];

                if (tag.length>2)
                {

                    newTag=[...prevTag.slice(0,-1),siteName]
                }
                else
                {
                    newTag = [...prevTag, siteName];
                }

                console.log(tag)
                return newTag;
            })
        }
        else {
            setTag([siteName])
            console.log(tag)
        }

    };


    const filteredInventoryMenu = Inevntory_menu.filter((item: any) => {
        // Check if the item's title matches the search value
        if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true; // Return true immediately if item title matches search query
            setSearchtitle(true)
        }


        // Check if any province title matches the search value
        if (item.itemsFirst.some((province: any) =>
            province.title.toLowerCase().includes(searchValue.toLowerCase())
        )) {

            return true; // Return true if any province title matches search query
        }

        // Filter and map itemsFirst if neither item title nor province title matches
        const filteredItemsFirst = item.itemsFirst.filter((province: any) =>
            province.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Return true if there are filtered itemsFirst
        return filteredItemsFirst.length > 0;
    });



    return (
        <div className="ALl-of-Inventory-container">
            <div className="Inventory-menu">
                <div className="Inventory-search-menu">
                    <img src="./search.svg" alt=""/>
                    <input type="text" placeholder="Search here..." value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
                <div className="menu_Inventory">
                    {
                        /*
                        {
                            Inevntory_menu.map((item:any)=>(
                                <div className="Inv_menu_items_container">
                                    <div className="row_title_inventory" >
                                        <img src="./SquaresFour.svg" alt="" width={20}/>
                                        <span>{item.title}</span>
                                    </div>
                                    {
                                        item.itemsFirst.map((province:any)=>(
                                            <div className="province_menu">
                                                <div className="province_menu_sites"  onClick={()=>
                                                {
                                                    handleProvinceMenuClick(item.title, province.title)
                                                }
                                                } >

                                                    {
                                                        ((tag[0] === item.title) && (tag[1] === province.title)) ? (
                                                        <span style={{
                                                            color: open ? "#007BFF" : "white",
                                                            opacity: open ? "0.8" : "0.9"
                                                        }}>{province.title}</span>
                                                    ) : <span>{province.title}</span>
                                                    }
                                                    {
                                                        ((tag[0] === item.title) && (tag[1] === province.title) && open) ? <img src="./arrow-up.svg" alt=""/> :
                                                            <img src="./arrow-down.svg" alt=""/>
                                                    }


                                                </div>
                                                { open &&  (tag[1]===province.title) && (tag[0]===item.title)&& (
                                                <div className={`sites_Name_containers ${open ? 'open' : ''}`}>
                                                {

                                                        province.Sites.map((site:any,index:any)=>(

                                                            <div>
                                                                {
                                                                    ( (tag[1]===province.title) && (tag[0]===item.title)&& (tag[2] === site.title) )?
                                                                    <div key={index} onClick={() => {
                                                                        handleSiteName(site.title)
                                                                    }}
                                                                         className={`sites_Name_opens`}>
                                                                        <img src="./arrow-right.svg" alt=""/>
                                                                        <span> {
                                                                            site.title
                                                                        }</span>
                                                                    </div> :
                                                                    <div key={index} onClick={() => {
                                                                        handleSiteName(site.title)
                                                                    }}
                                                                                  className={`sites_Name`}>
                                                                        <img src="./arrow-right.svg" alt=""/>
                                                                        <span> {
                                                                            site.title
                                                                        }</span>
                                                                    </div>
                                                                }


                                                            </div>
                                                        ))
                                                }
                                                </div>
                                                )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }*/
                    }


                    {filteredInventoryMenu.map((item: any) => (
                        <div className="Inv_menu_items_container" key={item.title}>
                            <div className="row_title_inventory_2">
                                <img src="./SquaresFour.svg" alt="" width={20}/>
                                <span>{item.title}</span>
                            </div>
                            {item.itemsFirst
                                .filter((province: any) => {
                                    // Check if searchtitle is true and province title or manufacturer title matches search value
                                    if (!searchtitle) {
                                        return province.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                                            item.title.toLowerCase().includes(searchValue.toLowerCase());
                                    }
                                    // Return all provinces if searchtitle is false
                                    return true;
                                })
                                .map((province: any) => (
                                    <div className="province_menu_2" key={province.title}>
                                        <div
                                            className="province_menu_sites_2"
                                            onClick={() => {
                                                handleProvinceMenuClick(item.title, province.title);
                                            }}
                                        >
                                            {tag[0] === item.title && tag[1] === province.title ? (
                                                <span
                                                    style={{
                                                        color: open ? "#007BFF" : "white",
                                                        opacity: open ? "0.8" : "0.9",
                                                    }}
                                                >
                                {province.title}
                            </span>
                                            ) : (
                                                <span>{province.title}</span>
                                            )}
                                            {tag[0] === item.title && tag[1] === province.title && open ? (
                                                <img src="./arrow-up.svg" alt=""/>
                                            ) : (
                                                <img src="./arrow-down.svg" alt=""/>
                                            )}
                                        </div>
                                        {open && tag[1] === province.title && tag[0] === item.title && (
                                            <div className={`sites_Name_containers ${open ? "open" : ""}`}>
                                                {province.Sites.map((site: any, index: any) => (
                                                    <div key={index}>
                                                        {tag[1] === province.title && tag[0] === item.title && tag[2] === site.title ? (
                                                            <div
                                                                onClick={() => {
                                                                    handleSiteName(site.title);
                                                                }}
                                                                className={`sites_Name_opens`}
                                                            >
                                                                <img src="./arrow-right.svg" alt=""/>
                                                                <span>{site.title}</span>
                                                            </div>
                                                        ) : (
                                                            <div
                                                                onClick={() => {
                                                                    handleSiteName(site.title);
                                                                }}
                                                                className={`sites_Name`}
                                                            >
                                                                <img src="./arrow-right.svg" alt=""/>
                                                                <span>{site.title}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    ))}


                </div>

            </div>


            <div className="inventory_container">
                <h1>Config Management</h1>
                {sitedata ?
                    (<InventorySiteData/>) :
                    <InventoryFirstPage cLoseReports={cLoseReports} setCLoseReports={setCLoseReports}/>

                }
            </div>
        </div>
    );
};

export default ConfigM;