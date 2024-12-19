'use client'
import { createClient } from '@/utils/supabase/client'
import React, { useState } from 'react'
const supabase = createClient()

const Uploader = () => {
  
  
  //アップロード画像 File型 or null
  const [file,setFile] = useState<File | null>(null)
  
  //アップロード処理
  const handleUpload = async () =>{
    //fileが選択されていなかったら返す
    if(!file) return
    console.log(`testfolder/${file.name}`)

    try {
      const { data, error } = await supabase.storage
          .from('picutures') // バケット名を確認
          .upload(`testfolder/${file.name}`, file, {
              cacheControl: '3600',
              upsert: false
          });

      if (error) {
          console.error('Error uploading file:', error);
          // エラーの詳細を表示
      } else {
          console.log('File uploaded successfully:', data);
      }
  } catch (error) {
      console.error('An unexpected error occurred:', error);
  }
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Uploader