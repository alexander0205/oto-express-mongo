import { Request, Response } from 'express';
import User from '../models/user.model';

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send({ message: 'Error creating user', error });
    }
  },

  async getUser(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(user);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching user', error });
    }
  }
};
