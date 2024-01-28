import Home from "./Pages/Home/Home";
import  {BrowserRouter, Routes,Outlet, Route} from "react-router-dom";
import Users from "./Pages/Users/users";
import Products from "./Pages/Products/products";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Menu from "./Component/Menu/Menu"
import Login from "./Pages/Login/Login";
import './styles/global.css';
import Site from "./Component/Site/Site.tsx";
import {useState} from "react";


function App()
{
    const [login,setLogin]=useState(false)
    const Layout =()=>
    {
        return (
            <div >

                {login ? (
                    <div className="main">
                        <Navbar />
                        <div className="container">
                            <div className="menu-container">
                                <Menu />
                            </div>
                            <div className="Content-container">
                                <Outlet />
                            </div>
                        </div>
                        <Footer />
                    </div>
                ) : (
                    <Login login={login} setLogin={() => setLogin(!login)} />
                )}

            </div>

        )

    }

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/sites/:cellname" element={<Site />} />
                <Route path="/Products" element={<Products/>}/>
            </Route>
            <Route>

                <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
