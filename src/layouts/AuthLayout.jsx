// import React from "react";
// import Footer from '../components/Footer/Footer'

// export default function AuthLayout({
//   children,
//   header,
//   showHeader = true
// }) {
//   return (
//     <div
//       className="
//         min-h-screen 
//         w-full 
//         bg-black
//         bg-[radial-gradient(circle_at_center,_#111,_#000_70%)]
//         grid 
//         grid-rows-[auto_1fr_auto] 
//         px-4">

//       {showHeader && (
//         <header
//           className="
//             flex 
//             flex-col 
//             items-center 
//             justify-center 
//             h-32 
//             text-center">
//           {header}
//         </header>
//       )}

//       <main className="
//         flex 
//         items-center
//         justify-center 
//         -mt-28 ">
//         {children}
//       </main>

//       <Footer />
//     </div>
//   )
// }



import React from "react";
import Footer from "../components/Footer/Footer";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

export default function AuthLayout({ children, header, showHeader = true }) {
  return (
    <div
      className="
        min-h-screen w-full
        bg-[#0c0f15]
        relative overflow-hidden
        grid grid-rows-[auto_1fr_auto]
        px-4
        pt-7
        font-sans
      "
    >

      {/* Luz azul volumétrica */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(900px_at_50%_0%,rgba(105,140,255,0.20),transparent_70%)]
          blur-[120px] opacity-80
          pointer-events-none
          border-[4px] border-red-500
        "
      />

      {/* Ambiente azul profundo */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(800px_at_70%_80%,rgba(40,70,130,0.20),transparent_70%)]
          blur-[140px] opacity-35
          pointer-events-none
        "
      />

      {/* Cinza ice atmospheric */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(800px_at_30%_60%,rgba(200,220,245,0.06),transparent_70%)]
          blur-[160px] opacity-40
          pointer-events-none

        "
      />

      {showHeader && (
        <header className="
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  h-32 
                  text-center
                  pt-8
                  z-0
                  "
        >
          {header}
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </header>
      )}

      <main className="flex items-center justify-center mb-24 ">
        {children}
      </main>

      <Footer />
    </div>
  );
}
