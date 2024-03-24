import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Menu from './Component/Menu/Menu';
import Login from './Pages/Login/Login';
import './styles/global.css';

import { AuthProvider, useAuth } from './Pages/Login/AuthContext';
import {useEffect, useState} from 'react';

import React, { lazy, Suspense } from 'react';



const Dashboard = lazy(() => import('./Pages/Dashboard/dashboard'));
const ConfigM = lazy(() => import('./Pages/Config Management/ConfigM'));
const Settings = lazy(() => import('./Pages/Settings/Setting'));
const Assets = lazy(() => import('./Pages/Home/Assets'));
const Inventory = lazy(() => import('./Pages/Inventory/Inventory'));
const Visualize = lazy(() => import('./Pages/Visualize/visualize'));
const Site = lazy(() => import('./Component/Site/Site'));
const CellsInfo = lazy(() => import('./Component/CellsInfo/CellsInfo'));


interface LayoutProps {
    repeatedLogin: boolean;
    setRepeatedLogin: (value: boolean) => void;
    count: number;
    setCount: (value: number) => void;
}

interface LayoutProps2 {
    setRepeatedLogin: (value: boolean) => void;
    count: number;
    setCount: (value: number) => void;
}
interface AuthHookReturnType {
    login: boolean;
    setLogin: (value: boolean) => void;
}





const Layout: React.FC<LayoutProps> = ({ repeatedLogin, count, setCount }) => {
    const { login, setLogin } = useAuth() as AuthHookReturnType;

    const navigate = useNavigate();
    useEffect(() => {
        // If the user is logged in, redirect to the dashboard
        if (login) {
            navigate('/Dashboard');
        }
    }, [login]);

    if (!login && repeatedLogin) {

        return <Login />;

    }

    if (!login && count === 1) {
        setCount(2);
        return <Login />;
    }

    return (
        <div className="main">
            <Navbar setLogin={setLogin} setCount={setCount} />
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
    );
};

const ProtectedLayout: React.FC<LayoutProps2> = ({ setRepeatedLogin, setCount, count }) => {
    const {  setLogin } = useAuth();

    useEffect(() => {
        setRepeatedLogin(false);
        setCount(count + 1);
    }, []);

    return (
        <div className="main">
            <Navbar setLogin={setLogin} setCount={setCount} />
            <div className="container">
                <div className="Content-container">
                    <Site />
                </div>
            </div>
        </div>
    );
};
const ProtectedLay: React.FC<LayoutProps2> = ({  setRepeatedLogin, setCount, count }) => {
    const {  setLogin } = useAuth();

    useEffect(() => {
        setRepeatedLogin(false);
        setCount(count + 1);
    }, []);

    return (
        <div className="main">
            <Navbar setLogin={setLogin} setCount={setCount} />
            <div className="container">
                <div className="Content-container">
                    <CellsInfo />
                </div>
            </div>
        </div>
    );
};

function App() {
    const [repeatedLogin, setRepeatedLogin] = useState(true);
    const [count, setCount] = useState(1);

    return (
        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                        <Route
                            path="/"
                            element={
                                <Layout
                                    repeatedLogin={repeatedLogin}
                                    setRepeatedLogin={setRepeatedLogin}
                                    setCount={setCount}
                                    count={count}
                                />
                            }>
                            <Route index element={<Dashboard />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/ConfigM" element={<ConfigM />} />
                            <Route path="/Settings" element={<Settings />} />
                            <Route path="/asset" element={<Assets />} />
                            <Route path="/Inventory" element={<Inventory />} />
                            <Route path="/Visualize" element={<Visualize />} />
                        </Route>
                        <Route
                            path="/sites/:cityName"
                            element={
                                <ProtectedLayout
                                    setRepeatedLogin={setRepeatedLogin}
                                    setCount={setCount}
                                    count={count}
                                />
                            }>
                            <Route element={<Site />} />
                        </Route>
                        <Route
                            path="/cells/:siteName"
                            element={
                                <ProtectedLay
                                    setRepeatedLogin={setRepeatedLogin}
                                    setCount={setCount}
                                    count={count}
                                />
                            }>
                            <Route element={<CellsInfo />} />
                        </Route>


                </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

