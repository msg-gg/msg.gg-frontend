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
                <Sidebar kind="Achievement"/>
            </div>
        </div>
    );
};

export default Index;
