'use client';

import ConsultoraPerfilForm from '@/components/forms/profile/profile.form';
import { ConsultorFormValues } from '@/components/forms/profile/profile.form.dto';
import { useEffect, useState } from 'react';

async function getMe() {
  return {
    id: '1',
    cep: '01001000',
    cpf: '12345678900',
    email: 'ana.silva@gmail.com',
    telefone: '11999999999',
    nome: 'Dra. Ana Silva',
    tempoExperiencia: '3-5',
    fotoPerfil:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    avaliacao: 4.8,
    totalAvaliacoes: 156,
    precoBase: 300,
    precoMedio: 450,
    cidade: 'São Paulo',
    estado: 'SP',
    especialidades: ['Recém-nascidos', 'Bebês', 'Crianças'],
    biografia:
      'Especialista em sono infantil com mais de 8 anos de experiência. Formada em Psicologia pela USP com especialização em Desenvolvimento Infantil.',
    certificacoes: [
      'Certificação Internacional em Consultoria do Sono Infantil',
      'Especialização em Desenvolvimento Infantil',
      'Pós-graduação em Psicologia Pediátrica',
    ],
  };
}

export default function ConsultoraPerfilPage() {
  const [defaultValues, setDefaultValues] =
    useState<ConsultorFormValues | null>(null);

  async function fetchInitialData() {
    const me = await getMe();
    setDefaultValues(me as unknown as ConsultorFormValues);
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  if (!defaultValues) {
    return <div>Loading...</div>; // Handle loading state
  }

  return <ConsultoraPerfilForm defaultValues={defaultValues} />;
}
