import Link from "next/link";

const nav = () => {
    return (
        <nav className="flex-between h-100 pl-3 pr-3">
            <Link href="/"><a className="mr-2 nav-text" href="#">홈</a></Link>
            <div className="header__navitem h-100 flex-center">
                <a className="nav-text pointer">랭킹</a>
                <ul className="header__navitem_sublist">
                    <li><Link href="/ranking/total/WorldRanking"><a>통합 랭킹</a></Link></li>
                    <li><Link href="/ranking/content/DojangRanking"><a>컨텐츠 랭킹</a></Link></li>
                </ul>
            </div>
            <div className="header__navitem h-100 flex-center">
                <a className="nav-text pointer">통계</a>
                <ul className="header__navitem_sublist">
                    <li><Link href="/init/Adventurer"><a>직업 통계</a></Link></li>
                    <li><Link href="/world/WorldStats"><a>월드 통계</a></Link></li>
                </ul>
            </div>
            <Link href="/"><a className="mr-2 nav-text" href="#">소식</a></Link>
        </nav>
    );
};

export default nav;
