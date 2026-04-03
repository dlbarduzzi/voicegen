import type { Metadata } from "next"

import { SignUp } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Sign up",
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp appearance={{
        elements: {
          card: "shadow-lg",
          rootBox: "mx-auto",
        },
      }}
      />
    </div>
  )
}
