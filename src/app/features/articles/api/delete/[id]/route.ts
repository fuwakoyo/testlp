import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request:Request,{params}:{params:{id:string}}){
    const todo = await prisma.todo.delete({
        where:{
            id:parseInt(params.id)
        }
     })
     return NextResponse.json({todo});



}