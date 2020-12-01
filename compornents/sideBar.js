import Link from "next/link";
import { useEffect } from "react";

const sideBar = (props) => {
    useEffect(() => {
        let active = group.indexOf(props.group);
        console.log(props.group)

        document.querySelectorAll(".sidebar > li").forEach((li, i) => {
            if(i == active) 
                li.classList.add("sidebar__group__active");
            else
                li.classList.add("sidebar__group__none");
        })
    });

    const group = [
        "adventurer", 
        "cygnus",
        "resistance",
        "hero",
        "grandis", 
        "zero",
        "kinesis",
    ]

    return (
        <ul className="sidebar">
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Adventurer`}><a href="#">모험가</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Cygnus`}><a href="#">시그너스</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Resistance`}><a href="#">레지스탕스</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Hero`}><a href="#">영웅</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Grandis`}><a href="#">그란디스</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Zero`}><a href="#">제로</a></Link>
            </li>
            <li className="sidebar__group pointer">
                <Link href={`/${props.title}/Kinesis`}><a href="#">키네시스</a></Link>
            </li>
        </ul>
    );
};

export default sideBar;