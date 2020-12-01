import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../../compornents/Header/header";
import Sidebar from "../../../compornents/totalSidebar"
import Rank from "../../../Json/Rank.json";
import RebootRank from "../../../Json/RebootRank.json";

const Index = (props) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log(data[13], num)
        document.querySelector("#__next").style.backgroundImage = `url(../../images/ranking/background.png)`;
    
        let rankingInsignia = document.querySelector(".ranking__insignia");
        let worldImg = document.querySelectorAll(".ranking__insignia > div"); 
        let width = -(worldImg[0].offsetWidth + 10);   
        let max = width * 9
        
        rankingInsignia.style.transition = ".5s";
        let translateX = num * width >= width * 2 ? 0 : (num - 2) * width < max ? max : (num - 2) * width;

        rankingInsignia.style.transform = `translateX(${translateX}px)`;


        worldImg.forEach((img, i) => {
            img.style.backgroundImage = `url(../../images/ranking/uninsignia.png)`;
            if(i == num) 
                img.style.backgroundImage = `url(../../images/ranking/insignia.png)`;
        })

        let tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        data[num].forEach(item => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                            <td class="d-flex align-items-center pl-5">
                                <p class="pr-5">${item.rank} </p>
                                <img style="width: 75px; height: 75px; margin-right: .5em; margin-top: 1em;" src="${item.img}" alt=""/>
                                <div class="pt-4">
                                    <p>${item.name}</p>
                                    <p>${item.level} | ${item.job}</p>
                                </div>
                            </td>
                            <td><p>${item.popularity}</p></td>
                            <td><p>${item.popularity}</p></td>`;

            tbody.appendChild(tr)
        })
    })

    const world = [
        "luna",
        "scania",
        "elysium",
        "croa",
        "aurora",
        "bera",
        "red",
        "union",
        "zenith",
        "enosis",
        "arcane",
        "nova",
        "reboot",
        "reboot2"
    ]

    const { lunaRank, scaniaRank, elysiumRank, croaRank, auroraRank, beraRank, redRank, unionRank, zenithRank, enosisRank, arcaneRank, novaRank } = Rank;
    const { rebootRank, reboot2Rank } = RebootRank;
    const data = [];

    data.push(lunaRank, scaniaRank, elysiumRank, croaRank, auroraRank, beraRank, redRank, unionRank, zenithRank, enosisRank, arcaneRank, novaRank);
    data.push(rebootRank, reboot2Rank)
    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/ranking.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <Sidebar kind="World"/>
                <div className="ranking__main">
                    <img id="prev-btn" className="pointer" src="../../images/left-button.png" onClick={()=>setNum(num - 1 < 0 ? 0 : num - 1)} alt=""/>
                    <div>
                        <div className="ranking__insignia">
                            <div onClick={() => setNum(0)} className="flex-center pointer"><img src="../../images/ranking/world/luna.png" alt=""/></div>
                            <div onClick={() => setNum(1)} className="flex-center pointer"><img src="../../images/ranking/world/scania.png" alt=""/></div>
                            <div onClick={() => setNum(2)} className="flex-center pointer"><img src="../../images/ranking/world/elysium.png" alt=""/></div>
                            <div onClick={() => setNum(3)} className="flex-center pointer"><img src="../../images/ranking/world/croa.png" alt=""/></div>
                            <div onClick={() => setNum(4)} className="flex-center pointer"><img src="../../images/ranking/world/aurora.png" alt=""/></div>
                            <div onClick={() => setNum(5)} className="flex-center pointer"><img src="../../images/ranking/world/bera.png" alt=""/></div>
                            <div onClick={() => setNum(6)} className="flex-center pointer"><img src="../../images/ranking/world/red.png" alt=""/></div>
                            <div onClick={() => setNum(7)} className="flex-center pointer"><img src="../../images/ranking/world/union.png" alt=""/></div>
                            <div onClick={() => setNum(8)} className="flex-center pointer"><img src="../../images/ranking/world/zenith.png" alt=""/></div>
                            <div onClick={() => setNum(9)} className="flex-center pointer"><img src="../../images/ranking/world/enosis.png" alt=""/></div>
                            <div onClick={() => setNum(10)} className="flex-center pointer"><img src="../../images/ranking/world/arcane.png" alt=""/></div>
                            <div onClick={() => setNum(11)} className="flex-center pointer"><img src="../../images/ranking/world/nova.png" alt=""/></div>
                            <div onClick={() => setNum(12)} className="flex-center pointer"><img src="../../images/ranking/world/reboot.png" alt=""/></div>
                            <div onClick={() => setNum(13)} className="flex-center pointer"><img src="../../images/ranking/world/reboot2.png" alt=""/></div>
                        </div>
                    </div>
                    <div className="ranking__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>2020년 11월 27일 금요일</th>
                                </tr>
                                <tr className="table-title pt-3 pb-3">
                                    <td>캐릭터 정보</td>
                                    <td>인기도</td>
                                    <td>길드</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <img id="next-btn" className="pointer" src="../../images/right-button.png" onClick={()=>setNum(num + 1 > world.length - 1 ? world.length - 1 : num + 1)} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Index;
