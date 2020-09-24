import Head from "next/head";
import Link from "next/link";

const loginHeader = () => {
    return (
        <header className="d-flex justify-content-center align-items-center fs-2 text-white">
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/login.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="logo fs-3 font-lighter">
                <a href="#">msg.gg</a>
            </div>
        </header>
    );
};

export default loginHeader;