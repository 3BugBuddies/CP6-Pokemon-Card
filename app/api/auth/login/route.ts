import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (email === "teste@email.com" && password === "123456") {
    const res = NextResponse.json({ success: true })
    res.cookies.set("user_session", "active", { httpOnly: true, path: "/" })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
