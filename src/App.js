import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  return (
    <div className="bg-dark">
      <Header/>
      <main className="main">
        <AboutMe/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );

}

export default App;
