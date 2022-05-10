import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  return (
    <div class="bg-dark">
      <Header/>
      <main class="main">
        <AboutMe/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );

}

export default App;
