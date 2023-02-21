import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

const Navbar = () => {

    const result = useSession()
    console.log(result);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <button className="btn" onClick={() => signIn('github') }>Sign in</button>
                <button className="btn" onClick={() => signOut('github') }>Sign Out</button>
                <Link href={'./protected'}>
                    protected
                </Link>
            </div>
            <div className="navbar__right">

            </div>
        </div>
    )
}

export default Navbar