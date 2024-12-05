import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-4'>
                <div className='flex flex-row gap-72'>
                    <Image
                        src="/dog-ears2.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/cat-ears.png"
                        width={270}
                        height={270}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/dog-ears.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
                <div className="bg-lime-200 py-16 px-40 text-cyan-950 text-center w-full">
                    <article>
                        <h1 className="font-bold text-5xl uppercase mb-7 gummy-font">Adote Amor, Mude uma Vida!</h1>
                        <p className="font-base text-3xl font-medium gummy-font">Há um amigo esperando por você, pronto para transformar seus dias com afeto e gratidão. Dê uma chance ao amor incondicional – adote um animal e descubra o poder da conexão verdadeira!</p>
                    </article>
                </div>
            </div>
        </>
    )
};

export default Banner;