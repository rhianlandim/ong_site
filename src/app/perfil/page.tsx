'use server'

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import PerfilOng from "@/components/layout/PerfilOng";

const Perfil = async() => {
    const session = await getServerSession();

    if (!session) {
        redirect('/login');
    }

    const ongLogada = await prisma.ong.findUnique({
        where: {
            email: session?.user?.email === null ? undefined : session?.user?.email,
        },
        include: {
            animals: true
        }
    })

    return (
        <>
            <PerfilOng ong={ongLogada}/>
        </>
    )
};

export default Perfil;