//@ts-nocheck

import './Login.css'
import {useAuth} from "./AuthContext.tsx";
import {useState} from "react";
import configXLogo from "../../../public/ConfigXlogo.svg"
import configXBackground from "../../../public/ConfigXback.svg"

type Auth = {
    login: boolean; // Assuming login is boolean
    setLogin: (value: boolean) => void; // Assuming setLogin is a function that takes a boolean argument and returns void
};


const Login = () =>
{
    const { login, setLogin }: Auth = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    const handleSignIn = () => {
        if (username === defaultUsername && password === defaultPassword) {
            // Toggle the login state using the setLogin function
            setLogin(!login);

        }
        else {
            // Provide feedback to the user that the credentials are incorrect
            alert('Incorrect username or password');
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

return(
    <div className="Login">

        <section className="image_Login_container">
            <img className="logo_container" src={configXBackground} alt=""/>

        </section>
        <div className="logo_middle">
            <img src={configXLogo} alt=""/>
        </div>
        <div className="Configx-form-container">
            <section className="form_Login_container">
                <div className="input_container">
                    <div className="username_container">
                        <label htmlFor="">Username</label>

                        <input
                            type="text"
                            placeholder="Type your username here"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <img src="/UserCircle%20(1).svg" alt=""/>

                    </div>
                    <div className="password_container">
                        <label htmlFor="">Password</label>

                        <input
                            type="password"
                            placeholder="Type your password here"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <img src="/Lock.svg" alt=""/>

                    </div>
                    <button onClick={handleSignIn}>Sign in</button>


                </div>
                <div className="line"></div>
                <div className="loremipsun_container">

                    <div className="loremipsun_container_logo">
                        <img src={configXLogo} alt=""/>
                    </div>

                    <div className="loremipsun_container_part1">
                        <p>Welcome in</p>
                        <p>Mv Oss Config-X Product</p>
                    </div>

                    <div className="loremipsun_container_part2">
                        <img src="/Info.svg" alt=""/>
                        <p>Please Enter your username and password to login</p>
                    </div>

                </div>

            </section>
        </div>

    </div>
)


};

export default Login;