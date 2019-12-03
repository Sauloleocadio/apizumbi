import { Router } from 'express';

import SobreviventesController from './app/controllers/SobreviventesController';
import ItensController from './app/controllers/ItensController';
import SobreviventesinfectadosController from './app/controllers/SobreviventesinfectadosController';
import SobreviventesnaoinfectadosController from './app/controllers/SobreviventesnaoinfectadosController';

const routes = new Router();

routes.post('/sobreviventes', SobreviventesController.store);
routes.put(`/sobreviventes/:id`, SobreviventesController.update);

routes.get('/sobreviventesinfectados', SobreviventesinfectadosController.index);

routes.get(
  '/sobreviventesnaoinfectados',
  SobreviventesnaoinfectadosController.index
);

routes.post('/itens', ItensController.store);

export default routes;
