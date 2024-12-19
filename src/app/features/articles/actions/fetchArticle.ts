
import prisma from "@/lib/prisma";

export const getAllData = async() =>{
    const allArticles = await prisma.todo.findMany()
    return allArticles
}

export const getDetailData = async(articleid:string) =>{
    const detailArticle = await prisma.todo.findMany({
        where:{
            id:parseInt(articleid)
        }
    })
    return detailArticle
}

