"use server"
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


  export async function createUser(email, password) {
    console.log('data', email, password)
    await prisma.user.create({
      data: {
        password: password,
        email: email,
      },
    });
  
    const users = await prisma.user.findMany();
    console.log(users);
  }
