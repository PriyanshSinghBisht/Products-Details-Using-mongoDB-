"use client"

import { useRouter } from "next/navigation"


export default function Delete({id}){
     const router = useRouter();   
    const Delete = async()=>{
        let res = await fetch("http://localhost:3000/api/products/"+id,{
            method:"delete"
        })
         alert("product is deleted")
         router.push('/productlist')
    }
    return(
        <div>
            <button onClick={Delete}
              className="text-white bg-red-600 hover:bg-red-700 px-2"
            >delete </button>
        </div>
    )
}