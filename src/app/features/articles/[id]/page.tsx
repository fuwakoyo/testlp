import * as React from "react"

import { getDetailData } from "../actions/fetchArticle";


const Detailpage = async ({params}:{params:{id:string}}) => {
  const {id} = await params
  const detailArticle = await getDetailData(id)

  return (
    <>
      <div className="justify-center flex">
        <div className="bg-red-100 size-2/3">
          {detailArticle.map((article:any)=>
            (
            <>
              <div  key={article.id}>
                <h2 className="text-center">{article.title}</h2>                        
              </div>
              <div>
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="rich-text-content"
              />            
              </div>
              
       
            </>
            )
          )}    
                 
        </div>
      </div>
        
    </>
  )
}

export default Detailpage