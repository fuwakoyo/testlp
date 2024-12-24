import { NextResponse } from "next/server";
import { auth } from "./app/auth";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT } from "./route";


export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const email = req.auth?.user?.email; // sessionのemailを取り出す
    
    //console.log(req)
    //console.log(req.auth)
    //console.log('pathname', nextUrl.pathname);
    //console.log('isLoggedIn', isLoggedIn);
    //console.log('email', email); // emailを表示
    //console.log('userId',req.auth?.user.id)

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    
    if (isApiAuthRoute) {
        return null;
      }

    if (isAuthRoute) {
        if (!isLoggedIn || email !== "fuwakoyo@gmail.com") {
          return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
         return null; 
      }
  });
  
  


// export const config = {
//     matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
//   };

  export const config = {
    matcher: [
      '/((?!.+\\.[\\w]+$|_next).*)',  // 静的ファイルや _next を除外
      '/features/:path*',             // /features 配下のすべてのページに適用
      '/(api|trpc)(.*)'               // /api または /trpc 配下に適用
    ],
  };