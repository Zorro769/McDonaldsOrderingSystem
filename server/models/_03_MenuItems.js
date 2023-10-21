module.exports = (sequelize, DataTypes) =>{

    const MenuItems = sequelize.define("MenuItems",{
        name:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        price:{
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return MenuItems;
}