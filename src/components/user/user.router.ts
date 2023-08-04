import { Router } from 'express';
import { getImage } from './user.controller';

const router: Router = Router();
// e.g. createUser request's body is validated and protected by api-key
router.get('/getImage', getImage);

export default router;
