import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Página Não Encontrada</h2>
        <Link 
          href="/" 
          className="px-5 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 transition-colors shadow-sm"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  )
}