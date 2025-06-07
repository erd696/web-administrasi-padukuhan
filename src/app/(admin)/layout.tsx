'use client';

import SideBar from '@/components/SideBar';
import { ReactNode } from 'react';
import { SidebarProvider } from '@/context/SidebarContext';
import { useSidebar } from '@/context/SidebarContext';

function LayoutContent({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <main className={`flex-1 p-5 transition-all duration-300 overflow-x-hidden ${isOpen ? 'ml-[250px]' : 'ml-0'}`}>
        {children}
      </main>
    </div>
  );
}

export default function DataMasterLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}