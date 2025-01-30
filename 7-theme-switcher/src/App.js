import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode(prev => prev === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, toggleTheme}}>
      <div className="flex flex-col justify-center">
        <Card/>
        <Button/>
      </div>
    </ThemeProvider>
  );
}

export default App;
