
import './App.css';
import Features1 from './components/Features1';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignedIn from './views/SignedIn';
import SignIn from './views/SignIn';
import Start from './views/Start';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="main">
        {/* <Start /> */}
        {/* <SignIn /> */}
        <SignedIn />

      </div>
      <Footer /> 
      
    </div>
  );
}

export default App;
