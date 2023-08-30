import { connectionSrc } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/utils/model/productModel";

export async function GET(){
    let data = []

    try{
        await mongoose.connect(connectionSrc)
        data = await Product.find()
    }
    catch(error){
        data = {result:"error",sucess:false}
    }
    
    return(NextResponse.json({result:data, sucess:true}))
}


export async function   POST(request){
     const payload = await request.json()
     await mongoose.connect(connectionSrc);
     let product = new Product(payload)
     const result = await product.save()
     return NextResponse.json({result:result,sucess:true},{status:200})
}