"use client"
import Link from "next/link"

interface CardItemProps {
  card: any
  isFavorite: boolean
  onToggleFavorite: () => void
}

export default function CardItem({ card, isFavorite, onToggleFavorite }: CardItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <Link href={`/card/${card.id}`}>
        <img src={card.images.small} alt={card.name} className="rounded-md" />
      </Link>
      <h3 className="font-semibold mt-2">{card.name}</h3>
      <p className="text-sm text-gray-500">{card.set?.name}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={onToggleFavorite}
          className={`text-sm px-3 py-1 rounded ${isFavorite ? 'bg-yellow-400 text-white' : 'bg-gray-200'}`}
        >
          {isFavorite ? "★ Favorito" : "☆ Favoritar"}
        </button>
        <Link href={`/card/${card.id}`} className="px-3 py-1 bg-red-500 text-white rounded">Detalhes</Link>
      </div>
    </div>
  )
}
