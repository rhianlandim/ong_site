import Image from "next/image";

const Card = ({animal, textoBotao, handleClick}) => {
    const limitadorCaracteres = (descricao: string): string => {
        const limite = 147;
 
        if (descricao.length <= limite) return descricao;

        return `${descricao.substring(0, limite)}...`;
    };

    return (
        <div className="place-self-center bg-zinc-400 border border-gray-200 rounded-2xl shadow m-10 p-3">
            <div className="">
                <Image
                    src={ animal.imagem ? animal.imagem : '/foto-faltante-card.jpg' }
                    height={280}
                    width={280}
                    alt="Picture of the author"
                    className="w-96 h-96 rounded-t-2xl"
                />
            </div>
            <div className="flex flex-col bg-white mt-3 rounded-b-2xl">
                <h5 className="text-2xl bg-purple-200 text-cyan-700 font-extrabold p-1 items-center text-center gummy-font">{ animal.nome }</h5>
                <div className="bg-white h-32 p-2">
                    <p className="text-lg text-cyan-700 gummy-font">{ limitadorCaracteres(animal.descricao) }</p>
                </div>
                <button className="text-md bg-purple-200 font-semibold text-cyan-700 hover:bg-cyan-800 hover:text-purple-300 gummy-font text-center p-2 rounded-b-2xl" onClick={() => handleClick(animal.id)}>
                    { textoBotao }
                </button>
            </div>
        </div>
    )
}

export default Card;