'use client'

import { signIn } from "next-auth/react";

import Image from "next/image";

const FormLogin = () => {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        await signIn('credentials', { email: formData.get('email'), senha: formData.get('senha'), callbackUrl: '/perfil' });
    }

    return (
        <div className="flex flex-row justify-center mt-16 mb-16 gap-10">
            <div className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 pl-24 pr-32 border rounded-full">
                <Image
                    src="/dogs-cats-login.png"
                    width={950}
                    height={950}
                    alt="Picture of the author"
                />
            </div>

            <div className="w-1/4">
                <form className="flex flex-col h-full" onSubmit={(e) => login(e)}>
                    <div className="border-8 border-amber-200 rounded-xl drop-shadow-lg pl-10 pr-10 pt-8 pb-8">
                        <h1 className="text-5xl font-bold text-cyan-950 gummy-font mb-5">Faça Login!</h1>

                        <label htmlFor="email" className="block text-xl text-cyan-950 gummy-font mt-8">Email</label>
                        <div className="mt-2 mb-2">
                            <input id="email" name="email" type="email" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <label htmlFor="senha" className="block text-xl text-cyan-950 gummy-font mt-8">Senha</label>
                        <div className="mt-2 mb-2">
                            <input id="senha" name="senha" type="password" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <a href="/cadastro/ong" className="block text-center text-cyan-950 text-lg hover:underline mt-10 gummy-font">Não possui uma ONG cadastrada?<br /> Faça cadastro.</a>

                        <div className="mt-8 flex justify-center">
                            <button type="submit" className="text-white text-xl bg-cyan-950 hover:bg-cyan-800 rounded-lg p-4 gummy-font">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin;
