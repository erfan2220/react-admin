

import './Login.css'
import {useAuth} from "./AuthContext.tsx";
const Login = () =>
{
    const {login,setLogin}=useAuth()
    const handleSignIn = () => {
        // Toggle the login state using the setLogin function
        setLogin(!login);
    };



return(
    <div className="Login">

        <section className="image_Login_container">
            <img className="logo_container" src="/logo%20config-x.svg" alt=""/>
        </section>
        <section className="form_Login_container">
            <div className="input_container">
                <div className="username_container">
                    <label htmlFor="">Username</label>

                    <input type="text" placeholder="Type your username here"/>
                    <img src="/UserCircle%20(1).svg" alt=""/>

                </div>
                <div className="password_container">
                    <label htmlFor="">Password</label>

                    <input type="password" placeholder="Type your password here"/>
                    <img src="/Lock.svg" alt=""/>

                </div>
                <button onClick={handleSignIn}>Sign in</button>
            </div>
            <div className="line"></div>
            <div className="loremipsun_container">
                <div className="loremipsun_container_part1">
                    <img src="/Info.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue</p>
                </div>

                <div className="loremipsun_container_part2">
                    <img src="/Info.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue</p>
                </div>

            </div>

        </section>
    </div>
)


};

export default Login;