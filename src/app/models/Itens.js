import Sequelize, { Model } from 'sequelize';

class Itens extends Model {
  static init(sequelize) {
    super.init(
      {
        item: Sequelize.STRING,
        pontos: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Itens;
