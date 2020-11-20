import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Footer from "../../compornents/Footer/footer"

const Resistance = () => {
    const [job, setJob] = useState('blaster');
    const [group, setGroup] = useState('Resistance');

    useEffect(() => {
        document.querySelector(".character__img").style.transition = "0s";
        document.querySelector(".character__img").style.width = "200vw";
        document.querySelector(".character__img").style.height = "200vh";

        document.querySelector(".character__rect").style.transition = "0s";
        document.querySelector(".character__rect").style.width = "100%";
        document.querySelector(".character__rect").style.left = "-20%";
        setTimeout(() => {
            document.querySelector(".character__img").style.transition = ".8s";
            document.querySelector(".character__img").style.width = "110vh";
            document.querySelector(".character__img").style.height = "110vh";
            if(job == 'demonslayer') { document.querySelector(".character__img").style.width = "110vh";  document.querySelector(".character__img").style.height = "100vh";  }

            document.querySelector(".character__rect").style.transition = "1s";
            document.querySelector(".character__rect").style.width = "30%";
            document.querySelector(".character__rect").style.left = "20%";
        }, 100)
    })
    
    var background = {
        backgroundImage: `url(../../images/background/${job}.png)`
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
            <div className="wrap">
                <div className="character__bg" style={background}></div>
                <div className="character__rect"></div>
                <ul className="character__sidebar">
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Adventurer"><a href="#">모험가</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Cygnus"><a href="#">시그너스</a></Link>
                    </li>
                    <li className="character__group character__group__active pointer">
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
                    
                    <div id={job} className="character__img" style={characterImg}></div>
                </div>
                <div className="character__select flex-center">
                    <ul className="character flex-around">
                        <li onClick={() => setJob("mecanic")} className="mecanic"></li>
                        <li onClick={() => setJob("battleMage")} className="battleMage"></li>
                        <li onClick={() => setJob("blaster")} className="blaster"></li>
                        <li onClick={() => setJob("wildHunter")} className="wildHunter"></li>
                        <li onClick={() => setJob("xenon")} className="xenon"></li>
                        <li onClick={() => setJob("demonslayer")} className="demonslayer"></li>
                        <li onClick={() => setJob("demonavenger")} className="demonavenger"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resistance;
