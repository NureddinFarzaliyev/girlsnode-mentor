interface ResponseInput {
  success: boolean;
  message: string;
  data?: any;
}

export const createResponse = (input: ResponseInput) => {
  return {
    success: input.success,
    message: input.message,
    data: input.data || null,
  };
};
