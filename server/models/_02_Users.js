module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users",{
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        }

    });
    Users.belongsTo(sequelize.models.Addresses, {
        foreignKey: 'addressId', 
        as: 'address', 
    });

    return Users
}