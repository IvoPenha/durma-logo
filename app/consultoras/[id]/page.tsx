"use client"

import { Star, MapPin, Clock, Award, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Dados mockados para exemplo
const consultora = {
  id: "1",
  nome: "Dra. Ana Silva",
  foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  avaliacao: 4.8,
  totalAvaliacoes: 156,
  precoMedio: 450,
  cidade: "São Paulo",
  estado: "SP",
  tempoExperiencia: "8 anos",
  especialidades: ["Recém-nascidos", "Bebês", "Crianças"],
  biografia: "Especialista em sono infantil com mais de 8 anos de experiência. Formada em Psicologia pela USP com especialização em Desenvolvimento Infantil.",
  certificacoes: [
    "Certificação Internacional em Consultoria do Sono Infantil",
    "Especialização em Desenvolvimento Infantil",
    "Pós-graduação em Psicologia Pediátrica"
  ],
  avaliacoes: [
    {
      id: 1,
      nome: "Marina Costa",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      avaliacao: 5,
      data: "2024-03-15",
      comentario: "Excelente profissional! Nos ajudou muito com nossa filha de 8 meses. Em duas semanas já vimos resultados impressionantes."
    },
    {
      id: 2,
      nome: "Pedro Santos",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      avaliacao: 4.5,
      data: "2024-03-10",
      comentario: "Muito atenciosa e profissional. O método funcionou perfeitamente com nosso bebê."
    }
  ],
  servicos: [
    {
      nome: "Consultoria Completa",
      preco: 450,
      duracao: "2 semanas",
      descricao: "Acompanhamento personalizado por 2 semanas com plano de sono detalhado"
    },
    {
      nome: "Consultoria Express",
      preco: 250,
      duracao: "3 dias",
      descricao: "Orientações básicas e plano de sono simplificado"
    }
  ]
}

export default function ConsultoraDetalhesPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Avatar className="w-32 h-32">
            <AvatarImage src={consultora.foto} alt={consultora.nome} />
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{consultora.nome}</h1>
            
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-medium text-lg">{consultora.avaliacao}</span>
              <span className="text-muted-foreground">
                ({consultora.totalAvaliacoes} avaliações)
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{consultora.cidade}, {consultora.estado}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>{consultora.tempoExperiencia} de experiência</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {consultora.especialidades.map((esp, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm"
                >
                  {esp}
                </span>
              ))}
            </div>

            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="sobre" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sobre">Sobre</TabsTrigger>
          <TabsTrigger value="servicos">Serviços</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
        </TabsList>

        <TabsContent value="sobre" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Biografia</h3>
              <p className="text-muted-foreground">{consultora.biografia}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Certificações</h3>
              <div className="space-y-3">
                {consultora.certificacoes.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="servicos">
          <div className="grid md:grid-cols-2 gap-6">
            {consultora.servicos.map((servico, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{servico.nome}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{servico.duracao}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{servico.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">R$ {servico.preco}</span>
                    <Button>Selecionar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="avaliacoes">
          <div className="space-y-6">
            {consultora.avaliacoes.map((avaliacao) => (
              <Card key={avaliacao.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={avaliacao.foto} alt={avaliacao.nome} />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{avaliacao.nome}</h4>
                        <span className="text-sm text-muted-foreground">
                          {new Date(avaliacao.data).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < avaliacao.avaliacao ? "fill-current" : ""}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{avaliacao.comentario}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}