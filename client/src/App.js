
import './App.css';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KanbanDivorceProcess from './components/KanbanDivorceProcess';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="main">
        {/* <Hero />
        <hr></hr>
        <Features1 />
        <hr></hr>
        <Features2 />
        <hr></hr>
        <SignUp />
        <Footer /> */}
        {/* <SignIn /> */}
        <KanbanDivorceProcess />
      </div>
      
    </div>
  );
}

export default App;
