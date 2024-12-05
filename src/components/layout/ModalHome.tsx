import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ModalHome = ({ animal, handleClick }) => {
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

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]">
                    <div className='border-b mb-3'>
                        <h1 className="text-4xl font-bold text-cyan-700 text-center mb-3 gummy-font">{animal.nome}</h1>
                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Descrição
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.descricao}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Sexo
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.sexo}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Tipo
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.tipo}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Raça
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.raca}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Porte
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.porte}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Cor
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.cor}</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold text-cyan-700 text-center mb-3 gummy-font">{animal.ong.nome}</h1>
                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Endereço
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.ong.endereco}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Estado
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.ong.estado}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Telefone
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.ong.telefone}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-cyan-700 font-bold text-lg mb-1 gummy-font">
                                Email
                            </h2>
                            <p className="text-gray-700 text-lg mb-4 text-start">{animal.ong.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalHome;
