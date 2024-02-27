import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import ShowData from "./ShowData";
function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowData />}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Home;