import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BabyIcon, HeartPulseIcon, SearchIcon, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import HeroImage from '@/public/bebe.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-background min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
                A maioria das consultorias de sono infantil não resolvem o
                problema.
                <br />
                <span className="text-foreground">Elas apenas dão dicas.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Apenas o Dorme Logo transforma sua rotina em ações guiadas com
                resultados claros para o sono do seu bebê.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Agendar Consulta
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Ver Como Funciona
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={HeroImage}
                  alt="Bebê dormindo tranquilamente"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                <p className="text-3xl font-bold text-orange-600">98%</p>
                <p className="text-sm text-muted-foreground">
                  dos bebês dormindo melhor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossa Plataforma</h2>
            <p className="text-xl text-muted-foreground">
              Conectando você aos melhores especialistas em sono infantil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-xl">
              <SearchIcon className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Busca Inteligente</h3>
              <p className="text-muted-foreground">
                Encontre a consultora ideal baseada na idade do seu bebê e suas
                necessidades específicas
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-xl">
              <HeartPulseIcon className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Profissionais Verificadas
              </h3>
              <p className="text-muted-foreground">
                Todas as consultoras são certificadas e passam por um rigoroso
                processo de verificação
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-xl">
              <BabyIcon className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Acompanhamento Completo
              </h3>
              <p className="text-muted-foreground">
                Suporte personalizado durante todo o processo de consultoria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece sua jornada para noites tranquilas
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de famílias que já transformaram o sono de seus
            bebês com o Dorme Logo
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Encontrar Consultora
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cadastro/consultora">Sou Consultora</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
