import Link from "next/link";
import { useEffect } from "react";

const sideBar = (props) => {
    useEffect(() => {
        let active = kind.indexOf(props.kind);

        document.querySelectorAll(".rankSidebar > li").forEach((li, i) => {
            if(i == active) 
                li.classList.add("active");
            else
                li.classList.remove("active");
        })
    });

    const kind = [
        "Dojang", 
        "Seed",
        "Union"
    ]
    
    return (
        <ul className="rankSidebar">
            <Link href={`/ranking/content/DojangRanking`}><li className="pointer">무릉 랭킹</li></Link>
            <Link href={`/ranking/content/SeedRanking`}><li className="pointer ">더시드 랭킹</li></Link>
            <Link href={`/ranking/content/UnionRanking`}><li className="pointer ">유니온 랭킹</li></Link>
        </ul>
    );
};

export default sideBar;