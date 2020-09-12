import Head from "next/head";

import Header from "../compornents/loginHeader"

const Index = () => {
    return (
        <div>
            <Head>
                <title>msg.gg</title>
                <link rel="stylesheet" href="/style/login.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header></Header>
        </div>
    );
};

export default Index;
