import { Response } from 'express';

export const controlRespuesta = (
  res: Response,
  statusCode: number,
  success: boolean,
  data: any,
  message?: string
) => {
  res.status(statusCode).json({
    success,
    message,
    data
  });
};