import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar title="title" option1="Si" option2="Rev"/> */}
      <Navbar />
      <div className="container mt-3">
        {/* <TextForm heading="Enter marks of the Test series you gave"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
