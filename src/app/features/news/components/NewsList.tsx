'use client'

import React, { useState, } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


type Notification = {
    id: number;          
    title: string;       
    content: string;    
    Author: string;     
    created_at: Date;    
  };
  
  type NewsListProps = {
    notifications: Notification[];
  };

const NewsList:React.FC<NewsListProps> = ({notifications}) => {

    
    const [currentPage, setCurrentPage] = useState(1);
    //1ページ当たりの表示数
    const itemsPerPage = 5;

    const totalPages = Math.ceil(notifications.length / itemsPerPage);

    // 現在のページに応じたアイテムの範囲を設定
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 配列から特定の要素だけを抜き取る
    const currentItems = notifications.slice(startIndex, endIndex);
  
    const handleNext = () => {
      if (currentPage < Math.ceil(notifications.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    const handlePageClick = (page:number) => {
      setCurrentPage(page);
    };


  return (
    <Card className="w-[750px]">
                <CardHeader>
                    <CardTitle>お知らせ</CardTitle>                    
                </CardHeader>
                <CardContent className="min-h-[200px]">
                    {currentItems.map((notification,index)=>(                        
                        <div key={index} className="flex justify-between pb-2">
                          <p>{notification.content}</p>
                          
                          <Link href={`features/articles/${notification.id}`}>Read More</Link>
                      </div>
                    ))}                                        
                </CardContent>                
                <CardFooter className="flex justify-between">
                <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                  {/* ページ番号の表示 */}
                <div className=" mt-4">
                  {[...Array(totalPages)].map((_,i) => (
                    <button
                      key={i}
                      onClick={() => handlePageClick(i + 1)}
                      className={`px-2 py-1 mx-1 ${
                        currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>                               
                <button onClick={handleNext} disabled={currentPage === Math.ceil(notifications.length / itemsPerPage)}>Next</button>                                    
                </CardFooter>
            </Card>
  )
}

export default NewsList