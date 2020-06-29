const Viajes = require('../models/Viajes')
exports.viajesControllerAll = async (req, res)=>{
    const viajes = await Viajes.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}   
exports.viajesControllerById = async  (req, res)=>{
    const viajes = await Viajes.findByPk(req.params.id)
    res.render('viaje', {
        viajes,
        pagina: 'Viajes'
        
    }); 
        
}