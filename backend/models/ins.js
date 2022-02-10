const { Sequelize,DataTypes } = require("sequelize");
const  sequelize  = require("../utils/db");

const index = sequelize.define('ins', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    phoneOrEmail:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    fullName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    userName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    password:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
}, {
    freezeTableName: true,
});

module.exports=index