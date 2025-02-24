import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full p-4 flex items-center justify-center bg-background">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
              />
              <AvatarFallback>Dorme logo</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold">Sobre Nós</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
            <p className="text-muted-foreground">
              Conectamos famílias a consultoras especializadas em sono infantil,
              ajudando pais a garantirem noites mais tranquilas e saudáveis para
              seus bebês.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">Nossa História</h2>
            <p className="text-muted-foreground">
              Desde nossa fundação, buscamos tornar o sono uma experiência mais
              tranquila para famílias, oferecendo acesso fácil a profissionais
              capacitados.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">Nossos Valores</h2>
            <ul className="grid gap-2 text-muted-foreground">
              <li>• Bem-estar familiar</li>
              <li>• Profissionalismo e expertise</li>
              <li>• Acolhimento e empatia</li>
              <li>• Soluções personalizadas</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
