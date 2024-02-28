import Header from "./assets/Components/HeaderComponent/Header"
import Main from  './assets/Components/MainComponent/Main'
import Footer from './assets/Components/FooterComponent/Footer'
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import DetailProduct from "./assets/Components/DetailProductComponent/DetailProduct";

function App() {
  return (
    <>
      <Header></Header>
      
      <Main></Main>

      <Footer></Footer>
    </>
  )
}

export default App
