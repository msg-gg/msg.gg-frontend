import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Footer from "../../compornents/Footer/footer"

const Index = () => {
    const [job, setJob] = useState('dualblade');

    useEffect(() => {
        document.querySelector(".character__img").style.transition = "0s";
        document.querySelector(".character__img").style.height = "1800px";
        
        document.querySelector(".character__rect").style.transition = "0s";
        document.querySelector(".character__rect").style.width = "100%";
        document.querySelector(".character__rect").style.left = "-20%";
        setTimeout(() => {
            document.querySelector(".character__img").style.transition = ".8s";
            document.querySelector(".character__img").style.height = "120vh";
        
            document.querySelector(".character__rect").style.transition = "1s";
            document.querySelector(".character__rect").style.width = "30%";
            document.querySelector(".character__rect").style.left = "20%";
        }, 10)
    })
    
    var background = {
        backgroundImage: `url(../../images/background/${job}.png)`,
    }

    var characterImg = {
        backgroundImage: `url(../../images/job/${job}.png)`,
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
            <div className="character__wrap">
                <div className="character__bg" style={background}></div>
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
                        <Link href="/group/Nova"><a href="#">노바</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Zero"><a href="#">제로</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Kinesis"><a href="#">키네시스</a></Link>
                    </li>
                </ul>
                <div className="character__main">
                    
                    <div className="character__img" style={characterImg}></div>
                </div>
                <div className="character__select flex-center">
                    <ul className="character flex-around">
                        <li onClick={() => setJob("paladine")} className="paladine"></li>
                        <li onClick={() => setJob("darknight")} className="darknight"></li>
                        <li onClick={() => setJob("hero")} className="hero"></li>
                        <li onClick={() => setJob("dualblade")} className="dualblade"></li>
                        <li onClick={() => setJob("bishop")} className="bishop"></li>
                        <li onClick={() => setJob("bowmaster")} className="bowmaster"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;
