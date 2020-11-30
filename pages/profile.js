import Header from "../compornents/Header/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cheerio from "cheerio";

const Profile = () => {
    const [state, setState] = useState("information");

    let character = {};

    const router = useRouter();
    
    async function getHTML() {
        try {
            return await axios.get(`https://maple.gg/u/${router.query.username}`);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(!router.query.username) return;

        let main = document.querySelector(".profile__main");
        let recode = document.querySelector(".profile__recode");

        if(state == "information") {
            main.style.display = "block";
            recode.style.display = "none";
        } else {
            main.style.display = "none";
            recode.style.display = "flex";
        }

        getHTML()
            .then((html) => {
                const $ = cheerio.load(html.data);
                
                if(html.data.length < 30000) {
                    router.push("/");
                    return;
                };
                
                let profile = {} 
                
                profile.name = $("div#user-profile").find("b.align-middle")[0].children[0].data;
                profile.image = $("div.character-avatar-row").find("img")[0].attribs.src;
                profile.world = $("img.align-middle")[0].attribs.src;
                profile.level = $("div#user-profile").find("ul.user-summary-list")[0].children[1].children[0].data;
                profile.work = $("div#user-profile").find("ul.user-summary-list")[0].children[3].children[0].data
                profile.popularity = $("div#user-profile").find("ul.user-summary-list")[0].children[5].children[2].children[0].data;
                profile.guild = $("div.user-additional").find("a")[0] == undefined ? "(없음)" : $("div.user-additional").find("a")[0].children[0].data;
 
                let coord = {};
                coord.head = $("div.character-coord__item").find("span.character-coord__item-name")[0].children[0].data;
                coord.hair = $("div.character-coord__item").find("span.character-coord__item-name")[1].children[0].data;
                coord.face = $("div.character-coord__item").find("span.character-coord__item-name")[2].children[0].data;
                coord.top = $("div.character-coord__item").find("span.character-coord__item-name")[3].children[0].data;
                coord.bottom = $("div.character-coord__item").find("span.character-coord__item-name")[4].children[0].data;
                coord.shoes = $("div.character-coord__item").find("span.character-coord__item-name")[5].children[0].data;
                coord.weapon = $("div.character-coord__item").find("span.character-coord__item-name")[6].children[0].data;

                profile.coord = coord;

                let ranking = {};
                
                ranking.totalRank = $("div.user-additional").find("div.col-6")[0].children[3].children[0].data.replace(/(\s*)/g, "");
                ranking.worldRank = $("div.user-additional").find("div.col-6")[1].children[4].children[0].data;
                ranking.workTotalRank = $("div.user-additional").find("div.col-6")[2].children[4].children[0].data;
                ranking.workWorldRank = $("div.user-additional").find("div.col-6")[3].children[4].children[0].data;
               
                profile.ranking = ranking;

                let mureung = {}

                mureung.floor = $("section.user-summary-box")[0].children.length == 5 ? null : $("section.user-summary-box")[0].children[3].children[1].children[1].children[1].children[0].data;
                mureung.time = $("section.user-summary-box")[0].children.length == 5 ? null : $("section.user-summary-box")[0].children[3].children[1].children[1].children[3].children[0].data;
                mureung.before = $("section.user-summary-box")[0].children.length == 5 ? "(없음)" : $("div.old-dojang")[0] == undefined ? "(없음)" : $("div.old-dojang")[0].children[3].children[0].data;
                mureung.world = $("section.user-summary-box")[0].children.length == 5 ? null : $("section.user-summary-box")[0].children[5].children[3].children[3].children[0].data;
                mureung.total = $("section.user-summary-box")[0].children.length == 5 ? null : $("section.user-summary-box")[0].children[5].children[3].children[8].children[0].data;

                profile.mureung = mureung;

                let seed = {}
                seed.floor = $("section.user-summary-box")[1].children.length == 5 ? null : $("section.user-summary-box")[1].children[3].children[1].children[1].children[1].children[0].data;
                seed.time = $("section.user-summary-box")[1].children.length == 5 ? null : $("section.user-summary-box")[1].children[3].children[1].children[1].children[3].children[0].data;
                seed.world = $("section.user-summary-box")[1].children.length == 5 ? null : $("section.user-summary-box")[1].children[5].children[3].children[3].children[0].data;
                seed.total = $("section.user-summary-box")[1].children.length == 5 ? null : $("section.user-summary-box")[1].children[5].children[3].children[8].children[0].data;
                
                profile.seed = seed;

                let union = {}
                union.img = $("section.user-summary-box")[2].children.length == 5 ? null : $("section.user-summary-box")[2].children[3].children[1].children[1].attribs.src;
                union.name = $("section.user-summary-box")[2].children.length == 5 ? null : $("section.user-summary-box")[2].children[3].children[1].children[1].attribs.alt;
                union.level = $("section.user-summary-box")[2].children.length == 5 ? null : $("section.user-summary-box")[2].children[3].children[1].children[5].children[0].data;
                union.world = $("section.user-summary-box")[2].children.length == 5 ? null : $("section.user-summary-box")[2].children[5].children[3].children[3].children[0].data;
                union.total = $("section.user-summary-box")[2].children.length == 5 ? null : $("section.user-summary-box")[2].children[5].children[3].children[8].children[0].data;

                profile.union = union;

                let achievement = {}
                achievement.img = $("section.user-summary-box")[3].children.length == 5 ? null : $("section.user-summary-box")[3].children[3].children[1].children[1].attribs.src;
                achievement.name = $("section.user-summary-box")[3].children.length == 5 ? null : $("section.user-summary-box")[3].children[3].children[1].children[1].attribs.alt;
                achievement.score = $("section.user-summary-box")[3].children.length == 5 ? null : $("section.user-summary-box")[3].children[3].children[1].children[5].children[0].data;
                achievement.world = $("section.user-summary-box")[3].children.length == 5 ? null : $("section.user-summary-box")[3].children[5].children[3].children[3].children[0].data;
                achievement.total = $("section.user-summary-box")[3].children.length == 5 ? null : $("section.user-summary-box")[3].children[5].children[3].children[8].children[0].data;

                profile.achievement = achievement;

                return profile;
            })
            .then((res) => {
                character = res;
                
                if(character == undefined) {
                    router.push("/");
                    return;
                };

                document.querySelector("#__next").style.backgroundImage = `url(../images/profile/background/${character.work}.png)`
                // document.querySelector("#__next").style.backgroundImage = `url(../images/background/login.png)`
                let imgArea = document.querySelector(".profile__img");
                imgArea.innerHTML = "";

                let image = new Image();
                image.src = `${character.image}`;
                imgArea.appendChild(image)

                let status = document.querySelector(".profile__status");
                status.innerHTML = '';

                let state = document.createElement("div");
                state.innerHTML = `
                            <div class="profile__text pt-3 flex-column text-white">
                                <p><span class="pr-2">${character.name}</span>${character.level}</p>
                                <div class="d-flex">
                                    <img class="mt-1 mr-2" src="${character.world}" alt=""/> 
                                    <p>크로아 | ${character.work} | 인기도 ${character.popularity}</p>
                                </div>
                                <p>길드 <span class="pl-2">${character.guild}</span></p>
                            </div>`;

                status.appendChild(state);

                let analysis = document.querySelector(".profile__analysis");
                analysis.innerHTML = "";
                let analysisImg = new Image();
                analysisImg.src = `${character.image}`;
                analysis.appendChild(analysisImg)

                let analysisHtml = document.createElement("div");
                analysisHtml.innerHTML = `
                    <div class="text-white">
                        <p>모자 ${character.coord.head}</p>
                        <p>헤어 ${character.coord.hair}</p>
                        <p>성형 ${character.coord.face}</p>
                        <p>상의 ${character.coord.top}</p>
                        <p>하의 ${character.coord.bottom}</p>
                        <p>신발 ${character.coord.shoes}</p>
                        <p>무기 ${character.coord.weapon}</p>
                    </div>
                `
                analysis.appendChild(analysisHtml)

                // record

                let achievement = document.querySelector(".achievement");
                achievement.innerHTML = "";

                let achievementHtml = document.createElement("div");
                if(character.achievement.world == null) {
                    achievementHtml.innerHTML = '<h5>기록이 없습니다.</h5>'
                } else {
                    let achievementImg = new Image();
                    achievementImg.src = `${character.achievement.img}`;
                    achievement.appendChild(achievementImg)

                    achievementHtml.innerHTML = `
                                            <h3 class="mt-4">${character.achievement.name}</h3>
                                            <p>${character.achievement.score}</p>
                                            <div class="mt-4">
                                                <p>${character.level} / ${character.work}</p>
                                                <p>월드랭킹 ${character.achievement.world}</p>
                                                <p>랭킹 ${character.achievement.total}</p>
                                            </div>
                                        `;
                }
                achievement.appendChild(achievementHtml);

                let union = document.querySelector(".union");
                union.innerHTML = "";

                let unionHtml = document.createElement("div");
                if(character.union.world == null) {
                    unionHtml.innerHTML = '<h5>기록이 없습니다.</h5>'
                } else {
                    let unionImg = new Image();
                    unionImg.src = `${character.union.img}`;
                    union.appendChild(unionImg)

                    unionHtml.innerHTML = `
                                            <h3 class="mt-4">${character.union.name}</h3>
                                            <p>${character.union.level}</p>
                                            <div>
                                                <p>${character.level} / ${character.work}</p>
                                                <p>월드랭킹 ${character.union.world}</p>
                                                <p>랭킹 ${character.union.total}</p>
                                            </div>
                                        `;
                }
                union.appendChild(unionHtml);

                let mureung = document.querySelector(".mureung");
                mureung.innerHTML = "";

                let mureungHtml = document.createElement("div");
                if(character.mureung.world == null) {
                    mureungHtml.innerHTML = '<h5>기록이 없습니다.</h5>'
                } else {
                    mureungHtml.innerHTML = `
                                                <h3 class="mt-4">${character.mureung.floor}</h3>
                                                <h4>${character.mureung.time}</h4>
                                                <p>예전 최고 무릉 ${character.mureung.before}</p>
                                                <div>
                                                    <p>${character.level} / ${character.work}</p>
                                                    <p>월드랭킹 ${character.mureung.world}</p>
                                                    <p>랭킹 ${character.mureung.total}</p>
                                                </div>`
                }
                mureung.appendChild(mureungHtml);
                
                let seed = document.querySelector(".seed");
                seed.innerHTML = "";

                let seedHtml = document.createElement("div");
                if(character.seed.world == null) {
                    seedHtml.innerHTML = '<h5>기록이 없습니다.</h5>'
                } else {
                    seedHtml.innerHTML = `
                                                <h3 class="pt-4">${character.seed.floor}</h3>
                                                <h4>${character.seed.time}</h4>
                                                <div class="pt-4">
                                                    <p>${character.level} / ${character.work}</p>
                                                    <p>월드랭킹 ${character.seed.world}</p>
                                                    <p>랭킹 ${character.seed.total}</p>
                                                </div>`
                }
                seed.appendChild(seedHtml);
            });

    });

    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/header.css" />
                <link rel="stylesheet" href="/style/profile.css"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header></Header>
            <div className="wrap">
                <div className="back__btn pointer"></div>
                <ul className="profile__sidebar">
                    <li className={`profile__sidebar__el ${state == "information" ? "profile__sidebar__el__active" : ""}  profile__sidebar__information pointer`} onClick={() => setState("information")}></li>
                    <li className={`profile__sidebar__el ${state == "record" ? "profile__sidebar__el__active" : ""} profile__sidebar__record pointer`} onClick={() => setState("record")}></li>
                </ul>
                <div className="profile__main">
                    <div className="profile flex-center">
                        <div className="profile__img">

                        </div>
                        <div className="profile__status pt-5 pl-4">
                        </div>
                    </div>
                    <div className="profile-button pt-4 flex-center">
                        <button>즐겨찾기</button>
                        <button className="ml-3">프로필 사진</button>
                    </div>
                    <div className="profile__analysis flex-center mt-5">
                    </div>
                </div>
                <div className="profile__recode flex-center">
                    <div className="achievement text-white"></div>
                    <div className="union text-white"></div>
                    <div className="mureung text-white"></div>
                    <div className="seed text-white">
                        
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Profile;
