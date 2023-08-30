"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav(){
    const pathname = usePathname();
    console.log(pathname);
      return(
         <div className="flex items-center nav bdr w-full">
           <h1 className="bg-blue-700 font-semibold p-2 text-blue-200">Navbar</h1>
        <Link  className={`${pathname === '/addproduct'?"bg-blue-700":"bg-blue-500"} hover:bg-blue-700
        text-white p-2`} href="/addproduct">Add Product</Link>
        <Link className={`${pathname === '/productlist'?"bg-blue-700":"bg-blue-500"} hover:bg-blue-700
        text-white p-2`} href="/productlist">Product list</Link>
         </div>
      )
}