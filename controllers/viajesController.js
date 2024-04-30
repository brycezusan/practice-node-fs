import Viaje from "../models/Viaje.js"
const paginaInicio = (req , res)=>{
  res.render('inicio',{
    pagina : 'Inicio'
  })
}

const paginaNosotros = (req, res)=>{
  res.render('nosotros',{
    pagina:'Nosotros'
  })
}

const paginaTestimoniales = (req, res)=>{
  res.render('testimonios',{
    pagina : 'Testimoniales'
  })
}

const paginaViajes = async (req, res)=>{
  const viajes = await Viaje.findAll()
  res.render('viajes',{
    pagina : 'Viajes',
    viajes
  })
}

//
const paginaDetalle = async(req , res)=>{
  const { viaje } = req.params

  try {
    const data = await Viaje.findOne({where:{slug:viaje}})
    res.render('viaje-detalle',{
      pagina : 'Informacion Viaje',
      data
    })
  } catch (error) {
    console.log(error)
  }

}

export {
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalle
}