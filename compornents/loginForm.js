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
                <div className="login d-flex flex-column">
                    <input className="align-self-end fs-2 text-white" type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default loginForm