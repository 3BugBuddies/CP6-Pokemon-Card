"use client"
import { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import CardGrid from "../../components/CardGrid"

export default function SearchPage() {
  const [search, setSearch] = useState("")
  const [cards, setCards] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const name = encodeURIComponent(search.trim())
    const res = await fetch(`/api/cards?name=${name}`)
    if (res.ok) {
      const data = await res.json()
      setCards(data.data || [])
    } else {
      setCards([])
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSearch} className="flex gap-2 mb-8 w-full max-w-xl">
        <Input
          id="search"
          placeholder="Digite o nome do Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" loading={loading}>Buscar</Button>
      </form>

      <div className="w-full">
        <CardGrid cards={cards} />
      </div>
    </div>
  )
}