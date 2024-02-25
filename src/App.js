import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import About from "./components/About";
import { Skills } from "./components/Skills";
import { ContactMe } from "./components/ContactMe";
function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <About />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
