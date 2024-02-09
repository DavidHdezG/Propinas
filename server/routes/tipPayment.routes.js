import { Router } from "express";
import {getTipPayment,createTipPayment,getTipPayments} from "../controllers/tipPayment.controller.js";
import { getTotalTips, getTotalMoney } from "../controllers/values.controller.js";
const router = Router();

router.get('/', getTipPayments);
router.post('/', createTipPayment);
router.get('/totalTips', getTotalTips);
router.get('/totalMoney', getTotalMoney);
router.get('/:id', getTipPayment);

export default router;