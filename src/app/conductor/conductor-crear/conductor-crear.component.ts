import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/service/conductor.service';

@Component({
  selector: 'app-conductor-crear',
  templateUrl: './conductor-crear.component.html',
  styleUrls: ['./conductor-crear.component.css']
})
export class ConductorCrearComponent implements OnInit {

  modelConductor: Conductor ={
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    tipoDocumento: '',
    nroDocumento: '',
    telefono: '',
    correo: '',
    direccion: '',
    sexo: '',
    estadoCivil: '',
    fechaNacimiento: '',
    observacion: '',
    estado: '',
    nroLicenciaCorrelativo: '',
    claseCategoria: '',
    estadoLicencia: '',
    fechaExpedicion: '',
    fechaRevalidacion: '',
    restricciones: ''
  };

  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
  }
/*
  Guardar(modelConductor: Conductor){
    this.conductorService.ConductorSave(modelConductor);
  }*/
}
