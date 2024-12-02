import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        const { nome, endereco, estado, telefone, id } = req.body;

        try {
            await prisma.ong.update({
                where: { id },
                data: {
                    nome,
                    endereco,
                    estado,
                    telefone,
                }
            });

            return res.status(204)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao editar ong!' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
