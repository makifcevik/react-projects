import { data } from "./info";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header data={data}/>
      <About data={data}/>
      <Projects projects={data.projects}/>
      <Footer links={data.links}/>
    </>
  );
}

export default App;
