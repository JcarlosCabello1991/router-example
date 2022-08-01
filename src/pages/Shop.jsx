import React from 'react'
import products from '../data/products.json'
// import Product from '../Product/Product'
import {Outlet, Link} from 'react-router-dom'

function Shop() {
  
  return (
    <div>
        {
            products.map(({id, name})=>{                
                return (
                    <p key={id}>
                        <Link to={`/shop/${id}`} >{name}</Link>
                    </p>
                )
            })
        }
        <Outlet/>
    </div>
  )
}

export default Shop