import { TabProps } from '../profile.form.dto';
import { FormElement } from '@/components/ui/form/form-element';

export const ProfessionalInfoTab = ({ form }: TabProps) => (
  <div className="space-y-4">
    <FormElement
      type="textarea"
      name="biografia"
      label="Biografia"
      placeholder="Conte um pouco sobre sua experiência e formação..."
      className="h-32"
      description="Mínimo de 100 caracteres, máximo de 1000."
    />

    <FormElement
      type="select"
      name="tempoExperiencia"
      label="Tempo de Experiência"
      placeholder="Selecione o tempo de experiência"
      options={[
        { value: '1-2', label: '1-2 anos' },
        { value: '3-5', label: '3-5 anos' },
        { value: '5-10', label: '5-10 anos' },
        { value: '10+', label: 'Mais de 10 anos' },
      ]}
    />

    <FormElement
      type="input"
      inputType="number"
      name="precoBase"
      label="Preço Base da Consulta (R$)"
      placeholder="450"
    />

    <FormElement
      type="input"
      name="especialidades"
      label="Especialidades"
      placeholder="Ex: Recém-nascidos, Gêmeos, Bebês prematuros"
      description="Separe as especialidades por vírgula"
    />

    <FormElement
      type="textarea"
      name="certificacoes"
      label="Certificações"
      placeholder="Liste suas principais certificações e formações..."
      className="h-32"
    />
  </div>
);
