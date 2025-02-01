import { useRoutes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"
import BlogDetail from "./components/BlogDetail"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"

function App() {

  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Basics", abstract: "Learn the fundamentals of React.", details: "React is a JavaScript library for building UI..." },
    { id: 2, title: "React Routing", abstract: "Understand client-side routing in React.", details: "React Router allows navigation..." },
    { id: 3, title: "State Management", abstract: "Manage state effectively in React.", details: "State can be managed using Hooks or Redux..." }
  ]);


  const [themeMode, setThemeMode] = useState("light");
  const element = useRoutes([
    {
      path: "/", 
      element: <Layout/>, 
      errorElement: <NotFound/>,
      children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "blog", element: <Blog blogs={blogs}/>},
        {path: "blog/:id", element: <BlogDetail blogs={blogs}/>},
        { path: "*", element: <NotFound /> },
      ]
    }  
  ])

  const toggleTheme = () => {
    setThemeMode(prev => prev === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, toggleTheme}}>
      {element}
    </ThemeProvider>
  )
}

export default App
