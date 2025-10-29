"use client"
import { useEffect, useState } from "react"
import CardGrid from "../../components/CardGrid"

export default function FavoritesPage() {
  const [cards, setCards] = useState<any[]>([])

  const loadFavorites = () => {
    const favs: string[] = JSON.parse(localStorage.getItem("favorites") || "[]")
    
    if (!favs.length) {
      setCards([])
      return
    }
    
    const fetchFavorites = async (ids: string[]) => {
      const res = await fetch(`https://api.pokemontcg.io/v2/cards?ids=${ids.join(",")}`)
      if (res.ok) {
        const data = await res.json()
        setCards(data.data || [])
      } else {
        setCards([])
      }
    }
    fetchFavorites(favs)
  }

  useEffect(() => {

    loadFavorites()


    window.addEventListener("focus", loadFavorites)


    return () => {
      window.removeEventListener("focus", loadFavorites)
    }
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <CardGrid cards={cards} />
    </div>
  )
}