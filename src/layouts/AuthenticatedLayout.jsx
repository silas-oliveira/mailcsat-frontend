


import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function AuthenticatedLayout({
  children,
  header,
  showHeader = true
}) {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#3b0764]">
      <Sidebar isOpen={sideBarOpen} setIsOpen={setSidebarOpen} />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${sideBarOpen ? "ml-64" : "ml-20"
          }`}

      >
        {showHeader && (
          <header className="flex flex-col items-center justify-center h-32 text-center w-full">
            {header}
          </header>
        )}

        <main className="flex-grow flex flex-col items-center justify-start overflow-y-auto px-4">
          {children}
        </main>

        <footer className="mt-6 w-full">
          <Footer />
        </footer>
      </div>

    </div>

  )
}
