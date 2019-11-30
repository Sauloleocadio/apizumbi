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
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('itens');
  },
};
