import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { TabProps } from "../profile.form.dto"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"

export const LocationTab = ({ form }: TabProps) => {
    const handleCepBlur = async (cep: string) => {
      // Remove non-numeric characters
      const cleanCep = cep.replace(/\D/g, '')
      
      if (cleanCep.length !== 8) return
  
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
        const data = await response.json()
        
        if (!data.erro) {
          form.setValue('cidade', data.localidade)
          form.setValue('estado', data.uf)
        }
      } catch (error) {
        toast.error("Erro ao buscar CEP")
      }
    }
  
    return (
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input 
                  placeholder="00000-000" 
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, '')
                      .replace(/(\d{5})(\d)/, '$1-$2')
                      .replace(/(-\d{3})\d+?$/, '$1')
                    field.onChange(value)
                  }}
                  onBlur={() => handleCepBlur(field.value)}
                  maxLength={9}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="cidade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Sua cidade" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="estado"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder="SP" maxLength={2} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    )
  }
   