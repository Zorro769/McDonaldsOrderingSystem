module.exports = (sequelize, DataTypes) => {

    const Orders = sequelize.define("Orders",{
        status:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        totalPrice:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
        
    });
    Orders.belongsTo(sequelize.models.Users, {
        foreignKey: 'userId',
        as: 'user',
    });

    return Orders
}