"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useSignup } from "./hooks/useSignup"
import { useRouter } from "next/navigation"

export function SignupForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("staff")

    const { mutate: signupUser, isPending, isSuccess } = useSignup()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        signupUser({ email, name, password, role })
    }
    if (isSuccess)
        router.push("/login")

    return (
        <div className={cn("flex flex-col gap-8", className)} {...props}>
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl">
                <CardHeader>
                    <CardTitle className="text-3xl mb-2">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your phone number below to signup with your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-12">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-6 grid-cols-2">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="role">Role</Label>
                                        <select
                                            id="role"
                                            className="w-full border border-zinc-300 dark:border-zinc-800 rounded-md p-2 dark:bg-zinc-900 text-sm"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                        >
                                            <option value="staff">Staff</option>
                                            <option value="host">Host</option>
                                        </select>
                                    </div>
                                    {/* <div>
                                        <Label htmlFor="email">Phone</Label>
                                        <div className="flex">
                                            <Input
                                                className="w-14 mr-2"
                                                id="countryCode"
                                                type="text"
                                                value={countryCode}
                                            />
                                            <Input
                                                id="phone"
                                                type="phone"
                                                placeholder="1234567890"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            href="forgot-password"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="********"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <Button type="submit" className="w-full" onClick={handleSubmit} disabled={isPending}>
                                    {isPending ? 'Signing up...' : 'Sign Up'}
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Login with Google
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </div>
        </div>
    )
}
