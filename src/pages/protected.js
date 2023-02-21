import { getSession, useSession } from "next-auth/react";

const Protected = () => {
    const {data : session , status} = useSession()
    console.log(session);
    return ( 
        <div>
            protected
        </div>
     );
}
 
export default Protected;

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)

    if(!session){
        return {
            redirect : {
                destination : '/api/auth/signin?callbackUrl=http://localhost:3000/protected',
                permanent : false 
            }
        }
    }
    return {
        props : {
            session
        }
    }
}