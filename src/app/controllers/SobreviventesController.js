import * as Yup from 'yup';
import Sobreviventes from '../models/Sobreviventes';

class SobreviventesController {
  async store(req, res) {
    // Criação de sobreviventes
    const schema = Yup.object().shape({
      itens_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Sobrevivente não tem item vinculado a sua mochila ' });
    }

    const {
      id,
      itens_id,
      nome,
      idade,
      sexo,
      latitude,
      longitude,
      infectado,
      reporteinfectado,
    } = await Sobreviventes.create(req.body);

    return res.json({
      id,
      itens_id,
      nome,
      idade,
      sexo,
      latitude,
      longitude,
      infectado,
      reporteinfectado,
    });
  }

  async update(req, res) {
    // Update latitude e longitude e reporteinfectado
    const {
      id,
      latitude,
      longitude,
      reporteinfectado,
      infectado,
    } = await Sobreviventes.update(req.body);

    if (reporteinfectado >= 3) {
      return res.json({ infectado: true });
    }

    return res.json({
      id,
      latitude,
      longitude,
      reporteinfectado,
      infectado,
    });
  }
}

export default new SobreviventesController();
