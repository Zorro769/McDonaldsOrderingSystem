module.exports = (sequelize, DataTypes) =>{

    const OrderItems = sequelize.define("OrderItems",{
        quantity:{
            type: DataTypes.INTEGER, 
            allowNull: false,
        }
    });
    OrderItems.belongsTo(sequelize.models.Orders, {
        foreignKey: 'orderId', 
        as: 'order',
    });
    OrderItems.belongsTo(sequelize.models.MenuItems, {
        foreignKey: 'menuItemId', 
        as: 'menuItem',
    });

    return OrderItems;
}