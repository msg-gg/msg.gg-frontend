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
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/adventurer.png)`

        let adventurer = document.querySelectorAll(".job__group");
        
        adventurer.forEach(data => {
            let group = document.querySelectorAll(`.${data.classList[1]} > div`);
            group.forEach((job, i) => {
                if(i == 0) {
                    job.style.transform = `translateX(130px)`;
                } else if(i == 1) {
                    job.style.transform = `translateY(170px)`;
                } else if(i % 2 != 0 && i != 1) {
                    job.style.transform = `translate(-${130 * (i - 1)}px, 170px)`;
                } else {
                    job.style.transform = `translateX(-${130 * (i - 1)}px)`;
                }
            })
        })

        let initJobGroup = document.querySelector(".init__job__group");
        let width = adventurer[0].offsetWidth;    
        
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
                <Sidebar title="init" group="adventurer" />
                <div className="init__job">
                    <div className="init__job__title">
                        <img src="../../images/init/adventurer.png" alt=""/>
                    </div>
                    <div className="init__job__group d-flex">
                        <div className="job__group warrior flex-center">
                            <div className="hero pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 0 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="paladine pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 1 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="darknight pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 2 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group magician flex-center">
                            <div className="arkmagetc pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 3 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="arkmagefp pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 4 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="bishop pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 5 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group bowman flex-center">
                            <div className="bowmaster pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 6 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="marks pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 7 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="pathfinder pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 8 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group thief flex-center">
                            <div className="nightlord pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 9 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="shadower pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 10 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="dualblade pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 11 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                        <div className="job__group pirate flex-center">
                            <div className="viper pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 12 } }}><div className="clickArea"></div></Link>
                            </div>
                            <div className="captain pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 13 } }}><div className="clickArea"></div></Link>

                            </div>
                            <div className="cannonmaster pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                <Link href={{ pathname: `/group/Adventurer`, query: { num: 14 } }}><div className="clickArea"></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img id="prev-btn" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
            <img id="next-btn" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > 4 ? 4 : num + 1)} alt=""/>
        </div>
    );
};

export default Index;
