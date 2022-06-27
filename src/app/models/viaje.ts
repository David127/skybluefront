import { Conductor } from "./conductor";
import { Ruta } from "./ruta";
import { Vehiculo } from "./vehiculo";

export class Viaje {
    id?: number;
    horaRegistro?: String;
    horaLlegada?: String;
    horaSalida?: String;
    nroVueltas?: String;
    fecha?: Date;
    terminal?: String;
    vehiculo?: Vehiculo;
    conductor?: Conductor;
  
}
