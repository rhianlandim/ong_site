import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        const { nome, raca, tipo, porte, descricao, cor, sexo, id } = req.body;

        try {
            await prisma.animal.update({
                where: { id },
                data: {
                    nome,
                    raca,
                    tipo,
                    porte,
                    descricao,
                    cor,
                    sexo,
                }
            });

            return res.status(204)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao editar animal!' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
