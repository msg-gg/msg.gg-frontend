import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Header from "../../compornents/Header/header";
import Json from "../../Json/AllJob.json";
import First from "../../Json/first.json";

const Index = (props) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.querySelector("#__next").style.backgroundImage = `url(../../images/world/background.png)`;
        
        document.querySelectorAll(".worldSideBar > li").forEach((li, i) => {
            li.classList.remove("worldSideBar__group__active");
            li.classList.remove("worldSideBar__group__none");

            if(i == num) 
                li.classList.add("worldSideBar__group__active");
            else
                li.classList.add("worldSideBar__group__none");
        })

        // let worldTitle = document.querySelector(".world__title > h1").innerHTML = `${worldKo[num]}`;

        let world_210 = document.querySelector(".world__210");
        let world_240 = document.querySelector(".world__240");
        console.log(first[num])
        world_210.innerHTML = `<p class="pt-3 pl-5">인구수 (Lv210)</p>
                                <p class="pt-2">${first[num].people210.rank} <span>/ 14위</span></p>
                                <p class="pt-2">${first[num].people210.people}</p>`;

        world_240.innerHTML = `<p class="pt-3 pl-5">인구수 (Lv240)</p>
                                <p class="pt-2">${first[num].people240.rank} <span>/ 14위</span></p>
                                <p class="pt-2">${first[num].people240.people}</p>`;

        let contentLeft = document.querySelector(".world__content__left");
        let contentRight = document.querySelector(".world__content__right");
        contentLeft.innerHTML = "";
        contentRight.innerHTML = "";

        data[num].forEach((item, i) => {
            let div = document.createElement("div");
            div.classList.add("d-flex");
            div.classList.add("pt-2");
            let max = parseFloat(data[num][0].people.split("%"));
            let width = (100 * parseFloat(item.people.split("%"))) / max; 
            
            div.innerHTML = `<div class="d-flex pt-2">
                                <p class="mr-3">${item.world}</p>
                                <p class="pr-2">${item.name}</p>
                                <div class="progress pl-3" >
                                    <div class="progress-bar" role="progressbar" style="width: ${width}%;">${item.people}</div>
                                </div>
                            </div>`;
            if(i < 22) 
                contentLeft.appendChild(div);
            else 
                contentRight.appendChild(div);
        })
        
        const { dojang, seed, union, achievement } = first[num];

        let dojangHtml = document.querySelector("#dojang");
        dojangHtml.classList.add("d-flex")
        dojangHtml.classList.add("align-items-center")
        dojangHtml.innerHTML = `
            <img style="width: 75px; height: 75px; margin-left: 10px;" src="${dojang.img}" alt=""/>
            <div class="pl-3">
                <p>${dojang.name}</p>
                <p>${dojang.level} </p>
                <p>${dojang.job} </p>
            </div>
            <p class="pl-3">${dojang.recode}</p>
            `

        let seedHtml = document.querySelector("#seed");
        seedHtml.classList.add("d-flex")
        seedHtml.classList.add("align-items-center")
        seedHtml.innerHTML = `
            <img style="width: 75px; height: 75px; margin-left: 10px;" src="${seed.img}" alt=""/>
            <div class="pl-3">
                <p>${seed.name}</p>
                <p>${seed.level} </p>
                <p>${seed.job} </p>
            </div>
            <p class="pl-3">${seed.recode}</p>
            `

        let unionHtml = document.querySelector("#union");
        unionHtml.classList.add("d-flex")
        unionHtml.classList.add("align-items-center")
        unionHtml.innerHTML = `
            <img style="width: 75px; height: 75px; margin-left: 10px;" src="${union.img}" alt=""/>
            <div class="pl-3">
                <p>${union.name}</p>
                <p>${union.level} </p>
                <p>${union.job} </p>
            </div>
            <p class="pl-3">${union.recode}</p>
            `

        let achievementHtml = document.querySelector("#achievement");
        achievementHtml.classList.add("d-flex")
        achievementHtml.classList.add("align-items-center")
        achievementHtml.innerHTML = `
            <img style="width: 75px; height: 75px; margin-left: 10px;" src="${achievement.img}" alt=""/>
            <div class="pl-3">
                <p>${achievement.name}</p>
                <p>${achievement.level} </p>
                <p>${achievement.job} </p>
            </div>
            <img class="ml-3" style="width: 30px; height: 30px;" src="${achievement.ratingImg}" alt=""/>
            <p class="pl-1">${achievement.point}</p>
            `
    })

    const { luna, scania, elysium, croa, aurora, bera, red, union, zenith, enosis, arcane, nova, reboot, reboot2} = Json;
    const { firstluna, firstscania, firstelysium, firstcroa, firstaurora, firstbera, firstred, firstunion, firstzenith, firstenosis, firstarcane, firstnova, firstreboot, firstreboot2} = First;
    
    const data = [];
    const first = [];

    data.push(luna, scania, elysium, croa, aurora, bera, red, union, zenith, enosis, arcane, nova, reboot, reboot2);
    first.push(firstluna, firstscania, firstelysium, firstcroa, firstaurora, firstbera, firstred, firstunion, firstzenith, firstenosis, firstarcane, firstnova, firstreboot, firstreboot2);

    const worldEn = [
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

    const worldKo = [
        "루나",
        "스카니아",
        "엘리시움",
        "크로아",
        "오로라",
        "베라",
        "레드",
        "유니온",
        "제니스",
        "이노시스",
        "아케인",
        "노바",
        "리부트",
        "리부트2"
    ]

    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/world.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <ul className="worldSideBar">
                    <li className="worldSideBar__group pointer" onClick={() => setNum(0)}>
                        <img src="../../images/world/luna.gif" alt=""/> <a href="#">루나</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(1)}>
                        <img src="../../images/world/scania.gif" alt=""/> <a href="#">스카니아</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(2)}>
                        <img src="../../images/world/elysium.gif" alt=""/> <a href="#">엘리시움</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(3)}>
                        <img src="../../images/world/croa.gif" alt=""/> <a href="#">크로아</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(4)}>
                        <img src="../../images/world/aurora.gif" alt=""/> <a href="#">오로라</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(5)}>
                        <img src="../../images/world/bera.gif" alt=""/> <a href="#">베라</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(6)}>
                        <img src="../../images/world/red.gif" alt=""/> <a href="#">레드</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(7)}>
                        <img src="../../images/world/union.gif" alt=""/> <a href="#">유니온</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(8)}>
                        <img src="../../images/world/zenith.gif" alt=""/> <a href="#">제니스</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(9)}>
                        <img src="../../images/world/enosis.gif" alt=""/> <a href="#">이노시스</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(10)}>
                        <img src="../../images/world/arcane.gif" alt=""/> <a href="#">아케인</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(11)}>
                        <img src="../../images/world/nova.gif" alt=""/> <a href="#">노바</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(12)}>
                        <img src="../../images/world/reboot.gif" alt=""/> <a href="#">리부트</a>
                    </li>
                    <li className="worldSideBar__group pointer" onClick={() => setNum(13)}>
                        <img src="../../images/world/reboot2.gif" alt=""/> <a href="#">리부트2</a>
                    </li>
                </ul>
                <div className="world__main">
                    <div className="world__title d-flex align-items-center">
                        {/* <h1>루나</h1> */}
                    </div>
                    <div className="world__section mt-5">
                        <div className="flex-between">
                            <div className="world__210">
                                <p className="pt-3 pl-5">인구수 (Lv210)</p>
                                <p className="pt-2">1위 <span>/ 14위</span></p>
                                <p className="pt-2">315,379명</p>
                            </div>
                            <div className="world__240">
                                <p className="pt-3 pl-5">인구수 (Lv210)</p>
                                <p className="pt-2">1위 <span>/ 14위</span></p>
                                <p className="pt-2">25,125명</p>
                            </div>
                        </div>
                        <div className="world__content">
                            <div className="world__content__title">
                                <p className="pt-4 pl-5">2020년 12월 2일 통계</p>
                            </div>
                            <div className="flex-between pt-3 pl-4 pr-4">
                                <div className="world__content__left content pl-3">
                                    
                                </div>
                                <div className="world__content__right content pl-4">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="world__side">
                        <div id="dojang" className="pt-2 pl-5">
                            
                        </div>
                        <div id="seed" className="pt-2 pl-5"></div>
                        <div id="union" className="pt-2 pl-5"></div>
                        <div id="achievement" className="pt-2 pl-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
