import formidable from "formidable";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({
      uploadDir: "./public",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao processar o upload." });
      }

      try {
        const { nome, raca, tipo, porte, cor, descricao, ongId, sexo } = fields;

        const imagePath = `/${files.imagem[0].newFilename}`;

        const animal = await prisma.animal.create({
          data: {
            nome: nome[0],
            raca: raca[0],
            tipo: tipo[0],
            porte: porte[0],
            cor: cor[0],
            sexo: sexo[0],
            descricao: descricao[0],
            imagem: imagePath,
            ongId: Number.parseInt(ongId[0])
          },
        });

        res.status(200).json(animal);
      } catch (error) {
        res.status(500).json({ error: "Erro ao salvar no banco de dados." });
      }
    });
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
