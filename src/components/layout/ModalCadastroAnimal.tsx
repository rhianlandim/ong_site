import { useRouter } from "next/navigation";

const ModalCadastroAnimal = ({ ongId, handleClick }) => {
    const router = useRouter();

    const cadastrarAnimal = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        formData.append('ongId', ongId)

        try {
            await fetch('/api/auth/cadastroAnimal', {
                method: 'POST',
                body: formData,
            });

            handleClick()

            router.refresh()
        } catch (error) {
            console.log('Erro desconhecido');
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-gray-700">
            <div className="border-8 border-cyan-700 bg-white rounded-2xl shadow-lg w-11/12 max-w-lg max-h-[90vh] overflow-hidden relative">
                <form className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]" onSubmit={(e) => cadastrarAnimal(e)}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="descricao" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Descrição
                        </label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                            rows={3}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tipo" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Tipo
                        </label>
                        <select name='tipo' id='tipo' className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
                            <option value=''>Selecione uma opção</option>
                            <option value='Gato'>Gato</option>
                            <option value='Cachorro'>Cachorro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sexo" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Sexo
                        </label>
                        <select name='sexo' id='sexo' className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
                            <option value=''>Selecione uma opção</option>
                            <option value='Macho'>Macho</option>
                            <option value='Fêmea'>Fêmea</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="raca" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Raça
                        </label>
                        <input
                            type="text"
                            id="raca"
                            name="raca"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="porte" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Porte
                        </label>
                        <select name='porte' id='porte' className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
                            <option value=''>Selecione uma opção</option>
                            <option value='Pequeno'>Pequeno</option>
                            <option value='Médio'>Médio</option>
                            <option value='Grande'>Grande</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="cor" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Cor
                        </label>
                        <input
                            type="text"
                            id="cor"
                            name="cor"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imagem" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Imagem
                        </label>
                        <input
                            type="file"
                            name="imagem"
                            id="imagem"
                            accept="image/*"
                            className="gummy-font"
                        />
                    </div>

                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="w-full bg-red-600 text-white text-lg py-2 px-4 rounded-lg hover:bg-red-400 transition duration-200 gummy-font mt-4"
                            onClick={handleClick}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white text-lg py-2 px-4 rounded-lg hover:bg-purple-400 transition duration-200 gummy-font mt-4"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ModalCadastroAnimal;
