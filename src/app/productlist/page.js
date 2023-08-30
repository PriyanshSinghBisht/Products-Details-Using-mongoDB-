import Link from "next/link";
import Delete from "@/utils/delete";
import Nav from "../_navigation/nav";
const getData = async()=>{

    let data = await fetch("http://localhost:3000/api/products",{
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
export default async function Page(){
   const products = await getData()
    return(
        <div>
            <Nav/>
            <div className="w-full bdr">
            <h1>Product List</h1>
            <table border={1} className="w-full" >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Color</th>
                    <th>Category</th>
                    </tr>       
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.company}</td>
                                    <td>{product.color}</td>
                                    <td>{product.category}</td>
                                    <td className="bg-yellow-500 hover:text-blue-700 text-white"><Link className="border-none underline" href={`/productlist/${product._id}`}>Edit</Link></td>
                                    <td><Delete id={product._id}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}