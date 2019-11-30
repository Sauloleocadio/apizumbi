import Itens from '../models/Itens';

class ItensController {
  async store(req, res) {
    // Criação de itens

    const { id, item, pontos } = await Itens.create(req.body);

    return res.json({
      id,
      item,
      pontos,
    });
  }
}
export default new ItensController();
