import React, { useEffect, useLayoutEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Footer from "../../compornents/Footer/footer"

const Index = () => {
    const [job, setJob] = useState('hero');
    const [num, setNum] = useState(0);

    const jobArr = [
        "hero", 
        "darknight", 
        "paladine",
        "arkmagetc",
        "arkmagefp",
        "bishop",
        "bowmaster",
        "marks",
        "pathfinder",
        "nightlord",
        "shadower",
        "dualblade",
        "viper",
        "captain",
        "cannonmaster"
    ]
    useEffect(() => {
        setJob(jobArr[num]);
        let characterImg = document.querySelector(".character__img");
        let characterRect = document.querySelector(".character__rect");
        let characterSelecter = document.querySelector(".character");
        let characterBg = document.querySelector(".character__bg"); 

        characterBg.style.backgroundImage = `url(../../images/background/${job}.png)`;
        characterImg.style.backgroundImage = `url(../../images/job/${job}.png)`;

        characterImg.style.transition = "0s";
        characterImg.style.width = "200vw";
        characterImg.style.height = "200vh";
        
        characterRect.style.transition = "0s";
        characterRect.style.width = "100%";
        characterRect.style.left = "-20%";

        characterSelecter.style.transition = ".5s";

        let oneBlock = -140
        let translateX = num * oneBlock >= oneBlock * 2 ? 0 : (num - 2) * oneBlock < -1260 ? -1260 : (num - 2) * oneBlock;
        
        characterSelecter.style.transform = `translate3d(${translateX}px, 0px, 0px)`;

        setTimeout(() => {
            characterImg.style.transition = ".8s";
            characterImg.style.width = "110vh";
            characterImg.style.height = "110vh";
            if(job == 'hero') characterImg.style.width = "150vh"; 
            if(job == 'pathfinder') { characterImg.style.width = "142vh"; characterImg.style.height = "142vh"; }
            if(job == 'darknight') { characterImg.style.width = "142vh"; characterImg.style.height = "142vh"; }
        
            characterRect.style.transition = "1s";
            characterRect.style.width = "30%";
            characterRect.style.left = "20%";
        }, 100)
    })

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
            <div className="character__wrap">
                <div className="character__bg"></div>
                <div className="character__rect"></div>
                <ul className="character__sidebar">
                    <li className="character__group character__group__active pointer">
                        <Link href="/group/Adventurer"><a href="#">모험가</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Cygnus"><a href="#">시그너스</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Resistance"><a href="#">레지스탕스</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Hero"><a href="#">영웅</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Grandis"><a href="#">그란디스</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Zero"><a href="#">제로</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Kinesis"><a href="#">키네시스</a></Link>
                    </li>
                </ul>
                <div className="character__main">
                    
                    <div id={job} className="character__img"></div>
                </div>
                <div className="character__select flex-center">
                    <img id="prev-btn" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
                    <div className="character__container">
                        <ul className="character d-flex">
                            <li onClick={() => setNum(0)} className="hero"></li>
                            <li onClick={() => setNum(1)} className="darknight"></li>
                            <li onClick={() => setNum(2)} className="paladine"></li>
                            <li onClick={() => setNum(3)} className="arkmagetc"></li>      
                            <li onClick={() => setNum(4)} className="arkmagefp"></li>
                            <li onClick={() => setNum(5)} className="bishop"></li>
                            <li onClick={() => setNum(6)} className="bowmaster"></li>
                            <li onClick={() => setNum(7)} className="marks"></li>
                            <li onClick={() => setNum(8)} className="pathfinder"></li>
                            <li onClick={() => setNum(9)} className="nightlord"></li>
                            <li onClick={() => setNum(10)} className="shadower"></li>
                            <li onClick={() => setNum(11)} className="dualblade"></li>
                            <li onClick={() => setNum(12)} className="viper"></li>
                            <li onClick={() => setNum(13)} className="captain"></li>
                            <li onClick={() => setNum(14)} className="cannonmaster"></li>
                        </ul>
                    </div>
                    <img id="next-btn" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1)} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Index;
