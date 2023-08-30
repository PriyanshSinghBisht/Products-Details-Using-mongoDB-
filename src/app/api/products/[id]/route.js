import { connectionSrc } from "@/utils/db";
import { Product } from "@/utils/model/productModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){
    let id = content.params.id;
    console.log(id)
    const record = {_id:id}
    let payload = await request.json()
    await mongoose.connect(connectionSrc)
    let result = await Product.findOneAndUpdate(record , payload)

    return NextResponse.json({result,sucess:true}, {status:200})
}

export async function GET(request,content){
    let id = content.params.id;
    const record = {_id:id}
    await mongoose.connect(connectionSrc)
    let result = await Product.findById(record)

    return NextResponse.json({result,sucess:true}, {status:200})
}

export async function DELETE(request,content){
    let id = content.params.id;
    const record = {_id:id}
    await mongoose.connect(connectionSrc)
    let res = await Product.deleteOne(record);

    return NextResponse.json({result:res} ,{status:200})
}
