import React from 'react'
import { useEffect, useState } from 'react'
import style from './product.module.css'


const api = "http://localhost:8000"

export default function ProductList() {

  const [products, setProduct] = useState([])
  const [newProduct, setNewProduct] = useState("")
  const [btnToogle, setBtntoggle] = useState(false)

  useEffect(() => {
    getAllProducts()

  }, [])

  const getAllProducts = () => {
    fetch(api + "/product").then(res => res.json()).then(data => setProduct(data)).catch(err => console.error("error : ", err))
  }

  const deleteProduct = async (id) => {
    const data = await fetch(api + "/product/delete/" + id, { method: "DELETE" }).then(res => res.json())
    setProduct(products => products.filter(product => product._id !== data._id))
  }

  const addProduct = async () => {

    const data = await fetch(api + "/product/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      }).then(res => res.json())

    setProduct([...products, data])
    setBtntoggle(false)
    setNewProduct("")
    console.log("Hey")
  }


  return (
    <div>

      <div className={style.ProductList}>
        {products.map(product => (
          <div key={product._id} className={style.ProductList_container} >
            <div className={style.ProductList_name}>{product.name}</div>
            <div className={style.ProductList_price}>{product.price}</div>
            <button onClick={() => deleteProduct(product._id)}>X</button>
          </div>
        ))}
      </div>

      <button onClick={() => setBtntoggle(true)} >+</button>

      {btnToogle ? (
        <div>
          <button onClick={() => setBtntoggle(false)} >X</button>
          <h3>add product</h3>

          <form onSubmit={addProduct} >
            <input placeholder="enter product" onChange={e => setNewProduct(e.target.value)} />
            <input placeholder="enter product" onChange={e => setNewProduct(e.target.value)} />
            <button type="submit" >Add...</button>
          </form>
          {/* <input placeholder="enter product" onChange={e => setNewProduct(e.target.value)} value={newProduct} /> */}


        </div>
      ) : ""}
    </div>
  )
}
