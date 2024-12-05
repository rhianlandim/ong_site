import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, senha, nome, endereco, estado, telefone } = req.body;

    if (!email || !senha || !nome || !endereco || !estado || !telefone) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const ongExiste = await prisma.ong.findUnique({
        where: { email },
      });
      
      if (ongExiste) {
        return res.status(400).json({ error: 'Email já está em uso' });
      }

      const senhaHasheada = await bcrypt.hash(senha, 10);

      const novaOng = await prisma.ong.create({
        data: {
          email,
          nome,
          endereco,
          estado,
          telefone,
          senha: senhaHasheada,
        },
      });
      
      return res.status(201).json({
        email: novaOng.email,
      });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar ong!' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
