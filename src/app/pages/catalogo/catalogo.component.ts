import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  constructor(private apiService:ApiService,private route: ActivatedRoute){}
  Autosmostrar:any[]=[];
  autosEncontrados: any[] = [];

  AutosMarca:any[]=[];
  Marca: string = '';
  AutosModelo:any[]=[];
  Modelo: string = '';
  Combustible: string = '';
  Trasmision:string="";
  Estado:string="";
  Automarca: any;
  Automodelo: any;

  ngOnInit(): void {
    this.Automarca = this.route.snapshot.paramMap.get('marca');
    this.Automodelo = this.route.snapshot.paramMap.get('modelo');
    if(this.Automarca&&this.Automodelo){
    this.apiService.buscarAutosPorMarcaYModelo(this.Automarca,this.Automodelo).subscribe(data => {
        this.Autosmostrar = data;

        console.log(this.autosEncontrados)
      });


    }else if(this.Automarca&&!this.Automodelo){

      this.apiService.buscarAutosPorMarcaYModelo(this.Automarca,).subscribe(data => {
        this.Autosmostrar = data;

        console.log(this.autosEncontrados)
      });

    }else{
      this.apiService.getAutosrecientes(10).subscribe(Autosmostrar=>{

      this.Autosmostrar=Autosmostrar;

      console.log(this.Autosmostrar)
       })
    }

    console.log(this.Automarca+this.Automodelo )



    this.apiService.getAutosMarcas().subscribe(AutosMarca=>{

      this.AutosMarca=AutosMarca;

      console.log(this.AutosMarca)
    })


  }


  marca(){
    this.apiService.getAutosModelo(this.Marca).subscribe(AutosModelo=>{

      this.AutosModelo=AutosModelo;
      console.log(this.Marca)
      console.log(this.AutosModelo)

   })



}

 modelo(){
  console.log(this.Modelo)

   }

   combustible(){
    console.log(this.Combustible)
   }
   trasmision(){
    console.log(this.Trasmision)
   }
   estado(){
    console.log(this.Estado)
   }

   buscar(){
    console.log(this.Marca,this.Modelo,this.Combustible,this.Trasmision,this.Estado)
    this.apiService.buscarAutosPorMarcaYModelo(this.Marca, this.Modelo, this.Combustible, this.Trasmision, this.Estado).subscribe(
      (data) => {
        // El código que se ejecuta cuando la solicitud es exitosa
        this.Autosmostrar = data;
        console.log(this.Autosmostrar);

      },
      (error) => {

      this.Autosmostrar = [];
        // El código que se ejecuta cuando se produce un error en la solicitud
        console.error('Se ha producido un error:', error);
        // Puedes agregar código adicional para manejar el error, como mostrar un mensaje de error al usuario.
      }
    );
   }
}
