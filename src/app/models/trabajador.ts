import { Cargo } from "./cargo";
import { Sueldo } from "./sueldo";
import { Ubigeo } from "./ubigeo";

export class Trabajador {
    id?: number;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    tipoDocumento?: string;
    nroDocumento?: string;
    telefono?: string;
    correo?: string;
    direccion?: string;
    sexo?: string;
    estadoCivil?: string;
    fechaNacimiento?: string;
    fechaIngreso?: string;
    fechaSalida?: string;
    observacion?: string;
    estado?: string;
    cargo?:Cargo;
    ubigeo?:Ubigeo;
    sueldos?:Sueldo;
    
}
