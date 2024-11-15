import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Car = sequelize.define(
    'Car',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { tableName: 'Cars' }
  );

  Car.associate = (models) => {
    Car.belongsTo(models.Model, { foreignKey: 'model_id', as: 'model' });
  };

  return Car;
};