import { Router } from 'express';
import ItemsController from '../controllers/ItemsController';

const itemsallRouter = Router();
const itemsController = new ItemsController();

itemsallRouter.get(
    '/',
    itemsController.allcontent
);

export default itemsallRouter;