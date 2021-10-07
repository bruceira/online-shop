import React from 'react'
import { useEffect, useState } from 'react'
import style from './product.module.css'


const api = "http://localhost:8000"

export default function ProductList() {

  const [products, setProduct] = useState([])
  const { newProduct, setNewProduct } = useState("")

  useEffect(() => {
    getProduct()

  }, [])

  const getProduct = () => {
    fetch(api + "/product").then(res => res.json()).then(data => setProduct(data)).catch(err => console.error("error : ", err))
  }
  return (
    <div className={style.ProductList}>
      {products.map(product => (
        <div key={product._id} className={style.ProductList_container}>
          <div className={style.ProductList_name}>{product.name}</div>
          <div className={style.ProductList_price}>{product.price}</div>
        </div>
      ))}

    </div>
  )
}
