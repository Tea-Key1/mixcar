import { createClient } from "contentful"

export const client = createClient({
    space: 'gdenp27geme8',
    accessToken: process.env.NEXT_PUBLIC_API_KEY
})