import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../../compornents/Header/header";
import Sidebar from "../../../compornents/totalSidebar"
import Json from "../../../Json/adventruer/job.json";

const Index = (props) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.querySelector("#__next").style.backgroundImage = `url(../../images/ranking/background.png)`
    })

    const world = [
        "luna",
        "scania",
        "elysium",
        "croa",
        "aurora",
        "bera",
        "red",
        "union",
        "zenith",
        "enosis",
        "arcane",
        "nova"
    ]

    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/ranking.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <Sidebar kind="World"/>
                <div className="ranking__main">
                    <img id="prev-btn" className="pointer" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
                    <div>
                        <div className="ranking__insignia">
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div className="flex-center"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                        </div>
                    </div>
                    <img id="next-btn" className="pointer" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1)} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Index;
