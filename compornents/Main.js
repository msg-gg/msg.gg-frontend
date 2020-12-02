import Head from "next/head";
import { useRouter } from "next/router";

const main = () => {
    const router = useRouter();

    return (
        <div>
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
            <div className="search flex-center">
                <input type="text" onKeyPress={(e) => {
                    if (e.key === 'Enter') { 
                        router.push({
                            pathname: '/profile',
                            query: { username: document.querySelector("input").value },
                        })
                    }
                }}/>
                <button onClick={() => router.push({
                    pathname: '/profile',
                    query: { username: document.querySelector("input").value },
                })}>검색</button>
            </div>
        </div>
    );
};

export default main;