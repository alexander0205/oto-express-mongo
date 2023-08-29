import { Request, Response, NextFunction } from 'express';
import { UserInterface } from '../interfaces/user.interface';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user: UserInterface = req.body;

  if (!user.name || typeof user.name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (!user.email || typeof user.email !== 'string') {
    return res.status(400).json({ error: 'Invalid email' });
  }

  next();
};
