'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Progress } from '@radix-ui/react-progress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ConsultorFormValues } from './profile.form.dto';
import { ProfessionalInfoTab } from './tabs/professional.tab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationTab } from './tabs/location.tab';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { PersonalInfoTab } from './tabs/personal.tab';
import { consultorFormSchema } from './profile.form.schema';
import { useEffect } from 'react';

export default function ConsultoraPerfilForm({
  defaultValues,
}: {
  defaultValues: ConsultorFormValues;
}) {
  const form = useForm<ConsultorFormValues>({
    resolver: zodResolver(consultorFormSchema),
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  async function onSubmit(data: ConsultorFormValues) {
    try {
      console.log(data);
      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar perfil. Tente novamente.');
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Perfil da Consultora</h1>
          <div className="relative w-[60px] h-[60px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold">65%</span>
            </div>
            <Progress value={65} className="h-full w-full rounded-full" />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs defaultValue="personal" className="flex space-x-8 h-full">
              <TabsList className="flex-col h-auto space-y-2 bg-transparent justify-start min-h-[500px]">
                <TabsTrigger value="personal" className="w-48 justify-start">
                  Informações Pessoais
                </TabsTrigger>
                <TabsTrigger value="location" className="w-48 justify-start">
                  Localização
                </TabsTrigger>
                <TabsTrigger
                  value="professional"
                  className="w-48 justify-start"
                >
                  Informações Profissionais
                </TabsTrigger>
              </TabsList>

              <div className="flex-1">
                <TabsContent value="personal">
                  <PersonalInfoTab form={form} />
                </TabsContent>

                <TabsContent value="location">
                  <LocationTab form={form} />
                </TabsContent>

                <TabsContent value="professional">
                  <ProfessionalInfoTab form={form} />
                </TabsContent>
              </div>
            </Tabs>

            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Salvar Perfil
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
