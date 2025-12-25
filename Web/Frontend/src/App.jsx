
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
function App() {

  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <section id="home"><Home /></section> 
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact/></section>
      {/* <section id="profiles"><Profiles /></section> */}
      {/* <Home />
      <About />
      <Projects />
      <Profiles /> */}
      <Footer />
    </>
  )
}

export default App
