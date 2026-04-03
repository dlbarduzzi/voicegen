import type { Metadata } from "next"

import { OrganizationList } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Organization",
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <OrganizationList
        hidePersonal={true}
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        appearance={{
          elements: {
            card: "shadow-lg",
            rootBox: "mx-auto",
          },
        }}
      />
    </div>
  )
}
