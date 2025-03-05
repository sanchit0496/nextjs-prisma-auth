"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deletePost(id){
    console.log('id', id)
    await prisma.post.delete({
        where: { id },
    });

    const topics = await prisma.post.findMany();
    console.log(topics);

}