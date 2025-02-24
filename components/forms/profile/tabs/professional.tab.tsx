import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { TabProps } from "../profile.form.dto";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ProfessionalInfoTab = ({ form }: TabProps) => (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="biografia"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Biografia</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Conte um pouco sobre sua experiência e formação..."
                className="h-32"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Mínimo de 100 caracteres, máximo de 1000.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="tempoExperiencia"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tempo de Experiência</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tempo de experiência" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1-2">1-2 anos</SelectItem>
                <SelectItem value="3-5">3-5 anos</SelectItem>
                <SelectItem value="5-10">5-10 anos</SelectItem>
                <SelectItem value="10+">Mais de 10 anos</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="precoBase"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preço Base da Consulta (R$)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="450" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="especialidades"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Especialidades</FormLabel>
            <FormControl>
              <Input
                placeholder="Ex: Recém-nascidos, Gêmeos, Bebês prematuros"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Separe as especialidades por vírgula
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="certificacoes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Certificações</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Liste suas principais certificações e formações..."
                className="h-32"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )