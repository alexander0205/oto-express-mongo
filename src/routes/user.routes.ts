import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateUser } from '../middlewares/validation.middleware';

const router = Router();

router.post('/users', validateUser, UserController.createUser);
router.get('/users/:id', UserController.getUser);

export default router;
