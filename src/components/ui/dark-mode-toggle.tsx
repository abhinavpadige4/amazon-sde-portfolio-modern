import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("dark-mode") === "true";
    }
    return false;
  });

  React.useEffect(() => {
    const html = window.document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-full p-1 transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
};