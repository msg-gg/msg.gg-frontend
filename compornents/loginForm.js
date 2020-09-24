import Link from 'next/link'

const loginForm = () => {
    return (
        <div className="loginForm">
            <form>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="login"><img src="/images/icons/user.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="text" placeholder="username"/>
                </div>
                <div className="form-group d-flex justify-content-around align-items-center">
                    <label htmlFor="password"><img src="/images/icons/password.png" alt=""/></label>
                    <input className="fs-4 font-lighter" type="password" placeholder="password"/>
                </div>
                <div className="login pt-4 pr-3 pl-3 d-flex justify-content-center">
                    <input className="fs-3 text-white font-bold" type="submit" value="로그인"/>
                </div>
                <div className="form-group pt-4 d-flex justify-content-center">
                    <p className="fs-2 text-white">계정이 없습니까? <a href="#" className="font-bold" ><u>회원가입</u></a></p>
                </div>
            </form>
        </div>
    )
}

export default loginForm