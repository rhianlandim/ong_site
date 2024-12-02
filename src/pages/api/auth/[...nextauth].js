import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Providers({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const ong = await prisma.ong.findUnique({
          where: { email: credentials.email },
        });

        if (ong && await bcrypt.compare(credentials.senha, ong.senha)) {
          return ong;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
