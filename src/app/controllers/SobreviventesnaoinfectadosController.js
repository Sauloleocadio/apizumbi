import SobreviventesnaoInfectados from '../models/Sobreviventes';

class SobreviventesnaoinfectadosController {
  async index(req, res) {
    // Listagem de não infectados

    const listanaoinfectados = await SobreviventesnaoInfectados.findAll({
      where: { infectado: false },
    });

    return res.json(listanaoinfectados);
  }
}
export default new SobreviventesnaoinfectadosController();
