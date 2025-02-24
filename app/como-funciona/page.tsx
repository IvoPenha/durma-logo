import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen w-full p-4 flex items-center justify-center bg-background">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Como Funciona</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Passo 1: Cadastro</h2>
            <p className="text-muted-foreground">
              Registre-se em nossa plataforma e preencha informações sobre suas
              necessidades e preferências.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">Passo 2: Conexão</h2>
            <p className="text-muted-foreground">
              Baseado no seu perfil, conectamos você à consultora do sono mais
              adequada para sua família.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Passo 3: Acompanhamento
            </h2>
            <p className="text-muted-foreground">
              Agende sessões e receba orientações personalizadas para melhorar o
              sono do seu bebê.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
