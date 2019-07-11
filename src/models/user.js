module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId : {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        practice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userrole: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });



    // User.associate = (models) => {
    //     User.hasMany(models.Client,{
    //         foreignKey: 'userId',
    //         as: 'clients',
    //       });
    // };

    return User;
};

