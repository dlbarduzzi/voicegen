import { env } from "@/lib/env/client"

export const siteConfig = {
  url: env.NEXT_PUBLIC_APP_URL,
  name: "VoiceGen",
  description: "Create, customize, and scale realistic voices with AI.",
}
