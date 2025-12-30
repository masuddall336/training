
import { useState } from 'react'
import './App.css'
import From from './components/form-practic/From'
import ProductForm from './components/products/ProductForm'
import ProductLoad from './components/products/ProductLoad'

function App() {
  let [products, setProducts] = useState([])
  let handlePro = prod => {
    let takepro = [...products, prod];
    setProducts(takepro);
  }

  return (
    <>
      <ProductForm pullProducts={handlePro}></ProductForm>
      <ProductLoad product={products}></ProductLoad>
      <From ></From>
      <div className=' text-center'>

        <h2>home compo</h2>
        <h2>home compo</h2>
        <h2>home compo</h2>
        <h2>home compo</h2>
        <h2>home compo</h2>
        <h2>home compo</h2>
      </div>
    </>
  )
}

export default App
