import Breadcrums from "./components/Breadcrums"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProductListing from "./pages/ProductListing"

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Day 15 - Breadcrums</h1>
          <Breadcrums />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
