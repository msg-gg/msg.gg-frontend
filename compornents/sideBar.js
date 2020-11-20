import Link from "next/link";

const sideBar = (props) => {
    return (
        <ul className="sidebar">
            <li className="sidebar__group sidebar__group__active pointer">
                <Link href={`/${props.title}/Adventurer`}><a href="#">모험가</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Cygnus`}><a href="#">시그너스</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Resistance`}><a href="#">레지스탕스</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Hero`}><a href="#">영웅</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Grandis`}><a href="#">그란디스</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Zero`}><a href="#">제로</a></Link>
            </li>
            <li className="sidebar__group sidebar__group__none pointer">
                <Link href={`/${props.title}/Kinesis`}><a href="#">키네시스</a></Link>
            </li>
        </ul>
    );
};

export default sideBar;