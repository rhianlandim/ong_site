import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-700 text-gray-200 py-8">
            <div className="container mx-auto px-32 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4">
                <Image
                        src="/paw-solid.svg"
                        width={55}
                        height={55}
                        alt="Picture of the author"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-sm flex flex-col items-center">
                    <Image
                        src="/anjos-peludos-logo.png"
                        width={120}
                        height={120}
                        alt="Picture of the author"
                    />
                    <div className='mt-4 gummy-font'>© Em colaboração com ONG Anjos Peludos - {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
