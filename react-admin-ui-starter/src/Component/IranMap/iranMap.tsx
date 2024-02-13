import  React, { useRef,useState, useEffect } from "react";
import iranProvinces from "../../dataMap/iranProvinces.jsx";
import iranBorder, { caspianD, persianGulfD } from "../../dataMap/IranMapData.js";
import styles from "./Iranmap.module.css";
import {abaali} from "../../database/SiteDAta/abaali.ts";

import 'reactjs-popup/dist/index.css';
import {Bar, BarChart, ResponsiveContainer} from "recharts";

const useMouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const setMousePositionRef = useRef(setMousePosition);


    useEffect(() => {


        setMousePositionRef.current = setMousePosition;
        function handle(e:MouseEvent) {
            setMousePositionRef.current({
                x: e.pageX,
                y: e.pageY,
            });
        }

        const mapEffect = document.querySelector("#mySvg");  // Use the ID selector
        console.log(mapEffect)
        mapEffect?.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle);
    }, []);

    return mousePosition;
};

const IranMap = () => {
    const {x, y} = useMouse();
    const [provinces] = useState(() => iranProvinces);
    const [provinceName, setProvinceName] = useState("");
    const [provinceNameOnClick, setProvinceNameOnClick] = useState("");

    const [mapZoom, setMapZoom] = useState(false);
    const [provinceSelected, setProvinceSelected] = useState(false);

    const [cities, setCities] = useState(["تمام ایران"]);


    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [citySelected, setCItySelected] = useState(false)
    const [isChecked, setChecked] = useState(false);

    const [pupop,setPupop]=useState(false)


    const [uvValues, setUvValues] = useState([Math.floor(Math.random() * 1000)]);

    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newUvValue = Math.floor(randomNumber(300,500) * 3000);
            setUvValues(prevValues => {
                const updatedValues = [...prevValues, newUvValue];
                if (updatedValues.length > 16) {
                    // Remove the oldest value
                    updatedValues.shift();
                }
                return updatedValues;
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);




    let currentIndex = 0;

    const data = uvValues.map((uv) =>
    {
        if (currentIndex < 7) {
            const entry = {
                name: `Page ${String.fromCharCode(65 + currentIndex)}`,
                uv: uv,
            };
            currentIndex++;
            return entry;
        }
        else {
            currentIndex=0;
            return null;
        }
    }).filter(entry => entry !== null);

    /*
        const handleCheckboxChange = () => {
            setChecked(!isChecked);
        };

    */


    return (
        <>
            {pupop && (
                <section className={styles.show_title}>
                    {provinceName}
                    <div className="show_title_chartBar" style={{width: '165px', height: '52px'}}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <Bar dataKey="uv" fill="#99CAFF" barSize={20} opacity="0.9" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <style>{`
                        section {
                            position: absolute;
                            left: ${x + 5 + "px"};
                            top: ${y + 5 + "px"};
                            z-index: 999;
                        }
                    `}</style>
                </section>
            )}
            {provinceSelected && (
                <div>
                    <div
                        className={styles.backdrop}
                        onClick={() => setProvinceSelected(false)}
                    ></div>
                    <div className={styles.cities}>
                        <p>
                            <span className={styles.selected_province}>انتخاب شهر در </span>
                            <span>{provinceNameOnClick}</span>
                        </p>
                        <form>
                            {cities.map((city) => {
                                return (
                                    <>
                                        <input type="checkbox" value={city} name={city} id="cities_class" checked={selectedCities.includes(city)}
                                               onChange={() => {
                                                   if (selectedCities.includes(city)) {
                                                       setSelectedCities(selectedCities.filter(selectedCity => selectedCity !== city));
                                                   } else {
                                                       setSelectedCities([...selectedCities, city]);
                                                   }
                                               }} />
                                        <label htmlFor={city} className={styles.city_label} >
                                            {city}
                                        </label>
                                        <br />
                                    </>
                                );
                            })}




                            <div className={styles.select_cities_btns}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setProvinceSelected(false)
                                        setSelectedCities([])
                                    }}
                                >
                                    بازگشت
                                </button>

                                <input type="submit" value="تایید" onClick={()=> {
                                    setCItySelected(true)
                                    setProvinceSelected(false)
                                }
                                }/>
                            </div>

                        </form>
                    </div>
                </div>
            )}

            {(citySelected && !provinceSelected && (selectedCities != null ) )&& (
                <>
                   <div className={styles.sites_container}>
                       {
                           <section className={styles.site_form_container}>
                               <img src="/arrow-left.svg" alt="title" width={22} style={{rotate: "180deg"}}
                                    onClick={() => {
                                        setProvinceSelected(true)
                                        setCItySelected(false)
                                        setSelectedCities([])
                                    }}/>
                               <div className={styles.header_site_form_container}>
                                <img src="/conversionIcon.svg" alt=""/>
                                <h1>انتخاب سایت</h1>
                               </div>
                               <div className={styles.site_name_container}>
                                   {
                                       abaali.map((item, index) =>
                                           (
                                               <div className={styles.site_link_name_container} key={index}>
                                                   <a href={`sites/${item.sitename}`}>
                                                       {item.sitename}
                                                   </a>
                                               </div>
                                           ))
                                   }
                               </div>
                           </section>
                       }
                   </div>
                </>
            )}


            <div className={styles.container}>
                <div className={styles.map}>
                    <button
                        className={
                            mapZoom
                                ? styles.zoom_btn + " " + styles.zoom_out
                                : styles.zoom_btn + " " + styles.zoom_in
                        }
                        onClick={() => {
                            setMapZoom(!mapZoom);
                        }}
                    />
                    <svg
                        className={
                            mapZoom ? styles.svg + " " + styles.map_zoom : styles.svg
                        }
                        id="mySvg"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="20 0 970 960"
                        enableBackground="new 20 0 970 960"
                        xmlSpace="preserve"
                    >
                        <g className={styles.border}>
                            <path className={styles.iran} d={iranBorder}/>
                        </g>
                        <g className={styles.province}>
                            {provinces.map((province: any) => (
                                <path
                                    key={province.id}
                                    className={province.className}
                                    d={province.d}
                                  onMouseOver={() => {
                                      setProvinceName(province.name)
                                      setPupop(true)
                                  }}
                                   /* onMouseOver={() => handleMouseMapOver(province.name)}*/
                                    onMouseLeave={() => {setProvinceName("")
                                        setPupop(false)
                                    }}

                                    onClick={() => {
                                        setCities(province.cities);
                                        setProvinceSelected(true);
                                        setProvinceNameOnClick(province.name);
                                    }}
                                />
                            ))}
                        </g>
                        <g className={styles.sea}>
                            <path className={styles.caspian} d={caspianD} />
                            <path
                                className={styles.persian_gulf}
                                onMouseOver={() => setProvinceName("جزایر خلیج فارس")}
                                onMouseLeave={() => setProvinceName("")}
                                d={persianGulfD}
                            />
                        </g>
                        <g className={styles.lake}>
                            <path
                                className={styles.jazmourian}
                                d=" M 735.39 728.39 C 739.32 725.48 744.50 726.12 749.09 726.06 C 748.87 730.23 748.85 734.76 746.25 738.27 C 744.31 740.90 742.24 743.89 739.07 745.09 C 735.82 743.00 735.87 738.59 734.78 735.26 C 734.53 733.01 733.02 729.97 735.39 728.39 Z"
                            />
                            <path
                                className={styles.qom}
                                d=" M 392.53 316.41 C 396.15 319.51 400.05 322.33 403.25 325.88 C 405.56 328.37 405.60 331.94 406.17 335.09 C 399.76 335.20 393.56 333.51 387.51 331.56 C 390.12 326.86 392.05 321.79 392.53 316.41 Z"
                            />
                            <path
                                className={styles.urmia}
                                d=" M 70.94 100.38 C 76.66 94.04 88.01 97.27 90.48 105.14 C 89.12 111.83 86.35 118.54 87.47 125.50 C 88.30 127.83 90.56 129.30 92.62 130.47 C 95.27 131.90 98.30 130.53 101.12 130.96 C 104.02 131.89 105.83 134.55 107.85 136.66 C 105.87 138.36 103.19 140.92 105.12 143.69 C 109.33 148.80 115.47 152.40 118.27 158.65 C 118.78 159.50 118.71 160.29 118.05 161.03 C 115.60 163.09 112.39 164.01 109.96 166.10 C 109.61 169.05 109.90 172.04 109.99 175.00 C 107.00 174.40 103.25 174.51 101.33 171.69 C 96.74 164.74 92.82 157.11 86.45 151.56 C 83.31 148.97 83.19 144.67 81.91 141.10 C 80.21 136.23 78.11 131.51 76.67 126.55 C 75.23 125.31 73.66 124.19 72.49 122.68 C 71.82 120.64 71.96 118.40 72.41 116.33 C 73.48 112.43 78.57 111.08 79.29 107.06 C 79.94 102.30 74.03 101.97 70.94 100.38 Z"
                            />
                        </g>
                    </svg>

                </div>
            </div>
        </>
    );
};

export default IranMap;