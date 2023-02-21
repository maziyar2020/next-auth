import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {

    const result = useSession()
    console.log(result);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <button className="btn" onClick={() => signIn('github') }>Sign in</button>
                <button className="btn" onClick={() => signOut('github') }>Sign Out</button>
            </div>
            <div className="navbar__right">

            </div>
        </div>
    )
}

export default Navbar