import * as yup from 'yup';

export const registerScheme = yup.object({
    name: yup.string().required('O nome é obrigatório').min(4, 'O Nome deve ter pelo menos 4 caracteres'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup.string().required('A Senha é obrigatória').min(6, 'A Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup.string().required('A Senha é obrigatória').oneOf([yup.ref('password')], 'As Senhas não coincidem'),
    phone: yup.string().required('Telefone é obrigatório').matches(/^\d{11}$/, 'O Telefone deve ter 11 dígitos (DDD + número)'),
});