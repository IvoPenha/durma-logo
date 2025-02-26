import { TabProps } from '../profile.form.dto';
import { FormElement } from '@/components/ui/form/form-element';
import { masks } from '@/utils/masks';

export const PersonalInfoTab = ({ form }: TabProps) => (
  <div className="space-y-4">
    <FormElement
      type="image"
      name="fotoPerfil"
      label="Foto de Perfil"
      description="Escolha uma foto profissional. Tamanho máximo de 5MB."
      accept="image/*"
      avatarClassName="w-20 h-20"
    />

    <FormElement
      type="input"
      name="nome"
      label="Nome Completo"
      placeholder="Seu nome completo"
    />

    <FormElement
      type="input"
      name="cpf"
      label="CPF"
      placeholder="000.000.000-00"
      mask={masks.cpf}
    />

    <FormElement
      type="input"
      name="email"
      label="Email"
      inputType="email"
      placeholder="seu@email.com"
    />

    <FormElement
      type="input"
      name="telefone"
      label="Telefone"
      placeholder="(00) 00000-0000"
      mask={masks.phone}
    />
  </div>
);
