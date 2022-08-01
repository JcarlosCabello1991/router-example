import React from 'react'
import {useParams} from 'react-router-dom'
import products from '../data/products.json'

function Product() {

  const {id : idProduct} = useParams();
  const {id, name} = products.find(e=> e.id == parseInt(idProduct))
    
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
    </div>
  )
}

export default Product