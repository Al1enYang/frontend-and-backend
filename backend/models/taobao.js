const { Sequelize,DataTypes } = require("sequelize");
const  sequelize  = require("../utils/db");

const index = sequelize.define('taobao', {
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
    price:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    buyer:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    comment:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
}, {
    freezeTableName: true,
});

module.exports=index
