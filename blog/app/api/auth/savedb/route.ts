import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '@/app/utils/prismaClient';
import {NextResponse} from 'next/server'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';

export const GET = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (user !== null) {
        const dbUser = await prisma.user.findUnique({
            where: {
                email: user.email as string
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
        return NextResponse.redirect('https://codsoft-ruddy-five.vercel.app');
    }


    return NextResponse.json({error:'erro'})

    
    
}
