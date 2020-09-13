import Head from "next/head";
import Link from "next/link";

const loginHeader = () => {
    return (
        <header className="d-flex justify-content-between align-items-center fs-2 text-white">
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/login.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <Link href="/">
                <a href="#" className="font-bold">
                    &lt; &nbsp;로그인이 필요없습니다
                </a>
            </Link>
            <div className="logo fs-3 font-lighter">
                <a href="#">msg.gg</a>
            </div>
            <div className="auth d-flex justify-content-between align-items-center text-center">
                <a href="#">sign up</a>
                <a href="#">sign in</a>
            </div>
        </header>
    );
};

export default loginHeader;
