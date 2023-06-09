import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().required(),
  player_id: yup.string().nullable().required(),
});
