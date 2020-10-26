import Link from "next/link";

const nav = () => {
    return (
        <nav className="flex-between h-100 pl-3 pr-3">
            <Link href="/"><a className="mr-2 nav-text" href="#">홈</a></Link>
            <div className="header__navitem h-100 flex-center">
                <a className="nav-text pointer">랭킹</a>
                <ul className="header__navitem_sublist">
                    <li><Link href="/"><a>컨텐츠 랭킹</a></Link></li>
                    <li><Link href="/"><a>통합 랭킹</a></Link></li>
                </ul>
            </div>
            <div className="header__navitem h-100 flex-center">
                <a className="nav-text pointer">통계</a>
                <ul className="header__navitem_sublist">
                    <li><Link href="/group/Adventurer"><a>직업 통계</a></Link></li>
                    <li><Link href="/"><a>월드 통계</a></Link></li>
                </ul>
            </div>
            <div className="header__navitem h-100 flex-center">
                <a className="nav-text pointer">소식</a>
                <ul className="header__navitem_sublist">
                    <li><Link href="/"><a>업데이트</a></Link></li>
                    <li><Link href="/"><a>이벤트</a></Link></li>
                    <li><Link href="/"><a>링크/유니온</a></Link></li>
                    <li><Link href="/"><a>유니온 아레나</a></Link></li>
                    <li><Link href="/"><a>폭업 사냥터</a></Link></li>
                    <li><Link href="/"><a>신규 5차 스킬</a></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default nav;
