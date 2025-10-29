"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      router.push("/search")
    } else {
      alert("Usuário ou senha inválidos")
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input id="password" label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Entrar</Button>
      </form>
      <p className="text-sm text-gray-600 mt-3">Use <b>teste@email.com</b> / <b>123456</b></p>
    </div>
  )
}
