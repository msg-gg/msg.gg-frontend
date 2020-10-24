import React, { useState } from 'react';
import Head from "next/head";
import Header from "../../../compornents/Header/header";
import Footer from "../../../compornents/Footer/footer"

const Index = () => {
    const [job, setJob] = useState('dualblade');
    const [group, setGroup] = useState('Adventurer');
    
    var background = {
        backgroundImage: `url(../../../images/background/${job}.png)`,
        filter: `blur("50%")`
    }
    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/job/job.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
                <script src="/js/app.js"></script>
            </Head>
            <Header></Header>
            <div className="character">
                <div className="character__bg" style={background}></div>
                <ul className="character__sidebar">
                    <li className="character__group pointer">
                        <a href="#">레지스탕스</a>
                    </li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Index;
