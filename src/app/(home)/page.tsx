import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-4">
      <div className="px-4 py-2.5 bg-zinc-200 text-zinc-900 max-w-fit">
        Welcome to VoiceGen!
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="default">Button</Button>
      </div>
    </div>
  )
}
