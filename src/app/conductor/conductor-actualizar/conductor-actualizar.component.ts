import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-conductor-actualizar',
  templateUrl: './conductor-actualizar.component.html',
  styleUrls: ['./conductor-actualizar.component.css']
})
export class ConductorActualizarComponent implements OnInit {

  conductores: Conductor ={
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

  objConductor = this.conductores;

  constructor(
    private noficacionService: NotificationService,
    private router: Router,
    private tokenService: TokenService,
    private conductorService: ConductorService,
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let conductor = localStorage.getItem('conductor')
    this.conductores = JSON.parse(conductor)
  }
  Actualizar(){
    this.conductorService.conductorActualizar(this.conductores).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/conductor/listar']);
      })
      .catch(err =>{
        if(err.status === 401){
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
      })
  }


}
