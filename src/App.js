import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Employee from "./components/employee";
import Phone from "./components/phone";
import Form from "./components/from";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Header country="India" />
      <Products/>
      {/* <Form/> */}
      {/* <Phone/> */}
      {/* <Employee newDes="FullStack Dev" /> */}
      {/* <Footer company="Edureka" /> */}
    </div>
  );
}

export default App;
