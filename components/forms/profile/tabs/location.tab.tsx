import { TabProps } from '../profile.form.dto';
import { FormElement } from '@/components/ui/form/form-element';
import { toast } from 'sonner';
import { masks } from '@/utils/masks';
export const LocationTab = ({ form }: TabProps) => {
  const handleCepBlur = async (cep: string) => {
    // Remove non-numeric characters
    const cleanCep = cep.replace(/\D/g, '');

    if (cleanCep.length !== 8) return;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`
      );
      const data = await response.json();

      if (!data.erro) {
        form.setValue('cidade', data.localidade);
        form.setValue('estado', data.uf);
      }
    } catch (error) {
      toast.error('Erro ao buscar CEP');
    }
  };

  return (
    <div className="space-y-4">
      <FormElement
        type="input"
        name="cep"
        label="CEP"
        placeholder="00000-000"
        mask={masks.cep}
        onBlur={value => handleCepBlur(value)}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormElement
          type="input"
          name="cidade"
          label="Cidade"
          placeholder="Sua cidade"
        />

        <FormElement
          type="input"
          name="estado"
          label="Estado"
          placeholder="SP"
          maxLength={2}
        />
      </div>
    </div>
  );
};
