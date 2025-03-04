"use client"
import Header from "@/components/Header/Header";
import { redirect } from "next/navigation";

export default function Home() {

  const handleLogin = () => {
    redirect("/login")
  }

  const handleRegister = () => {
    redirect("/createaccount")
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        Welcome To The App
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Create Account</button>
      </main>
    </div>
  );
}
