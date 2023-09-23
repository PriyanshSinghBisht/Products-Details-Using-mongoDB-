"use client"
import { Suspense } from "react";
import Nav from "../_navigation/nav";
import { useState,useEffect } from "react";
import TableContent from "./listContent";
import TableLoading from "@/components/TableLoading";
const getData = async()=>{

    let data = await fetch(`/api/products`,{
        method: "GET",
        next:{revalidate: 0}
      })
      data = await data.json()
      if(data.sucess){
        console.log(data.result)
        return data.result;
      }
      else {
         return {sucess:false}
      }
}

export default function Page(){
   const [products, setProducts] = useState([]);
   const [deleteIndicate, setDeleteIndicate] = useState(false);

   const deleted = ()=>{
      setDeleteIndicate((del)=>!del);
   }

   useEffect(()=>{
    getData()
    .then(res=>setProducts(res));
},[])
   useEffect(()=>{
       getData()
       .then(res=>setProducts(res));
   },[deleteIndicate])
    return(
        <div>
            <Nav/>
            <div className="w-full bdr">
            <h1>Product List</h1>
               <Suspense fallback={ <TableLoading/> }>
                  <TableContent products={products} deleted={deleted} />
                  </Suspense>
            </div>
        </div>
    )
}