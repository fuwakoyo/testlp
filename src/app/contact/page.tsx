"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from 'emailjs-com';


export default function contact() {

  


   //問い合わせの型 inquirySchemaから生成する
   type Inputs = z.infer<typeof inquirySchema>

   const inquirySchema = z.object({
     name:z.string()
     .min(1,'名前は必須です')
     //どんな文字が危険なのかわかっていない。
     .refine((val) => !/[\@#\$%\*\&=\'"<>;|\\\/]/.test(val), {
      message: '名前には無効な文字が含まれています',
    }),
     mail:z.string().min(1,'メールアドレスは必須です'),
     //Inputコンポーネント に渡される値は常に文字列なので、変換する必要がある
     phone: z.string()
     .refine((val) => !val.includes('-'), {
       message: 'ハイフンは含めないでください',
     })
     .refine((val) => /^\d+$/.test(val), {
       message: '半角数字で入力してください',
     })
     .refine((val) => val.length >= 9, {
       message: '9桁以上で入力をしてください',
     }),
     content:z.string()
     .min(1,'問い合わせ内容は必須です')
     .refine((val) => !/[\@#\$%\*\&=\'"<>;|\\\/]/.test(val), {
      message: '内容に無効な文字が含まれています',
    })
   })

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<Inputs>({resolver:zodResolver(inquirySchema)});

  //SubmitHandler型でInputs型のデータを受け取って、渡す
  //const onSubmit:SubmitHandler<Inputs> = (data) => console.log(data)

  const submitMail = async (data:Inputs) => {
    const serviceId = process.env.NEXT_APP_EMAILJS_SERVICE_ID; //ServeceIDを取得
    const templateId = process.env.NEXT_APP_EMAILJS_TEMPLATE_ID;// TemplateIDを取得
    const publicId = process.env.NEXT_APP_EMAILJS_PUBLIC_ID; // Public Keyを取得
    
      try {
        await emailjs.send(serviceId, templateId, data.content)
      } catch (error) {
      console.error("エラーが出ました" + error)
      }
    }
  
 

  return (
    <div className="flex justify-center">
    <form className="space-y-6 w-1/3 flex-col" onSubmit={handleSubmit(submitMail)}> 
      <div>   
        <p>aaa</p>     
      <Input {...register('name')}/>            
      {errors.name && errors.name.message}
      </div>   
      <div>
      <p>aaa</p>
      <Input {...register('mail')} />
      {errors.mail && errors.mail.message}
      </div>
      <div>
      <p>aaa</p>
      <Input {...register('phone')} />
      {errors.phone && errors.phone.message}
      </div>
      <div>
      <p>aaa</p>
      <Textarea {...register('content')} className="h-40"/>
      {errors.content && errors.content.message}      
      </div>
      <div>
        <Button type="submit">送信</Button>
      </div>
    </form>
    </div>
  )
}
