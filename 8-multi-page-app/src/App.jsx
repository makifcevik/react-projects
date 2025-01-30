import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode(prev => prev === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, toggleTheme}}>
      <Navbar/>
      <Routes>
        <Route path="*"/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
