import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        try {
            await prisma.animal.deleteMany({
                where: { ongId: id },
            });

            await prisma.ong.delete({
                where: { id },
            });

            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar Ong!' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
