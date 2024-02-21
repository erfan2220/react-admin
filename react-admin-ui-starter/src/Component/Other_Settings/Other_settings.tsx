import "./Other_settings.css"
const OtherSettings = () =>
{
    return (
        <div className="Other_settings_container">
            <div>
                <div className="Other_settings_header">
                    <img src="./UserCircleGear_2.svg" alt=""/>
                    <span>Other Settings</span>
                </div>

                <div className="other_language_section_container">
                    <div className="language_section_header">
                        <p>Language : </p>
                    </div>

                    <div className="language_section">
                        <div className="language_section_items">
                            <img src="./Mask group.svg" alt=""/>
                            <span>English</span>
                        </div>
                        <div className="language_section_items" onClick={()=>{

                        }}>
                            <img src="./Change language.svg" alt=""/>
                            <p>Change Language</p>
                        </div>
                    </div>
                </div>


                <div className="other_language_section_container">
                    <div className="language_section_header">
                        <p>Theme : </p>
                    </div>

                    <div className="language_section">
                        <div className="language_section_items">
                            <img src="./SunDim.svg" alt=""/>
                            <span>Light</span>
                        </div>
                        <div className="language_section_items">
                            <img src="./Moon.svg" alt=""/>
                            <p>Switch to Dark mode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSettings;