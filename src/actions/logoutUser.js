"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutUser() {
    console.log("called here");
    cookies().set({
        name: "userSession",
        value: "",
        path: "/",
        maxAge: 0,
    });
    redirect("/"); // This will only work if used in a form submit
}
