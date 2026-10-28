"use client"

import { useState } from "react"
import { KeyRound, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminAction } from "@/components/admin/client"
import { updateUserCredentialsAction } from "@/app/admin/users/actions"

export function CredentialsControl({ id, email }: { id: string; email: string }) {
  const [nextEmail, setNextEmail] = useState(email)
  const [password, setPassword] = useState("")
  const action = useAdminAction()
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        action.run(() => updateUserCredentialsAction({ id, email: nextEmail !== email ? nextEmail : undefined, password: password || undefined }), {
          success: "Credentials updated",
          onSuccess: () => setPassword(""),
        })
      }}
    >
      <div className="grid gap-1.5">
        <Label htmlFor="admin-user-email">Email used for login</Label>
        <Input id="admin-user-email" type="email" value={nextEmail} onChange={(e) => setNextEmail(e.target.value)} required />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="admin-user-password">Set new password</Label>
        <Input id="admin-user-password" type="password" autoComplete="new-password" minLength={12} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Leave blank to keep it unchanged" />
        <p className="text-xs text-muted-foreground">At least 12 characters. Other sessions are signed out after saving.</p>
      </div>
      <Button type="submit" disabled={action.pending || (nextEmail === email && !password)} className="w-fit">
        <Save /> {action.pending ? "Saving…" : "Save credentials"}
      </Button>
    </form>
  )
}
