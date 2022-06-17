import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { User } from "@prisma/client";
import { Session } from "next-auth";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../lib/prisma";
import {JWT} from "next-auth/jwt"


export type SessionArg= {
    session: Session
    user: User
    token: JWT
}

export type UserSession = {
    userId: string

} & Session


export const authOptions:any= {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        profile(profile){
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        }
      }),
    ],
    session: {
        jwt:false,
        strategy: "database"
    },
    database: process.env.DATABASE_URL,

   
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    callbacks: {session: ({session, user}:SessionArg) => ({
        ...session,
        user: {
            ...session.user,
            id: user.id,
            
        }
    })
}
       
  };

  export default NextAuth(authOptions);


//   callbacks: {
//     session: ({session, user}) => ({
//         ...session,
//         user: {
//             ...session.user,
//             id: user.id,
            
//         }
//     })
// }



// session: async ({session, user}: SessionArg) => {
//     session.userId = user.id
//     return Promise.resolve(session as UserSession)
//    },
// },