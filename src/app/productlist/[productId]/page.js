"use client"
import Nav from "@/app/_navigation/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Page(props){
    const router = useRouter()
    const id = props.params.productId;

    const [product, setProduct] = useState({
        name:"",
        price:"",
        category:"",
        color:"",
        company:""
    })
    const UpdateProduct = async()=>{    
       const result = await fetch("http://localhost:3000/api/products/"+id,{
         method:"put",
         body: JSON.stringify(product)
       })
       const res = await result.json()
       
       if(res.sucess){
         alert('product updated sucessfully');
         router.push("/productlist")
       }
       else 
        alert('error occure ! try again');
    }
    useEffect( ()=>{
           setProductDetail();
    },[])

    const setProductDetail = async()=>{
      let res = await fetch("http://localhost:3000/api/products/"+id,{
        method:"get"
     })
     res = await res.json()
     res = res.result
     setProduct({
                   name:res.name,
                   price:res.price,
                   category:res.category,
                   color:res.color,
                   company:res.company
                 })
    }
    return(
        <div className="flexCenter flex-col gap-y-2 addproduct max-w-[500px]">
             <Nav/>
            <h1>Update Producs</h1>
             <input type="text" value={product.name}    onInput={(e)=>setProduct({...product,name:e.target.value})} placeholder="Enter Product Name"/>
             <input type="text" value={product.price}   onInput={(e)=>setProduct({...product,price:e.target.value})} placeholder="Enter Product Price"/>
             <input type="text" value={product.color}   onInput={(e)=>setProduct({...product,color:e.target.value})} placeholder="Enter Product Color"/>
             <input type="text" value={product.company} onInput={(e)=>setProduct({...product,company:e.target.value})} placeholder="Enter Product Company"/>
             <input type="text" value={product.category} onInput={(e)=>setProduct({...product,category:e.target.value})} placeholder="Enter Product Category"/>
             <button onClick={UpdateProduct}>Update Product</button>
             <Link href="/productlist">Product List</Link>
        </div>
    )
}