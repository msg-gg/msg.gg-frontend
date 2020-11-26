import Header from "../compornents/Header/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cheerio from "cheerio";

const Profile = () => {
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

                profile.totalRank = $("div.user-additional").find("div.col-6")[0].children[3].children[0].data.replace(/(\s*)/g, "");
                profile.worldRank = $("div.user-additional").find("div.col-6")[1].children[4].children[0].data;
                profile.workTotalRank = $("div.user-additional").find("div.col-6")[2].children[4].children[0].data;
                profile.workWorldRank = $("div.user-additional").find("div.col-6")[3].children[4].children[0].data;
                
                return profile;
            })
            .then((res) => {
                character = res;
                document.querySelector("#__next").style.backgroundImage = `url(../images/profile/background/${character.work}.png)`
        
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
                    <li className="profile__sidebar__el profile__sidebar__el__active  profile__sidebar__information pointer"></li>
                    <li className="profile__sidebar__el  profile__sidebar__record pointer"></li>
                </ul>
                <div className="profile__main">
                    <div className="profile flex-center">
                        <div className="profile__img">

                        </div>
                        <div className="profile__status pt-5 pl-4">
                            <div className="profile__text pt-3 flex-column text-white">
                                <p><span className="pr-2">히그링</span>Lv.230</p>
                                <div className="d-flex">
                                    <img className="mt-1 mr-2" src="../../images/world/croa.gif" alt=""/> 
                                    <p>크로아 | 호영 | 인기도 8</p>
                                </div>
                                <p>길드 <span className="pl-2">GitHub</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-button pt-4 flex-center">
                        <button>즐겨찾기</button>
                        <button className="ml-3">프로필 사진</button>
                    </div>
                    <div className="profile__analysis">
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Profile;
