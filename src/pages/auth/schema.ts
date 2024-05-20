import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
const usernameRegExp = /^[^\d]+$/;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Обов’язкове поле')
    .matches(usernameRegExp, 'Ім’я користувача не повинно містити цифри')
    .min(2, 'Потрібно щонайменше 2 символи'),

  email: yup.string().required('Обов’язкове поле').matches(regExpEmail, 'Невірний формат пошти'),

  password: yup
    .string()
    .required('Обов’язкове поле')

    .min(6, 'Пароль повинен містити принаймні 6 символів')

    .test('uppercase', 'Пароль повинен містити принаймні одну велику літеру', (value) =>
      /[A-Z]/.test(value)
    )

    .test('digit', 'Пароль повинен містити принаймні одну цифру', (value) => /\d/.test(value))

    .test('specialChar', 'Пароль повинен містити принаймні один спеціальний символ', (value) =>
      /[!@#$%^&*()_+{}|:"<>?~`]/.test(value)
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Паролі не співпадають')
    .required('Обов’язкове поле')
});
