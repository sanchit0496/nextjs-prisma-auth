"use server";

import { cookies } from "next/headers";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function loginUser(email, password) {
  console.log("Login attempt:", email, password);

  // Fetch the user with matching email and password
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("Fetched User:", user);

  if (user && user.password === password) {
    // Set the user session cookie with specific user data
    cookies().set({
      name: "userSession",
      value: JSON.stringify({ id: user.id, email: user.email }),
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return true;
  }

  return false;
}
