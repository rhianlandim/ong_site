import { PrismaClient } from "@prisma/client";
import Galeria from "@/components/layout/Galeria";
import { animaisParaAdocao, ongInicial } from "@/utils/data";

const prisma = new PrismaClient();

const ong = await prisma.ong.create({ data: ongInicial });

const animais = animaisParaAdocao.map((animal) => ({ ...animal, ongId: ong.id }));

await prisma.animal.createMany({ data: [...animais] })

const Home = async () => {
  const animais = await prisma.animal.findMany({
    include: {
      ong: true
    }
  });
  
  return (
    <div>
      <Galeria animais={animais}/>
    </div>
  );
};

export default Home;
