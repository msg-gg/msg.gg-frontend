import React, { useEffect, useLayoutEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Sidebar from "../../compornents/Sidebar";

const onMouseOver = e => {
    let jobImage = e.target.parentNode;
    jobImage.style.transition = ".8s";
    jobImage.style.width = "390px";
    jobImage.style.height = "410px";
}

const onMouseLeave = e => {
    let jobImage = e.target.parentNode;
    jobImage.style.transition = ".8s";
    jobImage.style.width = "14vw";
    jobImage.style.height = "28vh";
}

const Index = (props) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log(num)
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/cygnus.png)`

        let cygnus = document.querySelectorAll(".job__group");
        
        cygnus.forEach(data => {
            let group = document.querySelectorAll(`.${data.classList[1]} > div`);
            group.forEach((job, i) => {
                if(i == 0) {
                    job.style.transform = `translateX(17vw)`;
                } else if(i == 1) {
                    job.style.transform = `translate(11vw, 180px)`;
                } else if(i == 2) {
                    job.style.transform = `translateX(4.5vw)`;
                } else if(i == 3) {
                    job.style.transform = `translate(-2vw, 180px)`;
                }  else if(i == 4) {
                    job.style.transform = `translateX(-9.5vw)`;
                }  else if(i == 5) {
                    job.style.transform = `translate(-16vw, 180px)`;
                } 
            })
        })

        let initJobGroup = document.querySelector(".init__job__group");
        let width = cygnus[0].offsetWidth;    
        
        initJobGroup.style.transition = ".5s";

        initJobGroup.style.transform = `translateX(-${width * num}px)`;
    })

    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/init.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <Sidebar title="init" group="cygnus" />
                <div className="init__job">
                    <div className="init__job__title">
                        <img src="../../images/init/cygnus.png" alt=""/>
                    </div>
                    <div className="init__job__group d-flex">
                        <div className="job__group flex-center">
                            <div className="soulMaster pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="mikhail pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 1 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="flameWizard pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="windBreaker pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 3 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="nightWalker pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 4 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="striker pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Cygnus`, query: { num: 5 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
