namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      
      
      NEXTAUTH_SECRET: string
      NEXTAUTH_URL: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      DATABASE_URL: string
      SHADOW_DATABASE_URL: string
      
    }
  }