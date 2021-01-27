// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Component from './components/challenges/day1/Component'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  const name = 'Jessica';

  return (
   <div className="App">
     <h1>Welcome to React, {name}</h1>
     <h2>We just modified our root App component</h2>
     <Header />
     <Component />
     <Home />
     <Footer />
   </div>
   
  );
}

export default App;




//components must be within a div