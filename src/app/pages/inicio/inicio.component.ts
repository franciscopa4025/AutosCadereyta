import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 Autosano:any[]=[];
  AutosMarcas:any[]=[];
  AutosModelo:any[]=[];
  Autosrecientes:any[]=[];
  Marcas: string = '';
  Modelo: string = '';
  datosListos = false;
  constructor(private apiService:ApiService){
     this.llenarDatos()
  }

  ngOnInit(): void {
    this.apiService.getAutosMarcas().subscribe(AutosMarcas => {
      this.AutosMarcas = AutosMarcas;
      console.log(this.AutosMarcas);
      this.verificarDatosListos();
    });

  }

  llenarDatos() {
    this.apiService.getAutosdelano().subscribe(Autosano => {
      this.Autosano = Autosano;
      console.log(this.Autosano, "kbzkhbhb");
      this.verificarDatosListos();
    });

    this.apiService.getAutosMarcas().subscribe(AutosMarcas => {
      this.AutosMarcas = AutosMarcas;
      console.log(this.AutosMarcas);
      this.verificarDatosListos();
    });

    this.apiService.getAutosrecientes(6).subscribe(Autosrecientes => {
      this.Autosrecientes = Autosrecientes;
      console.log(this.Autosrecientes);
      this.verificarDatosListos();
    });


  }

  marca(){
     this.apiService.getAutosModelo(this.Marcas).subscribe(AutosModelo=>{

      this.AutosModelo=AutosModelo;
      console.log(this.Marcas)
      console.log(this.AutosModelo)
    })
  }


  verificarDatosListos() {
    // Verifica si todos los datos necesarios se han cargado
    if (this.Autosano && this.AutosMarcas && this.Autosrecientes) {
      this.datosListos = true;
    }
  }



}
