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
        return <p>Loading</p>
    }

    return (
        <>
            <MainLayout>
                <p>Wellcome {session.user.name}</p>
            </MainLayout>
        </>
    )
}

export default Profile;