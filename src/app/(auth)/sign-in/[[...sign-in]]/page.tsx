import type { Metadata } from "next"

import { SignIn } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Sign in",
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignIn appearance={{
        elements: {
          card: "shadow-lg",
          rootBox: "mx-auto",
        },
      }}
      />
    </div>
  )
}
