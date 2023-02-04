
import './App.css';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features1 />
      <Features2 />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
