import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import HowToRefer from './components/HowToRefer';
import Navbar from './components/Navbar';
// import PageNav from './components/PageNav';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Navbar />
      {/* <PageNav/> */}
      <div className="flex mt-4 items-center justify-center">
        <Hero/>
      </div>
      <HowToRefer/>
    </div>
  );
}

export default App;
