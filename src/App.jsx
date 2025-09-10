import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col">
      {/* <h1>Contact us page</h1> */}
      <Header />
      <Hero />
    </div>
  );
}

export default App;
