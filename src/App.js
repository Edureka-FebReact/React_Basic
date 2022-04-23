import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Employee from "./components/employee";
import Phone from "./components/phone";

function App() {
  return (
    <div className="App">
      <Header country="India" />
      <Phone/>
      {/* <Employee newDes="FullStack Dev" /> */}
      {/* <Footer company="Edureka" /> */}
    </div>
  );
}

export default App;
