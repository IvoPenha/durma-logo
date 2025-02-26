export const masks = {
    cpf: {
      format: (value: string) => value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1'),
      maxLength: 14
    },
    phone: {
      format: (value: string) => value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1'),
      maxLength: 15
    },
    cep: {
        format: (value: string) => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1');
      },
    maxLength: 9,
  },
};
