'use client';
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#fafafa] flex items-center justify-center min-h-screen px-4">
      <div className="bg-white border border-gray-200 rounded-md flex flex-col gap-4 p-8 max-w-md w-full">
        <h1 className="text-3xl font-serif text-center text-gray-800">Resumo<span className="italic text-[#8fa8b3]">Livre</span></h1>
        <p className="text-center text-gray-500 text-sm">Organize, compartilhe e aprenda com resumos.</p>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fa8b3]" 
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md w-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#8fa8b3]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit" 
            className="w-full bg-[#8fa8b3] text-white py-3 rounded-lg hover:bg-[#768b9a] transition">
            Entrar
          </button>
          
        </form>
        <div className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
          Não tem uma conta? 
          <Link href="/signup" className="text-[#8fa8b3] hover:underline">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
