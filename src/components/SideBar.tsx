'use client';

import Link from 'next/link';
import { useSidebar } from '@/context/SidebarContext';

export default function SideBar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <aside
        className={`${isOpen ? 'w-64' : 'w-0'} bg-gradient-to-b from-[#2c3e50] to-[#1a252f] shadow-xl h-screen fixed left-0 top-0 z-50 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="p-5 font-bold text-xl border-b border-gray-600 text-white text-center whitespace-nowrap">
          <Link href="/dashboard" className="hover:text-blue-300 transition-colors duration-200 flex items-center justify-center">
            <span>Admin Padukuhan Pakel</span>
          </Link>
        </div>
        
        <nav className="p-4 space-y-3">
          <Link 
            href="/data-kependudukan-main" 
            className="flex items-center p-3 text-gray-200 hover:bg-[#34495e] rounded-lg transition-all duration-200 hover:pl-5 hover:text-white"
          >
            <span className="mr-3">👥</span>
            <span>Data Master Kependudukan</span>
          </Link>
          
          <Link 
            href="/data-kk-main" 
            className="flex items-center p-3 text-gray-200 hover:bg-[#34495e] rounded-lg transition-all duration-200 hover:pl-5 hover:text-white"
          >
            <span className="mr-3">🏠</span>
            <span>Data Master KK</span>
          </Link>
          
          <Link 
            href="/dokumen-padukuhan-main" 
            className="flex items-center p-3 text-gray-200 hover:bg-[#34495e] rounded-lg transition-all duration-200 hover:pl-5 hover:text-white"
          >
            <span className="mr-3">📂</span>
            <span>Data Dokumen Padukuhan</span>
          </Link>
        </nav>
        <div className="px-4 pb-20 absolute bottom-0 left-0 w-full">
          <Link 
            href="/login" 
            className="flex items-center p-3 text-gray-200 hover:bg-red-600 rounded-lg transition-all duration-200 hover:pl-5 hover:text-white mt-8"
          >
            <span className="mr-3">🚪</span>
            <span>Logout</span>
          </Link>
        </div>
        
        {/* Footer sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400 text-sm border-t border-gray-600">
          © 2025 KKN 87 Kelompok 3 Universitas Atma Jaya Yogyakarta
        </div>
      </aside>

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className={`fixed top-4 ${isOpen ? 'left-64' : 'left-4'} z-50 p-3 rounded-full bg-[#2c3e50] text-white shadow-lg hover:bg-[#34495e] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </>
  );
}