import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Model = sequelize.define(
    'Model',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'Models' }
  );

  Model.associate = (models) => {
    Model.hasMany(models.Car, { foreignKey: 'model_id', as: 'cars' });
  };

  return Model;
};
