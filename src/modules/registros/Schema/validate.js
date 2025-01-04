import * as yup from 'yup';

export const validar=yup.object({
  nombre:yup.string().required(),
  correo:yup.string().email().required()
})
