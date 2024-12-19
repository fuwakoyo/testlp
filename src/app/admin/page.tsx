
import React from 'react'
import Link from 'next/link';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import UserAvatar from './components/UserAvatar';

const admin = () => {
  
    return (
      <div className="flex flex-col justify-between items-center">
        {/* ヘッダー部分 */}
        <h1 className="mt-4 mb-4">管理者ページ</h1>
  
        {/* ボタン部分 */}
        <div className="mb-4 flex flex gap-4">
          <Link href={"/"}>トップ</Link>
          <Link href={"/features/articles"}>記事一覧</Link>
          <Link href={"/features/articles/create"}>記事投稿</Link>
        </div>
        <SignIn/>
        <UserAvatar/>
        <SignOut/>
       
       
      </div>
    );
  };
  
  export default admin;
  