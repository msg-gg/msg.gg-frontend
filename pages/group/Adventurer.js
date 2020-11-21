import React, { useEffect, useLayoutEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import { useRouter } from "next/router";
import Sidebar from "../../compornents/Sidebar";

const Adventurer = (props) => {
    const router = useRouter();
    
    let number = router.query.num;
    number = number == undefined ? 0 : parseInt(number);
    
    const [job, setJob] = useState("");
    const [num, setNum] = useState(number);

    const jobArr = [
        "hero", 
        "paladine",
        "darknight", 
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
        console.log(num)
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

        let oneBlock = -140;
        let translateX = num * oneBlock >= oneBlock * 2 ? 0 : (num - 2) * oneBlock < -1260 ? -1260 : (num - 2) * oneBlock;
        
        characterSelecter.style.transform = `translateX(${translateX}px)`;

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
            </Head>
            <Header></Header>
            <div className="character__wrap">
                <div className="character__bg bg__hero"></div>
                <div className="character__bg bg__darknight"></div>
                <div className="character__bg bg__paladine"></div>
                <div className="character__bg bg__arkmagetc"></div>
                <div className="character__bg bg__arkmagefp"></div>
                <div className="character__bg bg__bishop"></div>
                <div className="character__bg bg__bowmaster"></div>
                <div className="character__bg bg__marks"></div>
                <div className="character__bg bg__pathfinder"></div>
                <div className="character__bg bg__nightlord"></div>
                <div className="character__bg bg__shadower"></div>
                <div className="character__bg bg__dualblade"></div>
                <div className="character__bg bg__viper"></div>
                <div className="character__bg bg__captain"></div>
                <div className="character__bg bg__cannonmaster"></div>
                <div className="character__rect"></div>
                <Sidebar title="group" />
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
                            <li onClick={() => setNum(0)} className="hero"></li>
                            <li onClick={() => setNum(1)} className="paladine"></li>
                            <li onClick={() => setNum(2)} className="darknight"></li>
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

export default Adventurer;
