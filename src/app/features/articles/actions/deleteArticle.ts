
import prisma from "@/lib/prisma";


export const deleteDetailData = async(articleid:number) =>{
    const detailArticle = await prisma.todo.findMany({
        where:{
            id:articleid
        }
    })
    return detailArticle
}

