function index (req, res, next,){
    const {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
        } = req.body
        
        
        if (!title || !year || !director || !poster || !duration || !rate || !genre) {
                    return res.status(400).json({ error: 'Todos los datos son obligatorios' });
             }
        else {
            if (year>1950 && year<2024) {
                next()
            }
        else return res.status(400).json({ error: '4 dígitos requerido' });
        }


     
}

module.exports = {index}