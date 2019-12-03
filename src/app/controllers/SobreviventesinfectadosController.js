import SobreviventesInfectados from '../models/Sobreviventes';

class SobreviventesinfectadosController {
  async index(req, res) {
    // Listagem de infectados

    const listainfectados = await SobreviventesInfectados.findAll({
      where: { infectado: true },
    });

    return res.json(listainfectados);
  }
}
export default new SobreviventesinfectadosController();
