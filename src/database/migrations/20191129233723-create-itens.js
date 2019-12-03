module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pontos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('itens');
  },
};
