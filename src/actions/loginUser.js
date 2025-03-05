"use server";

import { cookies } from "next/headers";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function loginUser(email, password) {
    console.log("data", email, password);

    const users = await prisma.user.findMany();
    console.log(users);

    let userFound = false;
    users.forEach((user) => {
        if (user.password === password && user.email === email) {
            userFound = true;
        }
    });

    if (userFound) {
        // ✅ No await needed, directly set cookie
        cookies().set({
            name: "userSession",
            value: JSON.stringify({ email: email }),
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });
    }

    return userFound;
}
