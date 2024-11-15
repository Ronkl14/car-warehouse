import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const CarFeature = sequelize.define(
    'CarFeature',
    {
      car_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    { tableName: 'CarFeatures', timestamps: false }
  );

  return CarFeature;
};
