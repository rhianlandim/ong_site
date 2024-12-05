'use client'

import { useState } from 'react';

import Sidebar from './Sidebar';
import Card from './Card';
import ModalPerfil from './ModalPerfil';
import ModalCadastroAnimal from './ModalCadastroAnimal';
import OngInfo from './OngInfo';
import CardCadastroAnimal from './CardCadastroAnimal';

const PerfilOng = ({ ong }) => {
  const [botaoClicado, setBotaoClicado] = useState<number | null>(0);
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [modalCadastroAberto, setModalCadastroAberto] = useState<boolean>(false);
  const [animal, setAnimal] = useState<any>(false);

  const handleClick = (botaoId: number) => (setBotaoClicado(botaoId));

  const abrirModal = (animalId: number) => {
    setAnimal(ong.animals.find((animal) => animal.id === animalId));

    setModalAberto(true)
  };
  
  const fecharModal = () => (setModalAberto(false));

  const abrirModalCadastro = () => setModalCadastroAberto(true);

  const fecharModalCadastro = () => (setModalCadastroAberto(false));

  return (
    <div className='flex'>
      <Sidebar ong={ong} handleClick={handleClick} botaoClicado={botaoClicado} />
      <div className="grid grid-cols-4 justify-evenly">
        {
          botaoClicado === 1 ? ong.animals.map((animal) => {
            return (
              <Card animal={animal} key={animal.id} textoBotao={'Editar'} handleClick={abrirModal}/>)
          }) : null
        }
        {
          botaoClicado === 1 ? <CardCadastroAnimal handleClick={abrirModalCadastro}/> : null
        }
      </div>
      {
        botaoClicado === 0 ? <OngInfo ong={ong}/> : null
      }
      {
        modalAberto ? <ModalPerfil animal={animal} handleClick={fecharModal}/> : null
      }
      {
        modalCadastroAberto ? <ModalCadastroAnimal ongId={ong.id} handleClick={fecharModalCadastro}/> : null
      }
    </div>
  )
};

export default PerfilOng;