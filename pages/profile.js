import Header from "../compornents/Header/header";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cheerio from "cheerio";



const Profile = () => {
    const router = useRouter();

    async function getHTML() {
        try {
            return await axios.get(`https://maple.gg/u/${router.query.username}`);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        getHTML()
            .then((html) => {
                
                const $ = cheerio.load(html.data);
                
                if(html.data.length < 30000) return;
                
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
            .then((res) => console.log(res));
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
        </div>
    );

};

export default Profile;
