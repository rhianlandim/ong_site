import { estadosBrasil } from "@/utils/data";
import { signOut } from "next-auth/react";

const OngInfo = ({ ong }) => {
    const editarOng = async (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        try {
            await fetch('/api/auth/editaOng', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.get('nome'),
                    telefone: formData.get('telefone'),
                    endereco: formData.get('endereco'),
                    estado: formData.get('estado'),
                    id: ong.id,
                }),
            });
        } catch (error) {
            console.log('Erro desconhecido');
        }
    };

    const deletarOng = async () => {
        try {
            await signOut();

            await fetch('/api/auth/deletaOng', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: ong.id }),
            });
        } catch (error) {
            console.log('Erro desconhecido');
        }
    };

    return (
        <div className="w-full bg-white text-gray-700">
            <h1 className="text-4xl bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-700 font-bold text-white p-5 text-center mb-3 gummy-font">Perfil</h1>

            <form className="p-6" onSubmit={(e) => editarOng(e)}>
                <div className="grid grid-cols-2 content-center">
                    <div className="mr-10">
                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="nome">
                                Nome
                            </label>
                            <input type="text" name="nome" id="nome" defaultValue={ong.nome} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="endereco">
                                Endereço
                            </label>
                            <input type="text" name="endereco" id="endereco" defaultValue={ong.endereco} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="email">
                                Email
                            </label>
                            <input type="text" name="email" id="email" defaultValue={ong.email} disabled className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2" />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-red-600 text-white text-lg py-2 px-4 rounded-lg hover:bg-red-400 transition duration-200 gummy-font mt-4"
                            onClick={() => deletarOng()}
                        >
                            Excluir ONG
                        </button>
                    </div>

                    <div className="mr-10">
                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="telefone">
                                Telefone
                            </label>
                            <input type="text" name="telefone" id="telefone" defaultValue={ong.telefone} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="estado">
                                Estado
                            </label>
                            <select name='estado' id='estado' defaultValue={ong.estado} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
                                <option value=''>Selecione uma opção</option>
                                {
                                    estadosBrasil.map((estado, index) => {
                                        return (<option key={index} value={estado}>{estado}</option>)
                                    })
                                }
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-cyan-700 font-bold text-2xl mb-1 gummy-font pl-3" htmlFor="senha">
                                Senha
                            </label>
                            <input type="password" name="senha" id="senha" value="senha" disabled className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2" />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white text-2xl py-2 px-4 rounded-lg hover:bg-purple-400 transition duration-200 gummy-font mt-4"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OngInfo;
