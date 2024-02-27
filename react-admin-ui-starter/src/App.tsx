import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Menu from './Component/Menu/Menu';
import Login from './Pages/Login/Login';
import './styles/global.css';
import Site from './Component/Site/Site.tsx';
import Dashboard from './Pages/Dashboard/dashboard.tsx';
import Inventory from "./Pages/Inventory/Inventory.tsx";
import Visualize from "./Pages/Visualize/visualize.tsx";
import ConfigM from "./Pages/Config Management/ConfigM.tsx";
import Settings from "./Pages/Settings/Setting.tsx";
import Assets from "./Pages/Home/Assets.tsx";
import {AuthProvider, useAuth} from "./Pages/Login/AuthContext.tsx";
import {useState, useEffect} from "react";


const Layout = ({ repeatedLogin, setRepeatedLogin ,count , setCount}) => {

    const { login, setLogin } = useAuth() as { login: boolean, setLogin: (value: boolean) => void };

    if (!login && repeatedLogin) {
        return <Login />;
    }

    if (!login && count===1 )
    {
        setCount(2)
        return <Login />;
    }
    return (

        <div className="main">
            <Navbar  setLogin={setLogin} setCount={setCount}/>
            <div className="container">
                <div className="menu-container">
                    <Menu/>
                </div>
                <div className="Content-container">
                    <Outlet/>
                </div>
            </div>

            <Footer/>
        </div>

    );
};

const ProtectedLayout = ({ repeatedLogin, setRepeatedLogin, children , setCount ,count}) =>
{

    const { login, setLogin } = useAuth() as { login: boolean, setLogin: (value: boolean) => void };
    setRepeatedLogin (false);
    setCount(count++)

    return (
        <div className="main">
            <Navbar setLogin={setLogin} setCount={setCount} />
            <div className="container">
                <div className="Content-container">
                    <Site/>
                </div>
            </div>
        </div>
    );
};


function App() {
    const [repeatedLogin,setRepeatedLogin]=useState(true)
    const [count, setCount]=useState(1)



    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={<Layout repeatedLogin={repeatedLogin}
                                                     setRepeatedLogin={setRepeatedLogin}
                                                     setCount={setCount}
                                                     count={count}/>}>

                        <Route index element={<Dashboard />}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/ConfigM" element={<ConfigM />} />
                        <Route path="/Settings" element={<Settings />} />
                        <Route path="/asset" element={<Assets />} />
                        <Route path="/Inventory" element={<Inventory />} />
                        <Route path="/Visualize" element={<Visualize />} />
                    </Route>

                    <Route path="/sites/:cityName"
                           element={<ProtectedLayout
                               setRepeatedLogin={setRepeatedLogin} repeatedLogin={repeatedLogin} setCount={setCount}
                               count={count} />}>
                        <Route element={<Site />} />
                    </Route>


                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;