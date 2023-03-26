
import indicadoresDestinoPlanetaNamek from "./planetaNamek.js";
import { contarSaltosParalLegarATierra } from "./funcionesUtilesNave.js";

indicadoresDestinoPlanetaNamek.forEach((indicadorDestino) => {
    const saltosNecesarios = contarSaltosParalLegarATierra(0, indicadorDestino);

    console.log("{ " + "indicador de destino: " + indicadorDestino + ", " + "saltos necesarios: " + saltosNecesarios + " }");
});