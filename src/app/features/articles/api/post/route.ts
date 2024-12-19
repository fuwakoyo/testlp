import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const {title,content,Author} = await request.json()
    const todo = await prisma.todo.create({
        data:{
            title,
            content,
            Author
        }
     })
     return NextResponse.json({todo});



}