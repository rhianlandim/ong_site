import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Form from "@/components/layout/FormCadastro";

const cadastroOng = async() => {
    const session = await getServerSession();

    if (session) {
        redirect('/perfil');
    }

    return (
        <>
            <Form />
        </>
    )
};

export default cadastroOng;
