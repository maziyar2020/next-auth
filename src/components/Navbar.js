import { signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <button className="btn" onClick={() => { signIn }}>Sign in</button>
                <button className="btn" onClick={() => { signOut }}>Sign Out</button>
            </div>
            <div className="navbar__right">

            </div>
        </div>
    )
}

export default Navbar