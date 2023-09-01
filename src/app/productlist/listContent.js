import Delete from "@/utils/delete"
import Link from "next/link"

export default function TableContent({products, deleted}){
    return(
        <>
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
                                    <td><Delete id={product._id} deleted={deleted}/></td>
                                </tr>
                             
                            )
                        })
                    }
                </tbody>
                </table>
        </>
    )
}