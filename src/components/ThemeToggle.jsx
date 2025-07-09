import { Moon, Sun } from "lucide-react"; // 🌙☀️ Icons for dark/light mode
import { useEffect, useState } from "react"; // 🧠 React hooks
import { cn } from "../../src/lib/utils"; // ❌ Not used anymore, can be removed if unused

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // ✅ Tracks current theme state

    useEffect(() => {
        // 🚀 On component mount, check saved theme from localStorage
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme=== "dark") {
            setIsDarkMode(true); // ✅ Apply dark mode
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false); // ☀️ Apply light mode
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        // 🔄 Toggle between dark and light mode
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark"); // 🌞 Remove dark class
            localStorage.setItem("theme", "light"); // 💾 Save preference
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark"); // 🌙 Add dark class
            localStorage.setItem("theme", "dark"); // 💾 Save preference
            setIsDarkMode(true);
        }
    };

    return (
        // 🔘 Theme toggle button (top-right corner)
        <button 
            onClick={toggleTheme} 
            className="fixed right-3 max-sm:hidden top-3 z-50 p-2 rounded-full transition-colors duration-300 focus-outline-hidden"
        >
            {isDarkMode ? (
                // 🌞 Show sun icon if dark mode is active
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                // 🌙 Show moon icon if light mode is active
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}
