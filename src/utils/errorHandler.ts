interface MongooseValidationError {
  errors?: {
    [key: string]: { message: string };
  };
  message: string;
  errorResponse?: {
    keyValue?: Record<string, any>;
  };
}

export const errorHandler = (err: MongooseValidationError): string[] => {
  const errors: string[] = [];

  if (err.errors) {
    for (const key in err.errors) {
      if (err.errors[key].message) {
        errors.push(err.errors[key].message);
      }
    }
  } else {
    if (err.message.includes('duplicate key') && err.errorResponse?.keyValue) {
      errors.push(`${JSON.stringify(err.errorResponse.keyValue)} already exists`);
    } else {
      errors.push(err.message);
    }
  }

  return errors;
};