import Image from "next/image";

const CardCadastroAnimal = ({ handleClick }) => {
    return (
        <div className="place-self-center bg-zinc-400 border border-gray-200 rounded-2xl shadow m-10 p-3">
            <div>
                <Image
                    src='/foto-faltante-card.jpg'
                    height={200}
                    width={200}
                    alt="Picture of the author"
                    className="w-96 h-96 rounded-t-2xl"
                />
            </div>
            <button className="mt-4 inline w-full text-5xl bg-purple-200 font-semibold text-cyan-700 hover:bg-cyan-800 hover:text-purple-300 gummy-font text-center py-12 rounded-b-2xl" onClick={() => handleClick()}>
                Cadastrar Animal
            </button>
        </div>
    )
}

export default CardCadastroAnimal;