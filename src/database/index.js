import Sequelize from 'sequelize';

import Sobreviventes from '../app/models/Sobreviventes';
import Itens from '../app/models/Itens';

import databaseConfig from '../config/database';

const models = [Sobreviventes, Itens];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
