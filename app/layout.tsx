import "./globals.css"
import Link from "next/link"
import { cookies } from "next/headers"

export const metadata = {
  title: "Pokémon TCG Explorer",
  description: "Explore e favorite cartas Pokémon",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const isLogged = !!cookieStore.get("user_session")

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-red-200 text-gray-800">
        <div className="max-w-6xl mx-auto p-6">
          <header className="flex justify-between items-center p-4 bg-white/80 rounded-md shadow-sm">
            <div>
              <h1 className="text-2xl font-bold">Pokémon TCG Explorer</h1>
              <p className="text-sm text-gray-600">Busque e favorite cartas do Pokémon TCG</p>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/search" className="hover:underline">Pokemon</Link>
              <Link href="/favorites" className="hover:underline">Favoritos</Link>
              {isLogged ? (
                <form action="/api/auth/logout" method="POST">
                  <button className="px-3 py-1 bg-red-500 text-white rounded">Sair</button>
                </form>
              ) : (
                <Link href="/" className="px-3 py-1 bg-yellow-400 rounded">Login</Link>
              )}
            </nav>
          </header>

          <main className="mt-8">
            {children}
          </main>

          <footer className="text-center mt-10 text-sm text-gray-700 flex justify-between items-center p-4 bg-white/80 rounded-md shadow-sm">
            RM 565834 Mariana Inoue RM 563925 Gabriel Nogueira Peixoto RM 566154 Giovanna Neri dos Santos 
          </footer>
        </div>
      </body>
    </html>
)
}