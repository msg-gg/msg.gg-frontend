import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Footer from "../../compornents/Footer/footer"

const Index = () => {
    const [job, setJob] = useState("");
    const [num, setNum] = useState(0);

    const jobArr = [
        "aran", 
        "evan", 
        "luminous",
        "mercedes",
        "phantom",
        "shade"
    ]

    const ratio = [
        4.50, 4.08, 3.59, 3.47, 3.43, 3.41, 3.41, 3.37, 3.36, 3.35, 3.34, 3.33, 3.09, 2.98
    ];

    const server = [
        { en : "reboot", ko : "리부트" },
        { en : "reboot", ko : "리부트2" },
        { en : "red", ko : "레드" },
        { en : "elysium", ko : "엘리시움" },
        { en : "croa", ko : "크로아" },
        { en : "zenith", ko : "제니스" },
        { en : "aurora", ko : "오로라" },
        { en : "bera", ko : "베라" },
        { en : "union", ko : "유니온" },
        { en : "nova", ko : "노바" },
        { en : "scania", ko : "스카니아" },
        { en : "luna", ko : "루나" },
        { en : "enosis", ko : "이노시스" },
        { en : "arcane", ko :  "아케인" }      
    ]

    useEffect(() => {
        setJob(jobArr[num]);

        let characterImg = document.querySelector(".character__img");
        let characterRect = document.querySelector(".character__rect");
        let characterSelecter = document.querySelector(".character");
        let characterName = document.querySelector(".character__name");
        let characterBg = document.querySelectorAll(`.character__bg`); 
        let serverArea = document.querySelector(".server__area");

        characterBg.forEach(bg => {
            bg.style.opacity = "0";
        })
        characterBg[num].style.opacity = "1";
        
        serverArea.innerHTML = "";

        let max = ratio[0];
        
        server.forEach((world, i) => {
            let tr = document.createElement("tr");
            let width = (100 * ratio[i]) / max; 
            tr.innerHTML = `
                            <td>${i + 1} </td>
                            <td><img className="server__image" style="height: 1.8vh; margin-right: .5em;" src="../../images/world/${world.en}.gif" alt=""/> ${world.ko}</td>
                            <td>
                                <div class="progress" style="min-width: 180px;" >
                                    <div class="progress-bar" role="progressbar" style="width: ${width}%;">${ratio[i]}%</div>
                                </div>
                            </td>`;
            serverArea.appendChild(tr)
        })

        characterImg.style.backgroundImage = `url(../../images/job/${job}.png)`;
        characterName.style.backgroundImage = `url(../../images/name/${job}.png)`;

        characterImg.style.transition = "0s";
        characterImg.style.width = "160vw";
        characterImg.style.height = "160vh";
        
        characterRect.style.transition = "0s";
        characterRect.style.width = "100%";
        characterRect.style.left = "-20%";

        characterSelecter.style.transition = ".5s";

        let oneBlock = 0;
        let translateX = oneBlock;
        
        characterSelecter.style.transform = `translateX(${translateX}px)`;

        setTimeout(() => {
            characterImg.style.transition = ".8s";
            characterImg.style.width = "110vh";
            characterImg.style.height = "110vh";
        
            characterRect.style.transition = "1s";
            characterRect.style.width = "30%";
            characterRect.style.left = "20%";
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
            <div className="character__wrap">
                <div className="character__bg bg__aran"></div>
                <div className="character__bg bg__evan"></div>
                <div className="character__bg bg__luminous"></div>
                <div className="character__bg bg__mercedes"></div>
                <div className="character__bg bg__phantom"></div>
                <div className="character__bg bg__shade"></div>
                <div className="character__rect"></div>
                <ul className="character__sidebar">
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Adventurer"><a href="#">모험가</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Cygnus"><a href="#">시그너스</a></Link>
                    </li>
                    <li className="character__group character__group__none pointer">
                        <Link href="/group/Resistance"><a href="#">레지스탕스</a></Link>
                    </li>
                    <li className="character__group character__group__active pointer">
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
                    <div className="character__stats">
                        <div className="character__name"></div>
                        <table className="character__stats__table text-white">
                            <thead>
                                <tr>
                                    <td>순위</td>
                                    <td>월드</td>
                                    <td>월드내 유저비율</td>
                                </tr>
                            </thead>
                                <tbody className="server__area">
                                </tbody>
                        </table>
                    </div>
                    <div id={job} className="character__img"></div>
                </div>
                <div className="character__select flex-center">
                    <img id="prev-btn" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
                    <div className="character__container">
                        <ul className="character d-flex">
                            <li onClick={() => setNum(0)} className="aran"></li>
                            <li onClick={() => setNum(1)} className="evan"></li>
                            <li onClick={() => setNum(2)} className="luminous"></li>
                            <li onClick={() => setNum(3)} className="mercedes"></li>      
                            <li onClick={() => setNum(4)} className="phantom"></li>
                            <li onClick={() => setNum(5)} className="shade"></li>
                        </ul>
                    </div>
                    <img id="next-btn" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1)} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default Index;