import Link from "next/link";
import { useEffect } from "react";

const sideBar = (props) => {
    useEffect(() => {
        let active = kind.indexOf(props.kind);
        console.log(active)

        document.querySelectorAll(".rankSidebar > li").forEach((li, i) => {
            if(i == active) 
                li.classList.add("active");
            else
                li.classList.remove("active");
        })
    });

    const kind = [
        "World", 
        "Reboot",
        "Guild",
        "Achievement"
    ]
    
    return (
        <ul className="rankSidebar">
            <Link href={`/ranking/total/WorldRanking`}><li className="pointer">월드 랭킹</li></Link>
            <Link href={`/ranking/total/RebootRanking`}><li className="pointer ">리부트 랭킹</li></Link>
            <Link href={`/ranking/total/guildRanking`}><li className="pointer ">길드 랭킹</li></Link>
            <Link href={`/ranking/total/AchievementRanking`}><li className="pointer ">업적 랭킹</li></Link>
        </ul>
    );
};

export default sideBar;