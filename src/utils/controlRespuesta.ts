import { Response } from 'express';

export const rtaEsperada = (res: Response, data: any, statusCode: number = 200) => {
  return res.status(statusCode).json({
    ok: true,
    data,
  });
};

export const rtaError = (res: Response, error: any, statusCode: number = 500) => {
  return res.status(statusCode).json({
    ok: false,
    mensaje: error.message || 'Ocurrió un error',
  });
};