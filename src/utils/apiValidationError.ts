import type { FormikErrors } from 'formik';

export const handleApiValidationError = <E extends object>(
  apiErrors: Array<{ key: string; path: string; message: string }>,
  setErrors: (errors: FormikErrors<E>) => void,
) => {
  const errors = apiErrors.reduce((acc, curr) => {
    acc[curr.key] = curr.message;
    return acc;
  }, {} as Record<string, string>);

  setErrors(errors as FormikErrors<E>);
};
