import MainLayout from "@/layouts/main";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {


    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn()
        }
    })

    if (status === "loading") {
        <p>Loading</p>
    }

    if (session) {
        console.log(session.user.name);
    }

    return (
        <>
            <MainLayout>
                <p>Wellcome {session ? <span>{session.user.name}</span> : "Dear User"} </p>
            </MainLayout>
        </>
    )
}

export default Profile;