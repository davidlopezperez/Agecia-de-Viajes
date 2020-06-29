const Testimonio = require('../models/testimonios')

exports.expererienciasController = async (req, res)=>{
    const testimoniales = await Testimonio.findAll()
    res.render('testimoniales', {
        pagina: 'Experiencias',
        testimoniales
  });
        
}

exports.experienciasPOST = async (req, res)=>{
    //Validar que todos los campos esten completos
    
    let {nombre, correo, testimonio} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'});
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu correo'});
    }
    if(!testimonio){
        errores.push({'mensaje': 'Agrega tu testimonio'});
    }

    //Revisar por errores

    if(errores.length>0){
        //Muestra la vista con errores 
       const testimoniales = await Testimonio.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            testimoniales,
            pagina: 'Testimonios'
            
        })
    }else  {
        //Almacenar el mensaje en la base de datos
        Testimonio.create({
            nombre,
            correo,
            testimonio
        })
            
          .then(testimoniales => res.redirect('/testimoniales'))
          
          .catch(error => console.log(error));
        
        
    }
}