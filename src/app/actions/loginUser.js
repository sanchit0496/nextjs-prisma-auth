"use server"
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


  export async function loginUser(email, password) {
    console.log('data', email, password)

      
    const users = await prisma.user.findMany();
    console.log(users);
    let userFound = false;
    users.forEach((user) => {
      if(user.password === password && user.email === email){
        userFound =  true;
      }
    })

    return userFound

  }
