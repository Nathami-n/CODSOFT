import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '@/app/utils/prismaClient';
import {NextResponse} from 'next/server'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';

export const GET = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser() as KindeUser;

    const dbUser = await prisma.user.findUnique({
        where: {
            kindeId: user.id as string
        }
    })

    if(!dbUser) {
        const newUser = await prisma.user.create({
            data: {
                kindeId: user.id as string,
                name: user.given_name as string,
                email: user.email as string,
                imageUrl: user.picture as string
            }
        })
    }

    return NextResponse.redirect('http://localhost:3000');
    
}
