import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar"
import { Banner } from './components/Banner'
import { About } from './components/Contact'
import { Projects }from './components/Projects'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import "./index.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

