import {Router} from 'express';
import {finishPurchaseController} from '../controllers/ticketController.js';

const router = Router();

router.post('/finishPurchase/:idUser', finishPurchaseController);

export default router;