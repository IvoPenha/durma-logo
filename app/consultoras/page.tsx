"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"

interface Consultora {
  id: string
  nome: string
  foto: string
  avaliacao: number
  totalAvaliacoes: number
  precoMedio: number
  cidade: string
  estado: string
  tempoExperiencia: string
  especialidades: string[]
}

// Simula uma chamada à API
const fetchConsultoras = async (page: number) => {
  // Aqui você substituiria por uma chamada real à API
  const consultoras: Consultora[] = [
    {
      id: "1",
      nome: "Dra. Ana Silva",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      avaliacao: 4.8,
      totalAvaliacoes: 156,
      precoMedio: 450,
      cidade: "São Paulo",
      estado: "SP",
      tempoExperiencia: "8 anos",
      especialidades: ["Recém-nascidos", "Bebês", "Crianças"]
    },
    {
      id: "2",
      nome: "Dra. Maria Santos",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      avaliacao: 4.9,
      totalAvaliacoes: 203,
      precoMedio: 500,
      cidade: "Rio de Janeiro",
      estado: "RJ",
      tempoExperiencia: "10 anos",
      especialidades: ["Gêmeos", "Bebês prematuros"]
    },
    // Adicione mais consultoras conforme necessário
  ]
  
  return consultoras
}

export default function ConsultorasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["consultoras", searchTerm],
    queryFn: ({ pageParam = 1 }) => fetchConsultoras(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1
    },
    initialData: undefined,
    initialPageParam: 1,
  })

  if (inView && hasNextPage && !isFetchingNextPage) {
    fetchNextPage()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Encontre sua Consultora</h1>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Buscar por nome ou localização..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.pages.map((group, i) => (
          group.map((consultora, index) => (
            <Link 
              key={consultora.id}
              href={`/consultoras/${consultora.id}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={consultora.foto}
                    alt={consultora.nome}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">
                      {consultora.nome}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400 mt-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{consultora.avaliacao}</span>
                      <span className="text-muted-foreground text-sm">
                        ({consultora.totalAvaliacoes} avaliações)
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{consultora.cidade}, {consultora.estado}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{consultora.tempoExperiencia} de experiência</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">A partir de </span>
                    <span className="font-semibold text-lg">
                      R$ {consultora.precoMedio}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {consultora.especialidades.slice(0, 2).map((esp, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-xs"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ))}
      </div>

      <div
        ref={ref}
        className="mt-8 text-center"
      >
        {isFetchingNextPage && (
          <div className="animate-pulse text-muted-foreground">
            Carregando mais consultoras...
          </div>
        )}
      </div>
    </div>
  )
}