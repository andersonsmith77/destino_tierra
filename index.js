
import indicadoresDestinoPlanetaNamek from "./planetaNamek.js";
import { contarSaltosParalLegarATierra } from "./funcionesUtilesNave.js";

indicadoresDestinoPlanetaNamek.forEach((indicadorDestino) => {
    const saltosNecesario = contarSaltosParalLegarATierra(0, indicadorDestino);

    console.log("{ " + "indicador de destino: " + indicadorDestino + ", " + "saltos necesarios: " + saltosNecesario + " }");
});