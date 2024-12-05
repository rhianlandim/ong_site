'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { estadosBrasil } from "@/utils/data";

const FormCadastro = () => {
    const router = useRouter();

    const submitCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget)

        try {
            const res = await fetch('/api/auth/cadastroOng', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    nome: formData.get('nome'),
                    endereco: formData.get('endereco'),
                    telefone: formData.get('telefone'),
                    estado: formData.get('estado'),
                    senha: formData.get('senha'),
                }),
            });

            if (res.ok) {
                router.push('/login'); 
            } else {
                console.log('Erro desconhecido');
            }
        } catch (error) {

        }
    };

    return (
        <div className="flex flex-row justify-around">
            <div className="basis-2/4 m-16">
                <form className="flex flex-col" onSubmit={(e) => submitCadastro(e)}>
                    <div className="border-8 border-red-400 rounded-xl p-10 drop-shadow-lg w-full">
                        <h1 className="text-5xl font-bold text-cyan-950 gummy-font mb-5">Cadastre sua ONG!</h1>

                        <label htmlFor="nome" className="text-md text-cyan-950 gummy-font">Nome da ONG</label>
                        <div className="mt-2 mb-2">
                            <input type="text" name="nome" id="nome" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <label htmlFor="endereco" className="text-md text-cyan-950 gummy-font mt-2">Endereço com número</label>
                        <div className="mt-2 mb-2">
                            <input type="text" name="endereco" id="endereco" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <label htmlFor="estado" className="text-md text-cyan-950 gummy-font mt-2">Estado</label>
                        <div className="mt-2 mb-2">
                            <select name='estado' id='estado' className="w-full rounded-md border-0 px-1 py-3 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6">
                                <option value=''>Selecione uma opção</option>
                                {
                                    estadosBrasil.map((estado, index) => {
                                        return (<option key={index} value={estado}>{estado}</option>)
                                    })
                                }
                            </select>
                        </div>

                        <label htmlFor="telefone" className="text-md text-cyan-950 gummy-font mt-2">Telefone</label>
                        <div className="mt-2 mb-2">
                            <input type="text" name="telefone" id="telefone" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <label htmlFor="email" className="text-md text-cyan-950 gummy-font mt-2">Email</label>
                        <div className="mt-2 mb-2">
                            <input id="email" name="email" type="email" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <label htmlFor="senha" className="text-md text-cyan-950 gummy-font mt-2">Senha</label>
                        <div className="mt-2 mb-2">
                            <input id="senha" name="senha" type="password" className="w-full rounded-md border-0 p-2 text-cyan-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-950 sm:text-sm/6" />
                        </div>

                        <a href="/login" className="block text-center text-cyan-950 w-full hover:underline mt-5 gummy-font">Já possui uma ONG cadastrada? Faça login.</a>

                        <div className="mt-5 flex justify-center gap-x-6">
                            <button type="submit" className="text-white bg-cyan-950 hover:bg-cyan-800 rounded-lg p-2 gummy-font basis-1/4">Salvar</button>
                        </div>
                    </div>
                </form>
            </div >

            <div className="basis-2/4 m-16 flex flex-row">
                <div className="mr-5 basis-2/4">
                    <Image
                        src="/dog-form.jpg"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                        className="rounded-2xl h-full"
                    />
                </div>
                <div className="basis-2/4 p-6">
                    <p className="text-xl text-cyan-950 gummy-font">
                        Sabemos o quanto vocês dedicam amor e cuidado aos animais resgatados e o quanto desejam vê-los encontrar lares cheios de carinho e respeito. Queremos ajudar vocês a tornar esse sonho realidade!
                        <br /><br />
                        Nossa plataforma foi criada especialmente para ONGs que, como vocês, lutam pela causa animal e desejam aumentar as chances de cada bichinho ser adotado.
                        <br /><br />
                        Aqui, cada animalzinho será visto, lembrado e terá a chance de ser acolhido por uma nova família. Imagine quantas vidas podem mudar!
                        <br /><br />
                        Cadastrando-se no nosso site, você aumenta a visibilidade dos seus animais, alcança um número maior de adotantes e fortalece a conexão entre quem quer adotar e quem precisa de um lar.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default FormCadastro;

/*<div className="sm:col-span-3">
    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900"></label>
    <div className="mt-2">
        <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
        </select>
    </div>
</div>*/