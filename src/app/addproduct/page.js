"use client"

import Nav from "../_navigation/nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page(){
  const router = useRouter()
    const [product, setProduct] = useState({
        name:"",
        price:"",
        category:"",
        color:"",
        company:""
    })

    const AddProduct = async()=>{ 
      let products = await fetch("http://localhost:3000/api/products",{
        method:"get",
      })
      products = await products.json();      
      
      let res;
   if(products.result.length >= 3){
        alert('products sotrage limit exceeded');
        router.push('/productlist')
      }
   else{
       const result = await fetch("http://localhost:3000/api/products",{
         method:"post",
         body: JSON.stringify(product)
       })
        res = await result.json()
       
       if(res.sucess){
         alert('product added sucessfully');
         router.push("/productlist")
       }
       else 
        alert('error occure ! try again');
    }
  }
    return(
      <>
      <Nav/>
        <div className="flexCenter flex-col gap-y-2 addproduct max-w-[500px]">
            <h1>Add Producs</h1>
             <input type="text" value={product.name}    onInput={(e)=>setProduct({...product,name:e.target.value})} placeholder="Enter Product Name"/>
             <input type="text" value={product.price}   onInput={(e)=>setProduct({...product,price:e.target.value})} placeholder="Enter Product Price"/>
             <input type="text" value={product.color}   onInput={(e)=>setProduct({...product,color:e.target.value})} placeholder="Enter Product Color"/>
             <input type="text" value={product.company} onInput={(e)=>setProduct({...product,company:e.target.value})} placeholder="Enter Product Company"/>
             <input type="text" value={product.category} onInput={(e)=>setProduct({...product,category:e.target.value})} placeholder="Enter Product Category"/>
             <button onClick={AddProduct}>Add Product</button>
        </div>
      </>
    )
}