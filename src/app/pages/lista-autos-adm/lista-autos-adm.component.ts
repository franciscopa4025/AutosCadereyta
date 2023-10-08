import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-lista-autos-adm',
  templateUrl: './lista-autos-adm.component.html',
  styleUrls: ['./lista-autos-adm.component.css']
})
export class ListaAutosAdmComponent implements OnInit {
  constructor(private apiService:ApiService,private router: Router){   this.apiService.getAutostodos().subscribe(Autosano=>{

      this.Autostodos=Autosano;

      console.log(this.Autostodos)
    })
}
  Autostodos:any[]=[];
  au:any[]=[];

  isChecked = true; // Propiedad para almacenar el valor del checkbox



  ngOnInit(): void {





  }
  onCheckboxChange(auto: number,valor:boolean) {

    const operation = {
      "op": "replace",
      "path": "/Disponible",
      "value": valor
    };
    this.apiService.patchAuto(auto, operation).subscribe(response => {
      console.log('Auto actualizado:', response);
    });
    console.log('Estado de disponibilidad de auto ID', auto,valor);

  }

  editar(idauto:number) {
    this.router.navigate(['/edit', idauto]);
  }



}
