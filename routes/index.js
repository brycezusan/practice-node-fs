import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalle
} from "../controllers/viajesController.js";
import {guardarTestimonial} from "../controllers/testimonialesController.js"

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:viaje", paginaDetalle);
router.get("/testimonios", paginaTestimoniales);
router.post("/testimonios",guardarTestimonial);

export default router;
