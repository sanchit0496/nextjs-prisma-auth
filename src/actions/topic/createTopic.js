"use server"

import { cookies } from 'next/headers';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function createTopic(topic, userId){
    const userSession = cookies().get("userSession")?.value;

    console.log('topic', topic)
    console.log('userSession', userSession)

    await prisma.topic.create({
        data: {
          topic: topic,
        },
      });
    
      const users = await prisma.topic.findMany();
      console.log(users);
}