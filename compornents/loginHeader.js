import Link from 'next/link'

const loginHeader = () => {
    return (
        <header className="d-flex justify-content-between align-items-center fs-2 text-white">
            <Link href="/">
                <a href="#" className="font-bold">&lt; &nbsp;로그인이 필요없습니다</a>
            </Link>
            <div className="logo fs-3 font-lighter">
                <a href="#">msg.gg</a>
            </div>
            <div className="auth">
                <a href="#">sign up</a>
                <a href="#">sign in</a>
            </div>
        </header>
    )
}

export default loginHeader