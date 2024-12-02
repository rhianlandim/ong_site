'use client'

import Banner from "@/components/layout/Banner";
import Card from "@/components/layout/Card";
import ModalHome from "@/components/layout/ModalHome";
import { useState } from "react";

const Galeria = ({ animais }) => {
    const [modalAberto, setModalAberto] = useState<boolean>(false);
    const [animal, setAnimal] = useState<any>(false);

    const abrirModal = (animalId: number) => {
        setAnimal(animais.find((animal) => animal.id === animalId));

        setModalAberto(true)
    };

    const fecharModal = () => (setModalAberto(false));

    return (
        <div>
            <Banner />
            <div className="grid grid-cols-4 justify-evenly">
                {
                    animais.map((animal) => {
                        return (<Card animal={animal} key={animal.id} textoBotao={'Mais informações'} handleClick={abrirModal} />)
                    })
                }
            </div>
            {
                modalAberto ? <ModalHome animal={animal} handleClick={fecharModal} /> : null
            }
        </div>
    );
};

export default Galeria;
