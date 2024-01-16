

import './Login.css'
const Login = ({setLogin,login}) =>
    (
        <div className="Login">
            <button onClick={setLogin}>Test Login</button>
            <section className="image_Login_container">
              <img className="logo" src="/logo%20config-x.svg" alt="" />
            </section>
            <section className="form_Login_container">
                <div className="input_container">
                    <div className="username_container">
                        <label htmlFor="">Username</label>
                        <input type="text"/>
                    </div>
                    <div className="password_container">
                        <label htmlFor="">Password</label>
                        <input type="text"/>
                    </div>
                    <button>Sign in</button>
                </div>
                <div className="loremipsun_container">
                    <div className="loremipsun_container_part1">
                        <img src="/Info.svg" alt=""/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue
                    </div>

                    <div className="loremipsun_container_part2">
                        <img src="/Info.svg" alt=""/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue
                    </div>

                </div>

            </section>
        </div>


    );

export default Login;