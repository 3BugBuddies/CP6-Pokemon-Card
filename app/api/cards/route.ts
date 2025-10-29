import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get("name") || ""

  let queryString = ""

  if (name) {
    const queryValue = `name:"${name}*"`
    queryString = `q=${encodeURIComponent(queryValue)}`
    
  } else {
    queryString = "pageSize=10"
  }

  const url = `https://api.pokemontcg.io/v2/cards?${queryString}`

  const response = await fetch(url)

  if (!response.ok) {
    console.error("Falha ao buscar dados da Pokémon TCG API:", response.status)
    return NextResponse.json({ data: [] }, { status: 500 })
  }

  const data = await response.json()
  return NextResponse.json(data)
}