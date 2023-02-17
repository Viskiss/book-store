import type { FormikErrors } from 'formik';

export type ErrorType = Array<{ key: string; path: string; message: string }>;

export const handlerApiValidationError = <E extends object>(
  apiErrors: Array<{ key: string; path: string; message: string }>,
  setErrors: (errors: FormikErrors<E>) => void,
) => {
  const errors = apiErrors.reduce((acc, curr) => {
    acc[curr.key] = curr.message;
    return acc;
  }, {} as Record<string, string>);

  setErrors(errors as FormikErrors<E>);
};

export const matchError = (error: { error: ErrorType[]; message: string }) => {
  if (error?.error && error.message === 'ValidationError') {
    return true;
  }
  return false;
};
