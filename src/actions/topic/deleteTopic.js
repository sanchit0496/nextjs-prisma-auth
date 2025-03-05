"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteTopic(id){
    console.log('id', id)
    await prisma.topic.delete({
        where: { id },
    });

    const topics = await prisma.topic.findMany();
    console.log(topics);

}