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
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/resistance.png)`

        let resistance = document.querySelectorAll(".job__group");
        
        resistance.forEach(data => {
            let group = document.querySelectorAll(`.${data.classList[1]} > div`);
            group.forEach((job, i) => {
                if(i == 0) {
                    job.style.transform = `translateX(15vw)`;
                } else if(i == 1) {
                    job.style.transform = `translate(8vw, 170px)`;
                } else if(i == 2) {
                    job.style.transform = `translateX(1vw)`;
                } else if(i == 3) {
                    job.style.transform = `translate(-6vw, 170px)`;
                }  else if(i == 4) {
                    job.style.transform = `translateX(-13vw)`;
                } 
            })
        })

        let initJobGroup = document.querySelector(".init__job__group");
        let width = resistance[0].offsetWidth;    
        
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
                <Sidebar title="init" group="resistance" />
                <div className="init__job">
                    <div className="init__job__title">
                        <img src="../../images/init/resistance.png" alt=""/>
                    </div>
                    <div className="init__job__group d-flex">
                        <div className="job__group flex-center">
                            <div className="mecanic pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="battleMage pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 1 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="blaster pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="wildHunter pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 3 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="xenon pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 4 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group demon flex-center">
                            <div className="demonslayer pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 5 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="demonavenger pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Resistance`, query: { num: 6 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <img id="prev-btn" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
                    <img id="next-btn" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > 1 ? 1 : num + 1)} alt=""/>
        </div>
    );
};

export default Index;
