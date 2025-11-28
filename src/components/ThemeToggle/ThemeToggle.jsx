import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {

    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => {
        console.log("CLICOU NO TOGGLE");
        setIsDark(!isDark)
      }
      }
      className="
        px-3 py-2 rounded-lg text-sm font-medium
        bg-gray-700 text-white
        dark:bg-gray-200 dark:text-black
        transition
      "
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
