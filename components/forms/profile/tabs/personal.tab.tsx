import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input" 
import { TabProps } from "../profile.form.dto"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const PersonalInfoTab = ({ form }: TabProps) => (
    <div className="space-y-4">
        <FormField
        control={form.control}
        name="fotoPerfil"
        render={({ field: { value, onChange }, ...field }) => (
          <FormItem>
            <FormLabel>Foto de Perfil</FormLabel>
            <div className="flex items-center gap-4">
              {value && (
                <Avatar className="w-20 h-20">
                  <AvatarImage 
                    src={value instanceof FileList ? URL.createObjectURL(value[0]) : value} 
                    alt="Foto de perfil" 
                  />
                  <AvatarFallback>{value instanceof FileList ? value[0].name.charAt(0) : ''}</AvatarFallback>
                </Avatar>
              )}
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onChange(e.target.files)}
                  {...field}
                />
              </FormControl>
            </div>
            <FormDescription>
              Escolha uma foto profissional. Tamanho máximo de 5MB.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="nome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome Completo</FormLabel>
            <FormControl>
              <Input placeholder="Seu nome completo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="cpf"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CPF</FormLabel>
            <FormControl>
              <Input 
                placeholder="000.000.000-00" 
                {...field}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1')
                  field.onChange(value)
                }}
                maxLength={14}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="seu@email.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  
      <FormField
        control={form.control}
        name="telefone" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input placeholder="(00) 00000-0000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )