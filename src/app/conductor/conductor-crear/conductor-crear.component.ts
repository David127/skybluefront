import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-conductor-crear',
  templateUrl: './conductor-crear.component.html',
  styleUrls: ['./conductor-crear.component.css']
})
export class ConductorCrearComponent implements OnInit {
  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
  // variables para enviar a las clases
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

  constructor(
    private conductorService: ConductorService,    
    private noficacionService: NotificationService,
    private router: Router,   
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
  }

  
 registrar() {
  this.conductorService.conductorRegistrar(this.conductores).subscribe(
    data => {
      this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/conductor/listar']);
      
    }, err => {
      // console.log(err);
      if (err.error === null) {
        this.tokenService.logOut();
        this.router.navigate(['/login'])
      }
      this.errMsj = err.error.mensaje || err.error.mesaje;
    }
  )
}
}
