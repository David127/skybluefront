import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/service/propietario.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-propietario-listar',
  templateUrl: './propietario-listar.component.html',
  styleUrls: ['./propietario-listar.component.css']
})
export class PropietarioListarComponent implements OnInit {

  propietarios: Propietario[] = [];
  propietario: Propietario = {
    id: 0,
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    tipoDocumento: "",
    nroDocumento: "",
    telefono: "",
    correo: "",
    direccion: "",
    sexo: "",
    estadoCivil: "",
    fechaNacimiento: "",
    fechaIngreso: "",
    fechaSalida: "",
    observacion: "",
    estado: "",
    ubigeo: {

    },
  } 

  roles: string[];
  isAdmin = true;
  page = 1;
  pageSize = 10;

  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  estado = 'activo';

  constructor(private propietarioService: PropietarioService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPropietario();
  }
  cargarPropietario() {
    this.propietarioService.propietarioListar(this.page, this.pageSize).forEach(
      (data: any) => {
        console.log(data);
        this.propietarios = data.data;
        this.isFirst          = data.pagination.isFirst;
        this.isLast           = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });
  }

  buscarPropietario(p: Propietario) {
    localStorage.setItem("propietario", JSON.stringify(p));
    this.router.navigate(["/propietario/actualizar"]);
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarPropietario();
    }
  }
  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarPropietario();
    }
  }

}
