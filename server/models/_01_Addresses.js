module.exports = (sequelize, DataTypes) =>{

    const Addresses = sequelize.define("Addresses",{
        city:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        street:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        houseNumber:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
    });

    return Addresses;
}