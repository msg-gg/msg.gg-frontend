import Head from "next/head";

const main = () => {

    return (
        <Head>
            <title>msg.gg</title>
            <link rel="stylesheet" href="/style/header.css" />
            <link rel="stylesheet" href="/style/main.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
                rel="stylesheet"
            ></link>
            <script src="/js/app.js"></script>
        </Head>
    );
};

export default main;
