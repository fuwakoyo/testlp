"use client"

import { useRouter } from "next/navigation";
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article } from "../../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ArticleCardProps {
    article: Article;
  }



const ArticleCard:React.FC<ArticleCardProps> = ({article}) => {
  

  const router = useRouter();
  const deleteArticle = async(id:number) =>{
    const response = await fetch(`http://localhost:3000/features/articles/api/delete/${id}`,{
        method:"DELETE"
    })
    if (response.ok){
        console.log("成功")
        router.refresh();

    } else {
        console.error("失敗");
      }
  }




  return (
    <>
      
        <Card className="w-[350px]" key={article.id} >
            <Link href={`/features/articles/${article.id}`}>
              <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.content}</CardDescription>
                  <CardDescription>{article.id}</CardDescription>
              </CardHeader>
            </Link>
            <CardContent>
              <Button onClick={()=>deleteArticle(article.id)}>削除</Button>
            </CardContent>
        </Card>
      
    </>
  )
}

export default ArticleCard