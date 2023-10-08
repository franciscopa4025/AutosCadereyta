import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-autodetalles',
  templateUrl: './autodetalles.component.html',
  styleUrls: ['./autodetalles.component.css']
})
export class AutodetallesComponent implements  OnInit {
  constructor(private apiService:ApiService,private route: ActivatedRoute){}
  auto:any;
  autosimilares:any[]=[];
  autoId: any;
  ngOnInit(): void {
    this.autoId = this.route.snapshot.paramMap.get('id');

    this.apiService.obtenerAutoPorId(this.autoId).subscribe(data => {
         this.auto=data
      console.log("Auto obtenido:", data);
      // Aquí puedes manejar los datos del auto obtenido
    });

    this.apiService.getAutosrecientes(8).subscribe(data => {
      this.autosimilares=data;
      console.log(this.autosimilares)
   // Aquí puedes manejar los datos del auto obtenido
 });
  }

}
