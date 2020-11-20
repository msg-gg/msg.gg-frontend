import Head from "next/head";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Header from "../compornents/Header/header"
import Main from '../compornents/Main'

const Index = () => {

    useEffect(() => {
        document.querySelector("#__next").style.backgroundImage = `url(../../images/background/login.png)`
    })

    return (
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    );
};

export default Index;
