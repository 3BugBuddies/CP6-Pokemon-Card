"use client"
import { useEffect, useState } from "react"
import CardGrid from "../../components/CardGrid"

export default function FavoritesPage() {
  const [cards, setCards] = useState<any[]>([])

  // Função para buscar e carregar os favoritos
  const loadFavorites = () => {
    // 1. Lê os IDs dos favoritos do localStorage
    const favs: string[] = JSON.parse(localStorage.getItem("favorites") || "[]")
    
    if (!favs.length) {
      setCards([])
      return
    }
    
    // 2. Função assíncrona para buscar os dados das cartas
    const fetchFavorites = async (ids: string[]) => {
      // Faz a requisição para a API usando os IDs
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
    // Carrega os favoritos na montagem inicial
    loadFavorites()

    // Adiciona um listener para recarregar sempre que a janela ganhar foco.
    // Isso garante que a lista seja atualizada ao voltar da página de busca.
    window.addEventListener("focus", loadFavorites)

    // Função de limpeza: remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("focus", loadFavorites)
    }
  }, []) // O efeito é configurado apenas na montagem

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <CardGrid cards={cards} />
    </div>
  )
}