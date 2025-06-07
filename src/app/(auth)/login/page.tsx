'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormEvent } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="flex-1 relative">
        <Image
          src="/images/desa.JPG"
          alt="Desa Pakel"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30 px-8">
          <h2 className="text-2xl font-medium drop-shadow">Selamat Datang di</h2>
          <h1 className="text-4xl font-bold mt-4 drop-shadow">Sistem Database Padukuhan Pakel</h1>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-12 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Masuk ke Akun Anda
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Masukkan username"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
