import { Conductor } from "./conductor";
import { Ruta } from "./ruta";
import { Vehiculo } from "./vehiculo";

export class Viaje {
    id?: number;
    horaRegistro?: String;
    horaLlegada?: String;
    horaSalida?: String;
    nroVueltas?: String;
    fecha?: String;
    terminal?: String;
    vehiculo?: Vehiculo;
    conductor?: Conductor;
  
}
