import { getServerSession } from 'next-auth';
import Image from "next/image";

const Header = async () => {
    const session = await getServerSession();

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 shadow-md">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/">
                        <Image
                            src="/logo-animal.png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </a>
                    <div className="flex items-center gap-10 lg:order-2">
                        {
                            session ? (
                                <>
                                    <a href="/perfil" className="text-white bg-cyan-950 hover:bg-cyan-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-gray-700 focus:outline-none dark:focus:ring-gray-800 gummy-font">Meu Perfil</a>
                                </>
                            ) : (
                                <>
                                    <a href="/login" className="text-cyan-950 bg-primary-700 hover:underline focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none gummy-font">Entrar</a>
                                    <a href="/cadastro/ong" className="text-white bg-cyan-950 hover:bg-cyan-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-gray-700 focus:outline-none dark:focus:ring-gray-800 gummy-font">Cadastre-se</a>
                                </>
                            )
                        }
                        {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button> */}
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;