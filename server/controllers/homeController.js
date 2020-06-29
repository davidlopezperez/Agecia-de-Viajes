const Viajes = require('../models/Viajes');
const Testimonio = require('../models/testimonios');
exports.consultasHomePage = async (req, res) =>{
        const promises = [];
        const viajes = await Viajes.findAll({limit: 3}) 
        const testimoniales = await Testimonio.findAll({limit: 3});

        //Pasar el promisse y ejecutarlo
        res.render('index', {
            clase: 'home',
            pagina: 'Inicio',
            viajes,
            testimoniales
            
        }) 
    
}