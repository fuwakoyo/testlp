import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function seed(){
    const todos = [{title: 'Learn Next.js',content:'test1',Author:'test1'}, 
        {title: 'Learn React 19',content:'test2',Author:'test2'}, 
        {title: "Learn Typescript",content:'test3',Author:'test3'}]
    for(let todo of todos){
        await prisma.todo.create({
            data:todo
        })
    }
}

seed()
    .catch(e =>{
        console.error(e)
        process.exit(1)
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })