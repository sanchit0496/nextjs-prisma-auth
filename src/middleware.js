import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Define protected and public routes
const protectedRoutes = ["/homepage"];
const publicRoutes = ["/login", "/createaccount", "/"];

export function middleware(req) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // Directly get the cookie (no await needed)
    const userSession = cookies().get("userSession")?.value;
    console.log("User session in middleware:", userSession);

    // If accessing protected route without valid session, redirect to login
    if (isProtectedRoute && !userSession) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // If accessing public route with valid session, redirect to homepage
    if (isPublicRoute && userSession) {
        return NextResponse.redirect(new URL("/homepage", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
