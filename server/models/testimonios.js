const Sequelize = require('sequelize');
const db = require('../config/database');

const Testimonio = db.define('testimoniales', {

    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    testimonio:{
        type: Sequelize.STRING
    }
    
});

module.exports = Testimonio;