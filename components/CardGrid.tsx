"use client"
import { useState, useEffect } from "react"
import CardItem from "./CardItem"

export default function CardGrid({ cards }: { cards: any[] }) {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(favs)
  }, [])

  const toggleFavorite = (cardId: string) => {
    const updated = favorites.includes(cardId)
      ? favorites.filter((id) => id !== cardId)
      : [...favorites, cardId]
    setFavorites(updated)
    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  if (!cards || cards.length === 0) return <p className="text-center text-gray-600">Nenhum resultado encontrado.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          isFavorite={favorites.includes(card.id)}
          onToggleFavorite={() => toggleFavorite(card.id)}
        />
      ))}
    </div>
  )
}
