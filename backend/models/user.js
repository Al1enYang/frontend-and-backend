const { Sequelize,DataTypes } = require("sequelize");
const  sequelize  = require("../utils/db");

const index = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    name:{
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
