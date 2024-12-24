import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    //promptを追加して、毎回アカウントを選択させる。
    authorization:{
      params:{
        prompt:"select_account"
      }
    }
  })],
  // session:{
  //   maxAge:0,
  // },
  // cookies:{
  //   sessionToken:{
  //     options:{
  //       maxAge:undefined
  //     }
  //   }
  // },
  
  callbacks:{
    async jwt({token,account,profile}){
    if(account && profile){
      token.id = profile.id
      token.email = profile.email
      token.name = profile.name
    }
    return token
  },
  async session({session,token}){
    session.user.id = token.id as string
    session.user.email = token.email as string
    session.user.name = token.name
    return session
  }
}

}
)