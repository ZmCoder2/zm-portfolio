import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar"
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
// import { Projects }from './components/Projects'
// import { Resume } from './components/Resume'
// import { Contact } from './components/Contact'
// import { Footer } from './components/Footer'
import "./index.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
       <Skills />
      {/*<Projects />
      <Resume />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

