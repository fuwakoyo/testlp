"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z, ZodError } from "zod";
import Editor from "../components/editor/Editor";




// スキーマ定義
const ArticleContent = z.object({
  title: z.string().min(1, { message: "タイトルは1文字以上必要です。" }),
  content: z.string().min(1, { message: "内容は1文字以上必要です。" }),
  Author: z.string().min(1, { message: "著者は1文字以上必要です。" }),
});

const CreatePage = () => {


 
  
  

  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [errors, setErrors] = useState<string[]>([]); // バリデーションエラー表示用
  const [sentence,setSentence] = useState<string>("");


  const create = async () => {
    

    try {
      // 入力データのバリデーション (エラーがスローされる)
      const validatedData = ArticleContent.parse({
        title: titleText,
        content: sentence,
        Author: authorText,
      });
  
      setErrors([]); // エラーをクリア

      // サーバーにデータ送信
      const response = await fetch("http://localhost:3000/features/articles/api/post", {        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData), // バリデーション済みデータを送信
      });

      console.log(titleText)
      if (response.ok) {
        console.log("投稿成功");
      } else {
        console.error("投稿失敗");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(error.errors.map((err) => err.message)); // ZodError のメッセージを取得
        console.error("バリデーションエラー:", error.errors);
      } else {
        console.error("予期しないエラー:", error);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  // エディターの内容を取得する関数
  const handleEditorChange = (editorContent: string) => {
    setContentText(editorContent); // エディターの内容をcontentTextに保存
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // フォームのデフォルト送信を防ぐ
          create();
        }}
        className="flex flex-col  w-1/2 mx-auto"
      >
        
        <div className="">
          <p className="">タイトル</p>
          <Input value={titleText} onChange={(e) => handleChange(e, setTitleText)} />
        </div>
        <div className="mt-3">
          <h1>内容</h1>         
          <Editor sentence={sentence} setSentence={setSentence}/>
          
        </div>
        <div className="w-1/3 mt-3">
          <p className="">書いた人</p>
          <Input value={authorText} onChange={(e) => handleChange(e, setAuthorText)} />
        </div>
        <Button type="submit" className="max-w-[100] mt-5">送信</Button>
      </form>

      
      
      {errors.length > 0 && (
        <div className="mt-4 text-red-500">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default CreatePage;
