import { Ruta } from "./ruta";

export class Vehiculo {
    id: number = 0;
    placa: String;
    padron: String;
    clase: String;
    modelo: String;
    tarjeta_propiedad: String;
    anioFabricacion: String;
    nroMotor: String;
    pesoNeto: number;
    pesoBruto: number;
    marca: String;
    nroAsientos: number;
    nroPasajeros: number;
    tipoCombustible: number;
    carroceria: String;
    color: String;
    numeroSerieMotor: String;
    numeroCilindros: number;
    numeroRuedas: number;
    longitud: number;
    altura: number;
    ancho: number;
    cargaUtil: number;
    nroEjes: number;
    kilomentraje: number
    ruta: Ruta
}
