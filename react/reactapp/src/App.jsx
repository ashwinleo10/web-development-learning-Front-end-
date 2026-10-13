import About from "./About";
import Aboutclass from "./Classcomponets/Aboutclass";
import HomeClass from "./Classcomponets/HomeClass";
import Contact from "./Contact";
import Greeting from "./Greeting";
import Home from "./Home";


function App() {
  let name = "Ashwin";
  let age = 22;
  return (
    <>
    <h1>Hello & Welcome to react</h1>
    <h2>That's all today see you..</h2>
    <Home />
    <HomeClass />
    <About />
    <Aboutclass />
    <Contact />
    <Greeting name={name} age={age} favcolor="blue"/>
    </>
  );
}

export default App;