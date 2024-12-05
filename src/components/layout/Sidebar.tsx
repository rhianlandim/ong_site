'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShieldDog, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'next-auth/react';

export default function Sidebar({ong, handleClick, botaoClicado}) {
  return (
    <aside className="min-h-svh w-72 bg-gradient-to-b from-cyan-950 via-cyan-800 to-cyan-950 text-white flex flex-col">
      <div className="flex items-center justify-center p-6">
        <h1 className="text-2xl font-semibold text-center gummy-font">{ ong.nome }</h1>
      </div>
      
      <nav className="flex-grow px-2 py-6 border-0">
        <ul className="space-y-4">
          <li className={`w-full hover:bg-cyan-800 p-2 ${botaoClicado === 0 ? 'bg-cyan-800 border rounded-xl' : '' } hover:border hover:rounded-xl`}>
            <button className='w-full text-xl text-start gummy-font' onClick={() => handleClick(0)}>
                <FontAwesomeIcon className="inline mx-2" icon={faUser} width={20} height={20} />
                Meu Perfil
            </button>
          </li>
          <li className={`w-full hover:bg-cyan-800 p-2 ${botaoClicado === 1 ? 'bg-cyan-800 border rounded-xl' : '' } hover:border hover:rounded-xl`}>
            <button className='w-full text-start text-xl gummy-font' onClick={() => handleClick(1)}>
                <FontAwesomeIcon className="inline mx-2" icon={faShieldDog} width={20} height={20} />
                Meus Animais
            </button>
          </li>
        </ul>
      </nav>

      <div className="h-32">
        <button className="flex items-center justify-center w-full h-full pr-5 text-xl text-white hover:scale-110 gummy-font" onClick={() => signOut()}>
            <FontAwesomeIcon className="inline mr-2" icon={faArrowRightFromBracket} width={20} height={20} />
            Sair
        </button>
      </div>
    </aside>
  );
}
