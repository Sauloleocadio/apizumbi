import Sequelize, { Model } from 'sequelize';

class Sobreviventes extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        sexo: Sequelize.CHAR,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
        infectado: Sequelize.BOOLEAN,
        reporteinfectado: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Sobreviventes;
