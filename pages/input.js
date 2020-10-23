import Header from "../compornents/Header/header"
import axios from "axios";
import cheerio from "cheerio";

function onKeyPress(e) {
    if (e.key === 'Enter') {
        async function getHTML() {
            try {
                return await axios.get(`https://maple.gg/u/${e.target.value}`);
            } catch (error) {
                console.error(error);
            }
        }

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
                
                document.write(
                    `<img src="${profile.world}" alt=""/>` + "&nbsp;" +
                    profile.name +
                    "</br>" +
                    profile.level +
                    "</br>" +
                    profile.work +
                    "</br>" +
                    profile.popularity +
                    "</br>" +
                    profile.guild +
                    "</br>" +
                    profile.totalRank +
                    "</br>" +
                    profile.worldRank +
                    "</br>" +
                    profile.workTotalRank +
                    "</br>" +
                    profile.workWorldRank +
                    "</br>" +
                    `<img src="${profile.image}" alt=""/>`
                );
                return profile;
            })
            .then((res) => console.log(res)); 
    }
}

const Index = () => {
    return (
        <div>
            <Header></Header>
            <input className="w-25 form-control" type="search" onKeyPress={ onKeyPress }/>
        </div>
    );

};

export default Index;
