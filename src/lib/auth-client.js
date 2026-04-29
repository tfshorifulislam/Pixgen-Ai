import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({  
    baseURL: "https://pixgen-ai-kappa.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()