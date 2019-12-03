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

  static associate(models) {
    this.belongsTo(models.Sobreviventes, {
      foreignKey: 'itens_id',
      as: 'itensrelacionamento',
    });
  }
}

export default Itens;
