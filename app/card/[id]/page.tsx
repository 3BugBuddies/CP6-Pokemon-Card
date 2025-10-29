import { cookies } from "next/headers"

export default async function CardPage({ params }: { params: { id: string } }) {
  const id = params.id
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
  const data = await res.json()
  const card = data.data

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex gap-6">
        <img src={card.images.large} alt={card.name} className="w-64 rounded" />
        <div>
          <h1 className="text-2xl font-bold">{card.name}</h1>
          <p className="text-sm text-gray-600">Raridade: {card.rarity || '—'}</p>
          <p className="mt-4">{card.set?.name}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Ataques</h3>
            <ul className="list-disc ml-6">
              {card.attacks?.map((a: any) => <li key={a.name}>{a.name} — {a.damage || ''}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
