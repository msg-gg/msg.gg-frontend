import Link from 'next/link'
import { useEffect } from "react";

const loginForm = () => {
    useEffect(() => {
        document.querySelector(".joinForm form").style.opacity = ".2";
        setTimeout(() => {
            document.querySelector(".joinForm form").style.opacity = "1";
        }, 10)
    })

    return (
        <div className="joinForm">
            <form>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="join"><img src="/images/icons/user.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="text" placeholder="아이디"/>
                </div>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="password"><img src="/images/icons/password.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="password" placeholder="닉네임"/>
                </div>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="join"><img src="/images/icons/user.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="text" placeholder="비밀번호"/>
                </div>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="password"><img src="/images/icons/password.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="password" placeholder="비밀번호 확인"/>
                </div>
                <div className="join pt-4 pr-3 pl-3 d-flex justify-content-center">
                    <input className="fs-3 text-white font-bold" type="submit" value="회원가입"/>
                </div>
                <div className="form-group pt-4 d-flex justify-content-center">
                    <p className="fs-2 text-white">계정이 있습니까? <Link href="/"><a href="#" className="font-bold" ><u>로그인</u></a></Link></p>
                </div>
            </form>
        </div>
    )
}

export default loginForm