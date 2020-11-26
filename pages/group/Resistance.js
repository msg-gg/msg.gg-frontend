import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import { useRouter } from "next/router";
import Sidebar from "../../compornents/Sidebar";
import Json from "../../Json/resistance/job.json";
console.log(Json)

const Resistance = (props) => {
    const router = useRouter();
    
    let number = router.query.num;
    number = number == undefined ? 0 : parseInt(number);
    
    const [job, setJob] = useState("");
    const [num, setNum] = useState(number);

    const jobArr = [
        "mecanic", 
        "battleMage", 
        "blaster",
        "wildHunter",
        "xenon",
        "demonslayer",
        "demonavenger"
    ]

    const { mecanic, battleMage, blaster, wildHunter, xenon, demonslayer, demonavenger } = Json

    const data = [];
    data.push(mecanic, battleMage, blaster, wildHunter, xenon, demonslayer, demonavenger);

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
      
        data[num].forEach((world, i) => {
            let tr = document.createElement("tr");
            let max = parseFloat(data[num][0].ratio.split("%"));
            let width = (100 * parseFloat(world.ratio.split("%"))) / max; 
            tr.innerHTML = `
                            <td>${world.ranking} </td>
                            <td><img className="server__image" style="height: 1.8vh; margin-right: .5em;" src="${world.worldImg}" alt=""/> ${world.world}</td>
                            <td>
                                <div class="progress" style="min-width: 180px;" >
                                    <div class="progress-bar" role="progressbar" style="width: ${width}%;">${world.ratio}</div>
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
        let translateX = num * oneBlock >= oneBlock * 2 ? 0 : (num - 2) * oneBlock < -140 ? -140 : (num - 2) * oneBlock;
        
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
                <script src="/js/app.js"></script>
            </Head>
            <Header></Header>
            <div className="character__wrap">
                <div className="character__bg bg__mecanic"></div>
                <div className="character__bg bg__battleMage"></div>
                <div className="character__bg bg__blaster"></div>
                <div className="character__bg bg__wildHunter"></div>
                <div className="character__bg bg__xenon"></div>
                <div className="character__bg bg__demonslayer"></div>
                <div className="character__bg bg__demonavenger"></div>
                <div className="character__rect"></div>
                <Sidebar title="group" group="resistance" />
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
                            <li onClick={() => setNum(0)} className="mecanic"></li>
                            <li onClick={() => setNum(1)} className="battleMage"></li>
                            <li onClick={() => setNum(2)} className="blaster"></li>
                            <li onClick={() => setNum(3)} className="wildHunter"></li>      
                            <li onClick={() => setNum(4)} className="xenon"></li>
                            <li onClick={() => setNum(5)} className="demonslayer"></li>
                            <li onClick={() => setNum(6)} className="demonavenger"></li>
                        </ul>
                    </div>
                    <img id="next-btn" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1)} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default Resistance;
