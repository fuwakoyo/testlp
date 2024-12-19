import * as React from "react"
import { getAllData } from "./actions/fetchArticle";
import ArticleCard from "./components/articleCard/ArticleCard";
import { Article } from "./types";

const Allpage = async() => {

  const articles = await getAllData()

    
  return (
    <>
        {articles.map((article:Article)=>{
          return <ArticleCard article={article} key={article.id}/>
        })}
        
    </>
  )
}

export default Allpage