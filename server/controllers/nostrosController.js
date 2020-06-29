exports.infoNosotros = async (req, res)=>{
    await res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}