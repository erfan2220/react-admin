import './Navbar.css';

const Navbar = () =>
    (
        <div className="Navbar">
            <div className="logo">
                <img src="/public/logo.svg" alt="logo"/>
                <p>Admin-page</p>
            </div>
            <div className="icons-container">
                <img src="/public/search.svg" className="icon"></img>
                <img src="/public/app.svg" className="icon"></img>
                <img src="/public/expand.svg" className="icon"></img>

                <div className="notification">
                    <img src="/public/notifications.svg"></img>
                    {/* <span>1</span>*/}
                </div>
                <div className="user-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQbq01vH30cwFgEuaxdo1nSVlcUsPJFIa4gtMj2nP8VLa_iPUEySE_rYL3-3cXFBK07E&usqp=CAU"></img>
                    <span>Jane</span>
                </div>
                <img src="/public/setting.svg"></img>
            </div>
        </div>
    );

export default Navbar;