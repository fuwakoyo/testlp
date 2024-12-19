import prisma from "@/lib/prisma";

export const postArticle = async(title:string,content:string,Author:string) =>{
    await prisma.todo.create({
       data:{
           title,
           content,
           Author
       }
    })
   }
   