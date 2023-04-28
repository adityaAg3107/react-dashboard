import React from "react";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/sidebar/Sidebar";

const Home = () => {

    return (
            <div className="App">
                <div className="appGlass">
                    <Sidebar />
                    <MainDash />
                    <RightSide />
                </div>
            </div>
    )
}

export default Home