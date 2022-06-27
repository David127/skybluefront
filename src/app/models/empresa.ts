import { Ubigeo } from "./ubigeo";
import { Ruta } from "./ruta";

export class Empresa {

    id?: number;
    ruc?: string;
    nombre?: string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    logo?: string;
    ubigeo?:Ubigeo;
    ruta?:Ruta;
}
