import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const ModalPerfil = ({ animal, handleClick }) => {
    const router = useRouter();

    const deletarAnimal = async (animalId: number) => {
        try {
            await fetch('/api/auth/deletaAnimal', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: animalId }),
            });

            handleClick()

            router.refresh()
        } catch (error) {
            console.log('Erro desconhecido');
        }
    };

    const editarAnimal = async (e: React.FormEvent<HTMLFormElement>, animalId: number) => {;
        const formData = new FormData(e.currentTarget)

        try {
            await fetch('/api/auth/editaAnimal', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.get('nome'),
                    descricao: formData.get('descricao'),
                    raca: formData.get('raca'),
                    tipo: formData.get('tipo'),
                    porte: formData.get('porte'),
                    cor: formData.get('cor'),
                    sexo: formData.get('sexo'),
                    id: animalId,
                }),
            });

            handleClick();
        } catch (error) {
            console.log('Erro desconhecido');
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-gray-700">
            <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-lg max-h-[90vh] overflow-hidden relative">
                <button className='absolute text-red-900 z-10 text-4xl top-3 right-5 hover:scale-110' onClick={handleClick}><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#D83131", }} />
                </button>
                <div className="relative">
                    <Image
                        src={animal.imagem ? animal.imagem : '/foto-faltante-card.jpg'}
                        height={280}
                        width={280}
                        alt="Imagem do animal"
                        className="w-full h-96 object-cover rounded-t-2xl"
                    />
                </div>

                <form className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]" onSubmit={(e) => editarAnimal(e, animal.id)}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            defaultValue={animal.nome}
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
                            defaultValue={animal.descricao}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                            rows={3}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tipo" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Tipo
                        </label>
                        <select name='tipo' id='tipo' defaultValue={animal.tipo} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
                            <option value=''>Selecione uma opção</option>
                            <option value='Gato'>Gato</option>
                            <option value='Cachorro'>Cachorro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sexo" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Sexo
                        </label>
                        <select name='sexo' id='sexo' defaultValue={animal.sexo} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
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
                            defaultValue={animal.raca}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="porte" className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                            Porte
                        </label>
                        <select name='porte' id='porte' defaultValue={animal.porte} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2">
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
                            defaultValue={animal.cor}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mt-2"
                        />
                    </div>

                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="w-full bg-red-600 text-white text-lg py-2 px-4 rounded-lg hover:bg-red-400 transition duration-200 gummy-font mt-4"
                            onClick={() => deletarAnimal(animal.id)}
                        >
                            Excluir animal
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

export default ModalPerfil;
