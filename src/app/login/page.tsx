import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import FormLogin from "@/components/layout/FormLogin";

const Login = async() => {
    const session = await getServerSession();

    if (session) {
        redirect('/perfil');
    }

    return (
        <>
            <FormLogin />
        </>
    )
};

export default Login;